# Deployment & Änderungsnotiz — FuchsFibercraft Shop

Datum: 2026-08-15
Autor: FuchsFibercraft12

Kurzüberblick

Ich habe die Navigation und einige interaktive Elemente verbessert und die Seiten‑URL für die Live‑Domain angepasst. Die Änderungen sind in main gepusht und sollten automatisch von Vercel deployed werden.

Wichtige Commits

- CSS: responsive Hamburger‑Menu Styles — commit: Improve navigation: add responsive hamburger menu styles
  https://github.com/FuchsFibercraft12/Fuchs-Fibercraft-Shop/commit/b2815bf4a0b98acaa2bd8f199a5479beea72f71c

- HTML: Navbar, Suche, Mini‑Cart (index.html) — commit: Improve navbar: responsive hamburger, search and mini-cart
  https://github.com/FuchsFibercraft12/Fuchs-Fibercraft-Shop/commit/3f42a2fac368a1e078d5662d9994a63c3ef6602f

- URL aktualisiert auf https://fuchsfibercraft.vercel.app — commit: Update site URL to fuchsfibercraft.vercel.app and pageUrl; deploy-ready
  https://github.com/FuchsFibercraft12/Fuchs-Fibercraft-Shop/commit/fa951f6ef4c4e7ad9f00a8dd449af050604bb9fa

Was wurde geändert

- Responsive Navigation: Hamburger‑Button für mobile Geräte, Slide‑in Menü von rechts, Fokus‑Zustände, Escape & Outside‑Click schließen.
- Live‑Suche: Suchfeld filtert Produkt‑Cards clientseitig (kleines, leichtes Script).
- Mini‑Cart: Platzhalter‑Panel, das per Button geöffnet/geschlossen werden kann.
- pageUrl / og:url: auf https://fuchsfibercraft.vercel.app aktualisiert (wird beim Kopieren verwendet und für Open Graph).
- CSS: reduced‑motion support und accessible focus states hinzugefügt.

Schnelltest (was du prüfen solltest)

1. Warte ~1–2 Minuten nach dem Push, dann öffne:
   https://fuchsfibercraft.vercel.app

2. Tests:
   - Desktop: Navbar/Links + Suchfeld + Warenkorb sichtbar und funktional.
   - Mobil (kleines Browserfenster): Hamburger‑Icon klickbar → Menü schiebt von rechts ein. Escape oder Klick außerhalb schließt das Menü.
   - Suche: Tippe einen Begriff; Produkt‑Karten filtern sofort.
   - Warenkorb: Klick öffnet ein kleines Panel (Platzhalter).
   - Kopier‑Buttons in der Sidebar kopieren die neue Domain / Order‑Template in die Zwischenablage.

Wenn Änderungen nicht sichtbar sind

- Vercel deployt automatisch; falls nicht, im Vercel Dashboard → Project → Deploys prüfen und ggf. manuellen Re‑Deploy auslösen.
- Prüfe, ob die Domain in Vercel als Alias eingetragen ist (meist nicht nötig für default vercel.app Subdomain).
- Leere Cache / teste im Inkognito‑Fenster.

Empfohlene nächste Schritte (optional)

- Beschränke Blink/Animation ausschließlich auf Preisschilder (ich kann das sofort umsetzen).
- Mini‑Cart erweitern: Artikel hinzufügen, LocalStorage, kleines Checkout‑Flow (Stripe/PayPal Integration separat).
- Kategorie‑Dropdowns / keyboard‑navigierbare Menüs für viele Produkte.
- CI/CD: Vercel Build Hooks einrichten oder automatisches Preview‑Testing konfigurieren.

Wenn du möchtest, setze ich eine dieser Aufgaben direkt um — antworte mit einer kurzen Anweisung: z. B. "nur Preise", "mini‑cart erweitern" oder "akzentfarbe ändern zu pink".

---
Hinweis: Diese Datei ist eine kurze Betriebs‑ und Änderungsnotiz für das Repo. Sie dient als schnelle Referenz für Deploys und Tests.