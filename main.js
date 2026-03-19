// Language Translations
const translations = {
    es: {
        nav_home: 'Inicio',
        nav_portfolio: 'Portafolio',
        nav_services: 'Servicios',
        nav_pricing: 'Precios',
        nav_about: 'Nosotros',
        nav_contact: 'Contacto',
        hero_badge: 'Estudio Profesional en La Habana',
        hero_title: 'Capturamos tu <span>Esencia</span>, Hacemos Realidad tu Deseo',
        hero_subtitle: 'Accesibilidad, visualización del resultado en tiempo real y servicio de entrega rápida. Nuestro estudio está pensado para brindarte comodidad desde que nos confías tu idea hasta que recibes tus fotos.',
        hero_cta_primary: 'Ver Precios',
        hero_cta_secondary: 'Reservar Sesión',
        advantages_tag: 'Por Qué Elegirnos',
        advantages_title: 'Un Oasis Tecnológico en La Habana',
        advantages_subtitle: 'Somos el único estudio que combina tecnología de última generación con servicio profesional. No somos solo fotógrafos, somos tu garantía de calidad.',
        advantage_1_title: 'Electricidad Garantizada',
        advantage_1_desc: 'No cancelamos sesiones por apagones. Contamos con energía constante para que tu sesión nunca se interrumpa.',
        advantage_2_title: 'Monitoreo en Vivo',
        advantage_2_desc: 'Observa tus fotos en tiempo real en un monitor externo mientras posas. Tú decides qué te gusta antes de terminar.',
        advantage_3_title: 'Wi-Fi Gratis',
        advantage_3_desc: 'Conexión a internet disponible para todos nuestros clientes durante toda la sesión fotográfica.',
        advantage_4_title: 'Entrega Express',
        advantage_4_desc: '¿Necesitas tus fotos rápido? Ofrecemos servicio de edición express para entregas casi inmediatas.',
        portfolio_tag: 'Nuestro Trabajo',
        portfolio_title: 'Portafolio',
        portfolio_subtitle: 'Explora nuestra colección de retratos, productos, niños, quinceaños, bodas y eventos capturados con pasión y profesionalismo.',
        filter_all: 'Todos',
        filter_portraits: 'Retratos',
        filter_quince: 'Quinceaños',
        filter_weddings: 'Bodas',
        filter_family: 'Familia',
        filter_products: 'Productos',
        filter_events: 'Eventos',
        portfolio_item_1_title: 'Retratos',
        portfolio_item_1_desc: 'Capturamos tu personalidad',
        portfolio_item_2_title: 'Quinceaños',
        portfolio_item_2_desc: 'Momentos inolvidables',
        portfolio_item_3_title: 'Familia',
        portfolio_item_3_desc: 'Recuerdos para siempre',
        portfolio_item_4_title: 'Bodas',
        portfolio_item_4_desc: 'El día más especial',
        portfolio_item_5_title: 'Productos',
        portfolio_item_5_desc: 'Destaca tu marca',
        portfolio_item_6_title: 'Eventos',
        portfolio_item_6_desc: 'Cada momento cuenta',
        services_tag: 'Lo Que Ofrecemos',
        services_title: 'Servicios',
        services_subtitle: 'Confeccionamos su plan de acuerdo a su presupuesto, desde sesiones profesionales hasta alquiler de estudio.',
        service_1_title: 'Sesiones de Estudio',
        service_1_desc: 'En nuestras instalaciones profesionales con equipamiento de última generación.',
        service_1_feat_1: 'Fotos digitales en 4K',
        service_1_feat_2: 'Monitoreo en tiempo real',
        service_1_feat_3: 'Edición profesional incluida',
        service_1_note_title: 'Opcionales:',
        service_1_note_desc: 'Impresión de fotos desde 8x10 pulg hasta lonas, confección de foto-books y álbumes.',
        service_2_title: 'Sesiones en Exterior',
        service_2_desc: 'En locaciones de tu preferencia, llevamos el estudio contigo.',
        service_2_feat_1: 'Fotos digitales en 4K',
        service_2_feat_2: 'Equipo portátil profesional',
        service_2_feat_3: 'Asesoría de locación',
        service_2_note_title: 'Opcionales:',
        service_2_note_desc: 'Impresión de fotos desde 8x10 pulg hasta lonas, confección de foto-books y álbumes.',
        service_3_title: 'Alquiler de Estudio',
        service_3_desc: 'Equipos y espacios disponibles para fotógrafos independientes.',
        service_3_feat_1: 'Equipos Godox y Sony',
        service_3_feat_2: 'Fondos intercambiables',
        service_3_feat_3: 'Tarifa por hora flexible',
        service_3_note_title: 'Incluye:',
        service_3_note_desc: 'Acceso a Wi-Fi, electricidad garantizada y asistencia técnica.',
        pricing_tag: 'Planes y Precios',
        pricing_title: 'Nuestras Tarifas',
        pricing_subtitle: 'Confeccionamos su plan de acuerdo a su presupuesto',
        pricing_payment_note: '<strong>Aceptamos pago en CUP</strong> al cambio (según la tasa de ElToque) del día de la sesión, aplicando un descuento del 10% si paga en efectivo.',
        pricing_studio_title: 'Sesiones de Estudio',
        pricing_studio_subtitle: 'En nuestra instalación',
        pricing_outdoor_title: 'Sesiones Exterior',
        pricing_outdoor_subtitle: 'En locaciones de su preferencia',
        pricing_rental_title: 'Alquiler de Estudio',
        pricing_rental_subtitle: 'Equipos y espacio disponible',
        pricing_rental_1: 'Alquiler Base',
        pricing_rental_2: '+ Iluminación',
        pricing_rental_3: '+ Equipo Sony',
        pricing_rental_4: 'Plan Porcentual',
        pricing_extras_title: 'Incluye:',
        pricing_extra_1: '✓ Fotos digitales en 4K',
        pricing_extra_2: '✓ Edición profesional',
        pricing_extra_3: '✓ Entrega en 20 días máximo',
        pricing_extra_4: '✓ Asesoría de locación',
        pricing_rental_extra_1: '✓ Internet por Wi-Fi gratis',
        pricing_rental_extra_2: '✓ Electricidad garantizada 24/7',
        pricing_rental_extra_3: '✓ Asistencia técnica en la sesión',
        about_tag: 'Conócenos',
        about_title: 'Sobre Demos Estudio',
        about_subtitle: 'Somos un estudio de fotografía profesional ubicado en el corazón del Vedado, La Habana.',
        about_p1: 'Nuestra misión es ofrecer servicios fotográficos de calidad mundial con tecnología que ningún otro estudio en Cuba puede garantizar.',
        about_p2: 'Creemos que cada sesión debe ser una experiencia inolvidable, por eso combinamos equipamiento de última generación con un trato personalizado y profesional. Tu satisfacción es nuestra prioridad.',
        about_p3: 'Desde retratos personales hasta fotografía comercial, nos especializamos en capturar momentos que cuentan historias. Confía en nosotros para tus proyectos más importantes.',
        stat_clients: 'Clientes Felices',
        stat_years: 'Años de Experiencia',
        stat_satisfaction: 'Satisfacción',
        reviews_title: 'Lo Que Dicen Nuestros Clientes',
        review_1: '"Increíble experiencia. Las fotos quedaron espectaculares y el trato fue excelente. Definitivamente volveré."',
        review_2: '"El mejor estudio de La Habana. La tecnología que usan es impresionante y las fotos en 4K son de otra calidad."',
        review_3: '"Hicimos la sesión de quinceaños de mi hija y fue perfecto. El monitoreo en vivo nos permitió elegir las mejores tomas."',
        terms_tag: 'Información Legal',
        terms_title: 'Términos y Condiciones',
        terms_subtitle: 'Lee nuestras políticas para una experiencia transparente y sin sorpresas.',
        terms_1_title: 'Reserva y Pagos',
        terms_1_desc: 'Para reservar tu sesión fotográfica, se requiere un depósito de 1000 MN (pesos cubanos) que será descontado del total a pagar al final. Este depósito confirma tu cita y garantiza la disponibilidad del estudio en la fecha y hora solicitadas.',
        terms_2_title: 'Plazo de Entrega',
        terms_2_desc: 'El plazo máximo de entrega de tus fotografías editadas es de 60 días calendario desde la fecha de la sesión. Sin embargo, en la mayoría de los casos entregamos mucho antes. Si necesitas un servicio express, consulta nuestras opciones de entrega rápida con costo adicional.',
        terms_3_title: 'Política de Cancelación',
        terms_3_desc: 'Si necesitas cancelar o reprogramar tu sesión, debes notificarnos con al menos 4 días de anticipación para proceder con la devolución completa de tu depósito. Cancelaciones con menos de 4 días de anticipación no son reembolsables, aunque puedes reprogramar una sola vez sin costo adicional.',
        terms_4_title: 'Derechos de Autor',
        terms_4_desc: 'Todos los derechos de autor de las fotografías realizadas pertenecen a Demos Estudio. El cliente recibe licencia de uso personal de las imágenes editadas para redes sociales, impresiones personales y usos no comerciales. Para uso comercial o publicitario, se requiere un acuerdo adicional por escrito.',
        terms_5_title: 'Uso de Imágenes para Portafolio',
        terms_5_desc: 'Demos Estudio se reserva el derecho de utilizar las fotografías realizadas en nuestro portafolio, sitio web, redes sociales y materiales promocionales, salvo que el cliente solicite expresamente lo contrario por escrito antes de la sesión.',
        contact_tag: 'Contáctanos',
        contact_title: '¿Listo Para Tu Sesión?',
        contact_subtitle: 'Escríbenos y reserva tu fecha. Estamos en el corazón del Vedado.',
        contact_location_title: 'Ubicación',
        contact_whatsapp_title: 'WhatsApp',
        contact_instagram_title: 'Instagram',
        contact_map_placeholder: '🗺️ Mapa de Ubicación (Google Maps)',
        contact_map_open: 'Abrir en Google Maps',
        booking_title: 'Reserva tu Sesión',
        booking_desire: '¿Qué te interesa?',
        booking_session: 'Sesión de fotos',
        booking_rental: 'Alquilar el estudio',
        booking_type: 'Tipo de Sesión',
        booking_studio: 'Estudio',
        booking_outdoor: 'Exterior',
        booking_photos: 'Cantidad de Fotos',
        booking_more: '+20',
        booking_time: 'Tiempo',
        booking_equipment: 'Incluir Equipos',
        booking_none: 'No, ninguno',
        booking_flashes: 'Solo Flashes',
        booking_complete: 'Completo',
        booking_send: 'Enviar por WhatsApp',
        booking_note: 'El mensaje se abrirá en WhatsApp con la información seleccionada.',
        whatsapp_text: 'Reserva ya!'
    },
    en: {
        nav_home: 'Home',
        nav_portfolio: 'Portfolio',
        nav_services: 'Services',
        nav_pricing: 'Pricing',
        nav_about: 'About Us',
        nav_contact: 'Contact',
        hero_badge: 'Professional Studio in Havana',
        hero_title: 'We Capture Your <span>Essence</span>, Make Your Wish Come True',
        hero_subtitle: 'Accessibility, real-time result visualization and fast delivery service. Our studio is designed to provide you comfort from the moment you trust us with your idea until you receive your photos.',
        hero_cta_primary: 'View Prices',
        hero_cta_secondary: 'Book Session',
        advantages_tag: 'Why Choose Us',
        advantages_title: 'A Technological Oasis in Havana',
        advantages_subtitle: 'We are the only studio that combines cutting-edge technology with professional service. We are not just photographers, we are your guarantee of quality.',
        advantage_1_title: 'Guaranteed Electricity',
        advantage_1_desc: 'We do not cancel sessions due to blackouts. We have constant energy so your session is never interrupted.',
        advantage_2_title: 'Live Monitoring',
        advantage_2_desc: 'Watch your photos in real time on an external monitor while you pose. You decide what you like before finishing.',
        advantage_3_title: 'Free Wi-Fi',
        advantage_3_desc: 'Internet connection available for all our clients throughout the photo session.',
        advantage_4_title: 'Express Delivery',
        advantage_4_desc: 'Need your photos fast? We offer express editing service for almost immediate deliveries.',
        portfolio_tag: 'Our Work',
        portfolio_title: 'Portfolio',
        portfolio_subtitle: 'Explore our collection of portraits, products, children, quinceañeras, weddings and events captured with passion and professionalism.',
        filter_all: 'All',
        filter_portraits: 'Portraits',
        filter_quince: 'Quinceañeras',
        filter_weddings: 'Weddings',
        filter_family: 'Family',
        filter_products: 'Products',
        filter_events: 'Events',
        portfolio_item_1_title: 'Portraits',
        portfolio_item_1_desc: 'We capture your personality',
        portfolio_item_2_title: 'Quinceañeras',
        portfolio_item_2_desc: 'Unforgettable moments',
        portfolio_item_3_title: 'Family',
        portfolio_item_3_desc: 'Memories forever',
        portfolio_item_4_title: 'Weddings',
        portfolio_item_4_desc: 'The most special day',
        portfolio_item_5_title: 'Products',
        portfolio_item_5_desc: 'Highlight your brand',
        portfolio_item_6_title: 'Events',
        portfolio_item_6_desc: 'Every moment counts',
        services_tag: 'What We Offer',
        services_title: 'Services',
        services_subtitle: 'We tailor your plan according to your budget, from professional sessions to studio rental.',
        service_1_title: 'Studio Sessions',
        service_1_desc: 'In our professional facilities with cutting-edge equipment.',
        service_1_feat_1: '4K digital photos',
        service_1_feat_2: 'Real-time monitoring',
        service_1_feat_3: 'Professional editing included',
        service_1_note_title: 'Optional:',
        service_1_note_desc: 'Photo printing from 8x10 inches to banners, photo-books and albums creation.',
        service_2_title: 'Outdoor Sessions',
        service_2_desc: 'At locations of your choice, we bring the studio to you.',
        service_2_feat_1: '4K digital photos',
        service_2_feat_2: 'Professional portable equipment',
        service_2_feat_3: 'Location advice',
        service_2_note_title: 'Optional:',
        service_2_note_desc: 'Photo printing from 8x10 inches to banners, photo-books and albums creation.',
        service_3_title: 'Studio Rental',
        service_3_desc: 'Equipment and spaces available for independent photographers.',
        service_3_feat_1: 'Godox and Sony equipment',
        service_3_feat_2: 'Interchangeable backgrounds',
        service_3_feat_3: 'Flexible hourly rate',
        service_3_note_title: 'Includes:',
        service_3_note_desc: 'Wi-Fi access, guaranteed electricity and technical assistance.',
        pricing_tag: 'Plans & Pricing',
        pricing_title: 'Our Rates',
        pricing_subtitle: 'We tailor your plan according to your budget.',
        pricing_payment_note: '<strong>We accept payment in CUP</strong> at the exchange rate (according to ElToque rate) of the day of the session, with a 10% discount if you pay in cash.',
        pricing_studio_title: 'Studio Sessions',
        pricing_studio_subtitle: 'At our facility',
        pricing_outdoor_title: 'Outdoor Sessions',
        pricing_outdoor_subtitle: 'At locations of your choice',
        pricing_rental_title: 'Studio Rental',
        pricing_rental_subtitle: 'Equipment and space available',
        pricing_rental_1: 'Base Rental',
        pricing_rental_2: '+ Lighting',
        pricing_rental_3: '+ Sony Equipment',
        pricing_rental_4: 'Percentage Plan',
        pricing_extras_title: 'Includes:',
        pricing_extra_1: '✓ 4K digital photos',
        pricing_extra_2: '✓ Professional editing',
        pricing_extra_3: '✓ Delivery in 20 days maximum',
        pricing_extra_4: '✓ Location advice',
        pricing_rental_extra_1: '✓ Free Wi-Fi internet',
        pricing_rental_extra_2: '✓ Electricity guaranteed 24/7',
        pricing_rental_extra_3: '✓ Technical assistance during the session',
        about_tag: 'About Us',
        about_title: 'About Demos Estudio',
        about_subtitle: 'We are a professional photography studio located in the heart of Vedado, Havana.',
        about_p1: 'Our mission is to offer world-class photographic services with technology that no other studio in Cuba can guarantee.',
        about_p2: 'We believe that every session should be an unforgettable experience, which is why we combine cutting-edge equipment with personalized and professional treatment. Your satisfaction is our priority.',
        about_p3: 'From personal portraits to commercial photography, we specialize in capturing moments that tell stories. Trust us for your most important projects.',
        stat_clients: 'Happy Clients',
        stat_years: 'Years Experience',
        stat_satisfaction: 'Satisfaction',
        reviews_title: 'What Our Clients Say',
        review_1: '"Incredible experience. The photos turned out spectacular and the treatment was excellent. I will definitely return."',
        review_2: '"The best studio in Havana. The technology they use is impressive and the 4K photos are of another quality."',
        review_3: '"We did my daughter\'s quinceañera session and it was perfect. Live monitoring allowed us to choose the best shots."',
        terms_tag: 'Legal Information',
        terms_title: 'Terms & Conditions',
        terms_subtitle: 'Read our policies for a transparent experience without surprises.',
        terms_1_title: 'Reservation & Payments',
        terms_1_desc: 'To reserve your photo session, a deposit of 1000 MN (Cuban pesos) is required, which will be deducted from the total to be paid at the end. This deposit confirms your appointment and guarantees the availability of the studio on the requested date and time.',
        terms_2_title: 'Delivery Time',
        terms_2_desc: 'The maximum delivery time for your edited photographs is 60 calendar days from the session date. However, in most cases we deliver much earlier. If you need an express service, consult our fast delivery options with additional cost.',
        terms_3_title: 'Cancellation Policy',
        terms_3_desc: 'If you need to cancel or reschedule your session, you must notify us at least 4 days in advance to proceed with the full refund of your deposit. Cancellations with less than 4 days notice are non-refundable, although you can reschedule once at no additional cost.',
        terms_4_title: 'Copyright',
        terms_4_desc: 'All copyrights of the photographs taken belong to Demos Estudio. The client receives a personal use license of the edited images for social media, personal prints and non-commercial uses. For commercial or advertising use, an additional written agreement is required.',
        terms_5_title: 'Use of Images for Portfolio',
        terms_5_desc: 'Demos Estudio reserves the right to use the photographs taken in our portfolio, website, social media and promotional materials, unless the client expressly requests otherwise in writing before the session.',
        contact_tag: 'Contact Us',
        contact_title: 'Ready For Your Session?',
        contact_subtitle: 'Write to us and reserve your date. We are in the heart of Vedado.',
        contact_location_title: 'Location',
        contact_whatsapp_title: 'WhatsApp',
        contact_instagram_title: 'Instagram',
        contact_map_placeholder: '🗺️ Location Map (Google Maps)',
        contact_map_open: 'Open in Google Maps',
        booking_title: 'Book Your Session',
        booking_desire: 'What interests you?',
        booking_session: 'Photo session',
        booking_rental: 'Rent the studio',
        booking_type: 'Session Type',
        booking_studio: 'Studio',
        booking_outdoor: 'Outdoor',
        booking_photos: 'Number of Photos',
        booking_more: '+20',
        booking_time: 'Time',
        booking_equipment: 'Include Equipment',
        booking_none: 'No, none',
        booking_flashes: 'Only Flashes',
        booking_complete: 'Complete',
        booking_send: 'Send via WhatsApp',
        booking_note: 'The message will open in WhatsApp with the selected information.',
        whatsapp_text: 'Book now!'
    }
};

