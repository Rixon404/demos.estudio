document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('open');
        // ensure it's visible (for browsers without CSS transition)
        navLinks.style.display = navLinks.classList.contains('open') ? 'flex' : 'none';
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navLinks.style.display = 'none';
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navLinks.classList.remove('open');
            navLinks.style.display = 'none';
        }
    });

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    });

    // Basic accordion pattern (si hay .accordion en la página)
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
            const content = item.querySelector('.accordion-content');
            if (content) {
                content.style.maxHeight = item.classList.contains('active') ? content.scrollHeight + "px" : null;
            }
        });
    });

    // Accordion functionality
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const wasActive = item.classList.contains('active');

            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

            // Open clicked item if it wasn't active
            if (!wasActive) item.classList.add('active');
        });
    });

    // Smooth scrolling for navigation links (preserve in-page anchor behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // if mobile nav open, close it
                document.querySelectorAll('.nav-links.open').forEach(n => n.classList.remove('open'));
            }
        });
    });

    // Hero slider automático
    (function initHeroSlider() {
        const heroSlides = document.querySelectorAll('.hero-slide');
        if (!heroSlides.length) return;
        let currentSlide = 0;
        setInterval(() => {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }, 4000);
    })();

    // Theme (dark / light) toggle + swap whatsapp icon
    (function initTheme(){
        const btn = document.getElementById('theme-toggle');
        const whatsappImg = document.querySelector('.whatsapp-icon img');
        const storageKey = 'rix-theme';
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        const lightIcon = 'assets/icons/whatsapp-icon.png';
        const darkIcon  = '/icons/whatsapp-icon-dark-mode.png'; // ruta provista

        const applyTheme = (theme) => {
            document.documentElement.classList.toggle('dark-mode', theme === 'dark');
            if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
            if (whatsappImg) whatsappImg.src = (theme === 'dark') ? darkIcon : lightIcon;
        };

        const saved = localStorage.getItem(storageKey);
        const initial = saved ? saved : (prefersDark ? 'dark' : 'light');
        applyTheme(initial);

        if (!saved && window.matchMedia) {
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            const mqHandler = (e) => applyTheme(e.matches ? 'dark' : 'light');
            if (mq.addEventListener) mq.addEventListener('change', mqHandler);
            else mq.addListener(mqHandler);
        }

        btn?.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark-mode');
            const theme = isDark ? 'dark' : 'light';
            applyTheme(theme);
            localStorage.setItem(storageKey, theme);
        });
    })();

    // Footer form logic: mostrar/ocultar bloques y construir mensaje WhatsApp
    (function footerForm(){
        const form = document.getElementById('footer-interest-form');
        if (!form) return;
        const deseoRadios = form.querySelectorAll('input[name="deseo"]');
        const sesionBlock = document.getElementById('sesion-block');
        const tiempoBlock = document.getElementById('tiempo-block');
        const sendBtn = document.getElementById('footer-send-ws');
        const waNumber = '5354479465';

        const updateVisibility = () => {
            const deseo = form.querySelector('input[name="deseo"]:checked')?.value;
            if (deseo === 'sesion') {
                sesionBlock.style.display = 'block';
                tiempoBlock.style.display = 'block';
            } else {
                // alquilar: ocultar opciones de cantidad/tipo y mostrar tiempo/equipos
                sesionBlock.style.display = 'none';
                tiempoBlock.style.display = 'block';
            }
        };

        // initial
        updateVisibility();

        deseoRadios.forEach(r => r.addEventListener('change', updateVisibility));

        const buildMessage = () => {
            const deseo = form.querySelector('input[name="deseo"]:checked')?.value || '';
            const tipo = form.querySelector('input[name="tipo_sesion"]:checked')?.value || '';
            const cantidad = form.querySelector('input[name="cantidad"]:checked')?.value || '';
            const tiempo = form.querySelector('input[name="tiempo"]:checked')?.value || '';
            const equipos = form.querySelector('input[name="equipos"]:checked')?.value || '';

            let msg = 'Hola, me interesa ';
            if (deseo === 'sesion') {
                msg += `una sesión de fotos`;
                if (tipo) msg += ` en ${tipo}`;
                if (cantidad) msg += `, podrían ser unas ${cantidad} fotos`;
            } else {
                msg += `alquilar el estudio`;
            }

            if (tiempo) msg += `, tiempo estimado: ${tiempo}`;
            if (equipos) msg += `. Incluir equipos: ${equipos}.`;

            return msg;
        };

        sendBtn?.addEventListener('click', () => {
            const text = buildMessage();
            const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        });
    })();

});