# Verbatim – Website (statisch)

Statische Marketing-Website für [verbatim-tool.de](https://verbatim-tool.de).  
Das Tool selbst (Dashboard, Login, Analyse) läuft separat auf einer Subdomain über Lovable.

## Setup

```bash
npm install
npm run dev      # Entwicklungsserver auf localhost:5173
npm run build    # Produktions-Build nach /dist
```

## Konfiguration

**`src/config.ts`** – Hier die URL der Lovable-App anpassen:

```ts
export const APP_URL = "https://app.verbatim-tool.de";
```

Alle Login/CTA-Buttons verlinken dorthin.

## Bilder

Die Showcase-Bilder der SEO-Landing-Pages referenzieren aktuell noch Lovable-Asset-URLs
(nur das Beispielbild auf der Startseite liegt schon unter `/public/images/`).  
→ Bilder aus Lovable herunterladen und unter `/public/images/` ablegen, dann die Pfade
in den Route-Dateien aktualisieren.

## Deployment

Push auf `main` → GitHub Actions baut und deployt automatisch auf GitHub Pages.  
Die `CNAME`-Datei unter `/public/` setzt die Custom Domain.

## Struktur

```
src/
  config.ts           – APP_URL (Lovable-Subdomain)
  main.tsx            – Router-Setup
  styles.css          – Tailwind + Design-Tokens
  components/
    SiteChrome.tsx    – Header & Footer
    KeywordLanding.tsx – Wiederverwendbares SEO-Landing-Template
    LegalPage.tsx     – Shared Layout für Rechtstexte
    ui/button.tsx     – Button-Komponente
  routes/
    index.tsx         – Startseite
    suetterlin-uebersetzen.tsx
    kurrent-lesen.tsx
    urkunden-transkribieren-ki.tsx
    erbenermittler-software.tsx
    agb.tsx
    datenschutz.tsx
    impressum.tsx
    support.tsx
```
