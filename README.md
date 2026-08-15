# Fuchs-Fibercraft-Shop

Diese Repo enthält die fertige Ein-Seiten Donation-Shop Website für FuchsFibercraft.

Dateien:
- `index.html` — Hauptseite (kommt mit Styling, Partikel-Hintergrund, Kopier-Buttons)
- `og-image.svg` — Social-Preview (1200×630)
- `favicon.svg` — Favicon
- `.vercelignore` — Vercel Ignore Datei

Deployment (Vercel)
1) GitHub → Vercel (empfohlen):
   - Gehe zu https://vercel.com/new
   - Importiere dieses Repository (FuchsFibercraft12/Fuchs-Fibercraft-Shop)
   - Framework: Other
   - Root: /
   - Deploy

2) Oder lokal via Vercel CLI:
   - Installiere: `npm i -g vercel`
   - `vercel login`
   - Im Repo-Ordner: `vercel --prod`

Wichtig:
- Die Variable `pageUrl` in `index.html` ist bereits auf die vermutete Vercel-URL gesetzt: `https://fuchs-fibercraft-shop.vercel.app`. Wenn du die Seite unter einer anderen URL hostest, aktualisiere diese Variable oder setze eine Vercel Alias.
- Für bessere Discord-Previews sorgt `og-image.svg` (Discord rendert SVGs meistens nicht als Bildvorschau; wenn du eine PNG brauchst, ersetze `og-image.svg` durch ein `og-image.png` (1200×630)).

Wenn du willst, generiere ich noch eine PNG-Preview, oder ich ändere die `pageUrl` nach dem ersten Deploy auf die finale URL. Außerdem kann ich auf Wunsch automatisch die fertige Seite als Release oder in einen Branch pushen.
