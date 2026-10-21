// ---- Configuración editable ----
const WHATSAPP_NUMBER = "5219987372869"; // formato internacional sin '+' ni espacios
const WHATSAPP_MESSAGE = "Hola, vi su catálogo y me interesa cotizar un proyecto de carpintería.";

const CATEGORIES = [
  {
    id: "cocinas",
    label: "Cocinas Integrales",
    description: "Gabinetes, cubiertas e instalación completa de cocina.",
    count: 20,
  },
  {
    id: "closets",
    label: "Closets y Vestidores",
    description: "Organización a medida: entrepaños, cajones y barras de ropa.",
    count: 13,
  },
  {
    id: "muebles",
    label: "Muebles a Medida",
    description: "Tocadores, repisas y piezas especiales diseñadas para tu espacio.",
    count: 18,
  },
  {
    id: "puertas",
    label: "Puertas y Gabinetes",
    description: "Puertas corredizas, abatibles y gabinetes de carpintería fina.",
    count: 4,
  },
];

// ---- WhatsApp links ----
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
["navWa", "heroWa", "contactWa", "floatWa"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.href = waLink;
});

// ---- Build image list from categories ----
const ALL_IMAGES = [];
CATEGORIES.forEach((cat) => {
  for (let i = 1; i <= cat.count; i++) {
    const num = String(i).padStart(2, "0");
    ALL_IMAGES.push({
      src: `images/${cat.id}-${num}.jpg`,
      category: cat.id,
      alt: `${cat.label} — Taller KinTro, proyecto ${num}`,
    });
  }
});

// ---- Render category cards ----
const categoryGrid = document.getElementById("categoryGrid");
categoryGrid.innerHTML = CATEGORIES.map((cat) => {
  const cover = `images/${cat.id}-01.jpg`;
  return `
    <a class="category-card" href="#galeria" data-filter-link="${cat.id}">
      <div class="thumb"><img src="${cover}" alt="${cat.label}" loading="lazy"></div>
      <div class="info">
        <h3>${cat.label}</h3>
        <p class="count">${cat.description}</p>
      </div>
    </a>`;
}).join("");

// ---- Render filter bar ----
const filterBar = document.getElementById("filterBar");
function renderFilters(active) {
  const all = [{ id: "all", label: "Todos" }, ...CATEGORIES.map((c) => ({ id: c.id, label: c.label }))];
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
        `<div class="gallery-item" data-index="${idx}">
           <img src="${img.src}" alt="${img.alt}" loading="lazy">
         </div>`
    )
    .join("");
  renderFilters(filter);
}

renderGallery("all");

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
  lightboxImg.alt = img.alt;
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
  lightboxImg.alt = img.alt;
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
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});
