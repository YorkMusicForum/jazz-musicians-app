const musicians = [
  {
    name: "Louis Armstrong",
    description: "Pioneering jazz trumpeter and vocalist, famous for his virtuosic playing and iconic gravelly voice.",
    recordings: ["What a Wonderful World", "West End Blues"],
    spotify: "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb",
    instrument: "Trumpet"
  },
  {
    name: "Ella Fitzgerald",
    description: "The 'First Lady of Song', renowned for her pure tone and incredible scat singing.",
    recordings: ["Summertime", "Cheek to Cheek"],
    spotify: "https://open.spotify.com/artist/2WX2uTcsvV5OnS0inACecP",
    instrument: "Vocals"
  }
];

function renderMusicians(filter = "all") {
  const container = document.getElementById("musician-list");
  container.innerHTML = "";
  musicians
    .filter(m => filter === "all" || m.instrument === filter)
    .forEach(m => {
      const div = document.createElement("div");
      div.className = "musician";
      div.innerHTML = `
        <h2>${m.name}</h2>
        <p><strong>Instrument:</strong> ${m.instrument}</p>
        <p>${m.description}</p>
        <ul class="recordings">${m.recordings.map(r => `<li>${r}</li>`).join("")}</ul>
        <a class="spotify-link" href="${m.spotify}" target="_blank">Listen on Spotify</a>
      `;
      container.appendChild(div);
    });
}

function setupFilterOptions() {
  const inst = [...new Set(musicians.map(m => m.instrument))].sort();
  const sel = document.getElementById("instrumentFilter");
  inst.forEach(i => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    sel.appendChild(opt);
  });
  sel.addEventListener("change", e => renderMusicians(e.target.value));
}

document.addEventListener("DOMContentLoaded", () => {
  setupFilterOptions();
  renderMusicians();
});
