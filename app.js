const DATA_URL = "playlist.json";

async function loadPlaylist() {
  const title = document.getElementById("playlist-title");
  const meta = document.getElementById("playlist-meta");
  const list = document.getElementById("track-list");
  const error = document.getElementById("error");

  try {
    const response = await fetch(DATA_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("playlist.json kon niet worden geladen.");

    const data = await response.json();
    const tracks = Array.isArray(data.tracks) ? data.tracks : [];

    title.textContent = data.name || "Spotify playlist";
    meta.textContent = tracks.length + (tracks.length === 1 ? " nummer" : " nummers");

    list.innerHTML = tracks.map((track, index) => {
      const artists = Array.isArray(track.artists)
        ? track.artists.join(", ")
        : (track.artist || "");

      return `
        <article class="track">
          <div class="track-number">${String(index + 1).padStart(2, "0")}</div>
          <div>
            <p class="track-title">${escapeHtml(track.title || "")}</p>
            <p class="track-artist">${escapeHtml(artists)}</p>
          </div>
          ${track.url ? `<a class="track-link" href="${escapeAttribute(track.url)}" target="_blank" rel="noopener">Spotify ↗</a>` : ""}
        </article>
      `;
    }).join("");
  } catch (err) {
    title.textContent = "SpotifyList";
    error.hidden = false;
    error.textContent = err.message;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

loadPlaylist();