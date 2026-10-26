// ---- Idioma ----
const LANGS = ["es", "en"];
const savedLang = localStorage.getItem("lang-kintro");
let currentLang = LANGS.includes(savedLang) ? savedLang : "es";

const I18N = {
  es: {
    navTrabajos: "Trabajos",
    navGaleria: "Galería",
    navNosotros: "Nosotros",
    navContacto: "Contacto",
    eyebrowHero: "Carpintería a medida · Cancún",
    heroTitle: "Muebles hechos a tu medida, con acabados que duran",
    heroText: "Cocinas integrales, closets, puertas y muebles sobre diseño. Confección de muebles con atención personal de principio a fin — del levantamiento de medidas a la instalación.",
    heroWa: "Cotizar por WhatsApp",
    heroSecondary: "Ver trabajos realizados",
    heroBadge: "Instalación incluida en cada proyecto",
    stat1Label: "Fotos de proyectos reales",
    stat2Label: "Líneas de trabajo",
    stat3Label: "Diseño a medida",
    trabajosEyebrow: "Lo que hacemos",
    trabajosTitle: "Líneas de trabajo",
    trabajosText: "Cada proyecto se diseña y fabrica a la medida exacta del espacio. Estas son las categorías de trabajo más solicitadas.",
    customNoteStrong: "¿No encuentras lo que buscas?",
    customNoteText: "Estas son las líneas más pedidas, pero en Taller KinTro hacemos carpintería a la medida de lo que necesites — si tu proyecto no encaja en ninguna categoría, cuéntanoslo y lo cotizamos igual.",
    customWa: "Preguntar por WhatsApp",
    galeriaEyebrow: "Portafolio",
    galeriaTitle: "Galería de proyectos",
    galeriaText: "Fotos reales de trabajos entregados. Toca cualquier imagen para verla en grande.",
    filterAll: "Todos",
    nosotrosEyebrow: "Sobre Taller KinTro",
    nosotrosTitle: "Confección de muebles, hecha por un carpintero local",
    nosotrosText: "Taller KinTro, a cargo de Ramón M. Quintero, se dedica a la confección de muebles y carpintería residencial en Cancún: cocinas integrales, closets, puertas y piezas especiales sobre diseño.",
    aboutLi1: "Levantamiento de medidas en sitio",
    aboutLi2: "Diseño a la medida del espacio y del presupuesto",
    aboutLi3: "Materiales y herrajes de calidad",
    aboutLi4: "Instalación incluida",
    contactTitle: "¿Tienes un proyecto en mente?",
    contactText: "Cuéntanos qué necesitas por WhatsApp — cocina, closet, puertas o un mueble especial — y te enviamos una cotización.",
    contactWa: "Escribir por WhatsApp",
    footerText: "Taller KinTro — Confección de muebles · Cancún, México",
    ariaMenu: "Abrir menú",
    ariaFacebook: "Facebook de Taller KinTro",
    ariaInstagram: "Instagram de Taller KinTro",
    ariaFloatWa: "Escribir por WhatsApp",
    ariaClose: "Cerrar",
    ariaPrev: "Anterior",
    ariaNext: "Siguiente",
    pageTitle: "Taller KinTro — Muebles y carpintería a medida en Cancún",
    metaDesc: "Taller KinTro: cocinas integrales, closets, puertas y muebles a medida. Carpintería residencial en Cancún. Cotiza por WhatsApp.",
    waMessage: "Hola, vi su catálogo y me interesa cotizar un proyecto de carpintería.",
    projectWord: "proyecto",
  },
  en: {
    navTrabajos: "Our Work",
    navGaleria: "Gallery",
    navNosotros: "About",
    navContacto: "Contact",
    eyebrowHero: "Custom carpentry · Cancún",
    heroTitle: "Furniture built to your measurements, with finishes that last",
    heroText: "Kitchens, closets, doors, and custom furniture built to order. Personal attention from start to finish — from on-site measurements to installation.",
    heroWa: "Get a quote on WhatsApp",
    heroSecondary: "See our work",
    heroBadge: "Installation included in every project",
    stat1Label: "Photos of real projects",
    stat2Label: "Lines of work",
    stat3Label: "Custom design",
    trabajosEyebrow: "What we do",
    trabajosTitle: "Lines of work",
    trabajosText: "Every project is designed and built to the exact measurements of your space. These are our most requested categories.",
    customNoteStrong: "Don't see what you're looking for?",
    customNoteText: "These are our most requested categories, but at Taller KinTro we build custom carpentry for whatever you need — if your project doesn't fit any category, tell us and we'll quote it anyway.",
    customWa: "Ask on WhatsApp",
    galeriaEyebrow: "Portfolio",
    galeriaTitle: "Project gallery",
    galeriaText: "Real photos of completed work. Tap any image to view it larger.",
    filterAll: "All",
    nosotrosEyebrow: "About Taller KinTro",
    nosotrosTitle: "Custom furniture, built by a local carpenter",
    nosotrosText: "Taller KinTro, run by Ramón M. Quintero, specializes in custom furniture and residential carpentry in Cancún: kitchens, closets, doors, and special pieces built to order.",
    aboutLi1: "On-site measurements",
    aboutLi2: "Design tailored to your space and budget",
    aboutLi3: "Quality materials and hardware",
    aboutLi4: "Installation included",
    contactTitle: "Have a project in mind?",
    contactText: "Tell us what you need on WhatsApp — kitchen, closet, doors, or a special piece — and we'll send you a quote.",
    contactWa: "Message us on WhatsApp",
    footerText: "Taller KinTro — Custom furniture · Cancún, Mexico",
    ariaMenu: "Open menu",
    ariaFacebook: "Taller KinTro on Facebook",
    ariaInstagram: "Taller KinTro on Instagram",
    ariaFloatWa: "Message us on WhatsApp",
    ariaClose: "Close",
    ariaPrev: "Previous",
    ariaNext: "Next",
    pageTitle: "Taller KinTro — Custom furniture and carpentry in Cancún",
    metaDesc: "Taller KinTro: custom kitchens, closets, doors, and furniture. Residential carpentry in Cancún. Get a quote on WhatsApp.",
    waMessage: "Hi, I saw your catalog and I'm interested in a quote for a carpentry project.",
    projectWord: "project",
  },
};