let currentLang = 'es';

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
    }
});

// Language Toggle
const langToggle = document.getElementById('langToggle');
langToggle?.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        const text = translations[currentLang][key];
        if (text) {
            if (text.includes('<')) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });
    document.documentElement.lang = currentLang;
}

// Scroll Animations (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// Nav Scroll Effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navLinks.classList.remove('open');
        }
    });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 50);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});

// Booking Form Logic
const bookingForm = document.getElementById('bookingForm');
const deseoRadios = bookingForm?.querySelectorAll('input[name="deseo"]');
const sesionBlock = document.getElementById('sesionBlock');
const cantidadBlock = document.getElementById('cantidadBlock');
const tiempoBlock = document.getElementById('tiempoBlock');
const equiposBlock = document.getElementById('equiposBlock');
const sendWs = document.getElementById('sendWs');
const waNumber = '5354479465';

function updateFormVisibility() {
    const deseo = bookingForm?.querySelector('input[name="deseo"]:checked')?.value;
    if (deseo === 'sesion') {
        sesionBlock?.classList.add('active');
        cantidadBlock?.classList.add('active');
        tiempoBlock?.classList.remove('active');
        equiposBlock?.classList.remove('active');
    } else {
        sesionBlock?.classList.remove('active');
        cantidadBlock?.classList.remove('active');
        tiempoBlock?.classList.add('active');
        equiposBlock?.classList.add('active');
    }
}

