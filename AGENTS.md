# fotografo - AGENTS.md

## Project Overview
Static photography portfolio website (HTML/CSS/JS only, no backend).

## Key Files
- `index.html` — entry point, all sections inline
- `main.js` — JS logic (NOT app.js)
- `styles.css` — all styling

## Sections
- `#inicio`, `#portafolio`, `#servicios`, `#precios`, `#nosotros`, `#terminos`, `#contacto`

## Development

### Local dev server
```bash
python3 -m http.server 8000
# or
npx http-server -p 8000
```
Open http://localhost:8000

### No build step
This is a static site. No bundler, no tests, no typecheck.

## Important Patterns

### Asset paths
```html
assets/photos/           <!-- standard images -->
assets/photos/hd/       <!-- high-res versions -->
assets/photos/galeria/   <!-- gallery images -->
assets/icons_wsp/        <!-- WhatsApp icons -->
```
Place new portfolio images in `assets/photos/` or appropriate subfolder.

### i18n (ES/EN)
All translatable text uses `data-lang` attributes. Translations stored in `main.js`:
```javascript
const translations = { es: {...}, en: {...} }
```
Toggle via the EN/ES button (stores state in `currentLang`).

### Portfolio filtering
Filter buttons use `data-filter` attribute. Items use `data-category`:
```html
<button class="filter-btn" data-filter="retratos">
<div class="portfolio-item" data-category="retratos">
```

### Mobile menu
JS toggles `.open` class on `.nav-links`. CSS handles display.

### Booking form
Form builds WhatsApp message and opens `https://wa.me/5354479465`. Updates visibility based on "sesion" vs "alquiler" radio choice.

## Editing Tips

### Adding a new section
1. Add `<section id="newid">` to `index.html`
2. Add styles in `styles.css`
3. Add navigation link in `.nav-links`
4. Update `translations` object in `main.js` for both ES/EN

### Changing prices
Edit HTML directly in `#precios` section. Prices are hardcoded in the pricing cards.

### Updating translations
Add keys to both `es` and `en` objects in `main.js`, then add `data-lang="key"` to HTML elements.

## Gotchas
- Leaflet map loads from CDN (`unpkg.com/leaflet@1.9.4`)
- `terms_2_desc` in translations says "30 días" but HTML shows "60 días" — verify which is correct before editing
- The `#ventajas` section is commented out in HTML, but styles remain in CSS