function t(key) {
  return I18N[currentLang][key];
}

const CATEGORIES = [
  { id: "cocinas", count: 20 },
  { id: "closets", count: 13 },
  { id: "muebles", count: 18 },
  { id: "puertas", count: 4 },
];

const CATEGORY_I18N = {
  cocinas: {
    es: { label: "Cocinas Integrales", desc: "Gabinetes, cubiertas e instalación completa de cocina." },
    en: { label: "Kitchen Cabinetry", desc: "Cabinets, countertops, and full kitchen installation." },
  },
  closets: {
    es: { label: "Closets y Vestidores", desc: "Organización a medida: entrepaños, cajones y barras de ropa." },
    en: { label: "Closets & Wardrobes", desc: "Custom organization: shelving, drawers, and clothing rods." },
  },
  muebles: {
    es: { label: "Muebles a Medida", desc: "Tocadores, repisas y piezas especiales diseñadas para tu espacio." },
    en: { label: "Custom Furniture", desc: "Dressers, shelves, and special pieces designed for your space." },
  },
  puertas: {
    es: { label: "Puertas y Gabinetes", desc: "Puertas corredizas, abatibles y gabinetes de carpintería fina." },
    en: { label: "Doors & Cabinets", desc: "Sliding doors, hinged doors, and fine cabinetry." },
  },
};

function catLabel(id) { return CATEGORY_I18N[id][currentLang].label; }
function catDesc(id) { return CATEGORY_I18N[id][currentLang].desc; }

// ---- WhatsApp ----
const WHATSAPP_NUMBER = "5219987372869"; // formato internacional sin '+' ni espacios

function waLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("waMessage"))}`;
}

function updateWaLinks() {
  const link = waLink();
  ["navWa", "heroWa", "contactWa", "floatWa", "customWa"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = link;
  });
}

// ---- Build image list from categories ----
const ALL_IMAGES = [];
CATEGORIES.forEach((cat) => {
  for (let i = 1; i <= cat.count; i++) {
    const num = String(i).padStart(2, "0");
    ALL_IMAGES.push({ src: `images/${cat.id}-${num}.jpg`, category: cat.id, num });
  }
});

function imgAlt(img) {
  return `${catLabel(img.category)} — Taller KinTro, ${t("projectWord")} ${img.num}`;
}

// ---- Render category cards ----
const categoryGrid = document.getElementById("categoryGrid");
function renderCategoryCards() {
  categoryGrid.innerHTML = CATEGORIES.map((cat) => {
    const cover = `images/${cat.id}-01.jpg`;
    return `
      <a class="category-card reveal" href="#galeria" data-filter-link="${cat.id}">
        <div class="thumb"><img src="${cover}" alt="${catLabel(cat.id)}" loading="lazy"></div>
        <div class="info">
          <h3>${catLabel(cat.id)}</h3>
          <p class="count">${catDesc(cat.id)}</p>
        </div>
      </a>`;
  }).join("");
}

function updateCategoryTexts() {
  categoryGrid.querySelectorAll(".category-card").forEach((card, i) => {
    const cat = CATEGORIES[i];
    card.querySelector("img").alt = catLabel(cat.id);
    card.querySelector("h3").textContent = catLabel(cat.id);
    card.querySelector(".count").textContent = catDesc(cat.id);
  });
}

renderCategoryCards();

// ---- Render filter bar ----
const filterBar = document.getElementById("filterBar");
function renderFilters(active) {
  const all = [{ id: "all", label: t("filterAll") }, ...CATEGORIES.map((c) => ({ id: c.id, label: catLabel(c.id) }))];
  filterBar.innerHTML = all
    .map(
      (c) =>
        `<button class="filter-btn${c.id === active ? " active" : ""}" data-filter="${c.id}">${c.label}</button>`
    )
    .join("");
}

// ---- Render gallery ----
const galleryGrid = document.getElementById("galleryGrid");
let currentFilter = "all";
let visibleImages = [];

function renderGallery(filter) {
  currentFilter = filter;
  visibleImages = filter === "all" ? ALL_IMAGES : ALL_IMAGES.filter((img) => img.category === filter);
  galleryGrid.innerHTML = visibleImages
    .map(
      (img, idx) =>
        `<div class="gallery-item" data-index="${idx}" style="--i:${idx % 12}">
           <img src="${img.src}" alt="${imgAlt(img)}" loading="lazy">
         </div>`
    )
    .join("");
  renderFilters(filter);
}

// ---- Filter click handling (event delegation) ----
filterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  renderGallery(btn.dataset.filter);
});

categoryGrid.addEventListener("click", (e) => {
  const link = e.target.closest("[data-filter-link]");
  if (!link) return;
  renderGallery(link.dataset.filterLink);
});

// ---- Lightbox ----
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
let lightboxIndex = 0;

function openLightbox(index) {
  lightboxIndex = index;
  const img = visibleImages[lightboxIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = imgAlt(img);
  lightbox.classList.add("open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightboxImg.src = "";
}

function showRelative(delta) {
  lightboxIndex = (lightboxIndex + delta + visibleImages.length) % visibleImages.length;
  const img = visibleImages[lightboxIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = imgAlt(img);
}

galleryGrid.addEventListener("click", (e) => {
  const item = e.target.closest(".gallery-item");
  if (!item) return;
  openLightbox(Number(item.dataset.index));
});

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", () => showRelative(-1));
document.getElementById("lightboxNext").addEventListener("click", () => showRelative(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showRelative(-1);
  if (e.key === "ArrowRight") showRelative(1);
});

// ---- Mobile menu ----
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open");
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
  }
});

// ---- Header blur/shadow once scrolled ----
const header = document.querySelector("header");
window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 8),
  { passive: true }
);

// ---- Scroll-reveal ----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ---- Language switching ----
function applyStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
}

function setLanguage(lang) {
  if (!LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem("lang-kintro", lang);
  document.documentElement.lang = lang;
  document.title = t("pageTitle");
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("metaDesc"));

  applyStaticText();
  updateCategoryTexts();
  renderGallery(currentFilter);
  updateWaLinks();

  menuToggle.setAttribute("aria-label", t("ariaMenu"));
  document.getElementById("floatWa").setAttribute("aria-label", t("ariaFloatWa"));
  document.getElementById("lightboxClose").setAttribute("aria-label", t("ariaClose"));
  document.getElementById("lightboxPrev").setAttribute("aria-label", t("ariaPrev"));
  document.getElementById("lightboxNext").setAttribute("aria-label", t("ariaNext"));

  const fbLink = document.querySelector('.social-row a[href*="facebook.com"]');
  const igLink = document.querySelector('.social-row a[href*="instagram.com"]');
  if (fbLink) fbLink.setAttribute("aria-label", t("ariaFacebook"));
  if (igLink) igLink.setAttribute("aria-label", t("ariaInstagram"));

  document.querySelectorAll("#langSwitch button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

function initLangSwitch() {
  document.querySelectorAll("#langSwitch button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
}

initLangSwitch();
setLanguage(currentLang);
