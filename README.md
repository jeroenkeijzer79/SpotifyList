# SpotifyList

Een GitHub Pages-project dat playlistdata uit `playlist.json` leest en omzet naar een eigen HTML/CSS-layout.

## Structuur

- `index.html` — pagina
- `styles.css` — vormgeving
- `app.js` — playlist inladen en HTML genereren
- `playlist.json` — playlistdata

## Spotify

De website bevat bewust geen Spotify client secret. De publieke pagina leest alleen de voorbereide data uit `playlist.json`.

De volgende stap is het koppelen van de vaste Spotify-playlist aan een import/update-proces.