deseoRadios?.forEach(r => r.addEventListener('change', updateFormVisibility));
updateFormVisibility();

function buildMessage() {
    const deseo = bookingForm?.querySelector('input[name="deseo"]:checked')?.value || '';
    const tipo = bookingForm?.querySelector('input[name="tipo_sesion"]:checked')?.value || '';
    const cantidad = bookingForm?.querySelector('input[name="cantidad"]:checked')?.value || '';
    const tiempo = bookingForm?.querySelector('input[name="tiempo"]:checked')?.value || '';
    const equipos = bookingForm?.querySelector('input[name="equipos"]:checked')?.value || '';

    let msg = currentLang === 'es' ? 'Hola, me interesa ' : 'Hello, I am interested in ';
    if (deseo === 'sesion') {
        msg += currentLang === 'es' ? 'una sesión de fotos' : 'a photo session';
        if (tipo) msg += currentLang === 'es' ? ` en ${tipo}` : ` in ${tipo}`;
        if (cantidad) msg += currentLang === 'es' ? `, podrían ser unas ${cantidad} fotos` : `, could be about ${cantidad} photos`;
    } else {
        msg += currentLang === 'es' ? 'alquilar el estudio' : 'renting the studio';
        if (tiempo) msg += currentLang === 'es' ? `, tiempo estimado: ${tiempo}` : `, estimated time: ${tiempo}`;
        if (equipos) msg += currentLang === 'es' ? `. Incluir equipos: ${equipos}.` : `. Include equipment: ${equipos}.`;
    }
    return msg;
}

sendWs?.addEventListener('click', () => {
    const text = buildMessage();
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
});

// Particles Animation
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
}

// Mapa de ubicación (Leaflet + OpenStreetMap)
const mapEl = document.getElementById('map');
if (mapEl && typeof L !== 'undefined') {
    const lat = 23.139901, lng = -82.381151;
    const map = L.map('map').setView([lat, lng], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([lat, lng]).addTo(map)
        .bindPopup('Demos Estudio<br>Calle N / 23 y 25, Vedado, La Habana');
}

