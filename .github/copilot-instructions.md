Goal
- Mantener y extender un sitio estático para RixonStudio (HTML/CSS/JS). No hay backend; es una web estática servida por un servidor estático.

Where to look first
- index.html — punto de entrada (estructura de secciones: #inicio, #ventajas, #portafolio, #precios, #nosotros, #terminos, #contacto).
- styles.css — variables CSS en :root (usa --accent-color, --primary-color, etc.). Busca responsive en los media queries (max-width: 968px y 640px).
- app.js — lógica del menú móvil, smooth scroll y accordion.

Important patterns and conventions
- Static asset path: assets/photos/ — las imágenes del portafolio deben colocarse aquí (nombres sugeridos: photo1.jpg, photo2.jpg...). Portfolio usa <img src="assets/photos/..."> directamente.
- Nav mobile: botón .mobile-menu-btn alterna la clase .open en .nav-links y el código JS ajusta display. Preferir la clase .open para estilos CSS.
- CSS variables: modifica colores y sombras en :root, evita valores hardcoded.
- Section IDs: se usan como anclas. Mantener los ids actuales para el smooth scroll.
- Minimal JS: todas las interacciones están en app.js y usan selectores simples. Evitar añadir frameworks.

How to run / debug locally
- Abrir index.html en el navegador para pruebas simples.
- Para un servidor estático (recomendado): desde la carpeta del proyecto:
  - python3 -m http.server 8000
  - o: npx http-server -p 8000
  - Luego abrir http://localhost:8000
- Inspeccionar consola para errores JS; app.js usa optional chaining para seguridad.

Adding photos
- Coloca archivos en assets/photos/. Ejemplo: assets/photos/photo1.jpg
- Mantener imágenes optimizadas (webp/jpg) y proporciones consistentes para mejor layout.

Editing tips for agents
- When changing nav behavior, edit app.js and ensure CSS includes .nav-links.open fallback for display.
- For portfolio grid changes, edit .portfolio-grid in styles.css and add/remove <div class="portfolio-item"><img ...> nodes in index.html.
- Preserve ARIA/semantic anchors; do not remove section IDs.

No build step
- Proyecto estático: no build or tests by default. PRs should include static preview or screenshots.

If uncertain
- Ask which section to modify (e.g., "¿Actualizar portafolio o diseño del header?").