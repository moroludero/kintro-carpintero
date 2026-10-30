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
    testimoniosEyebrow: "Lo que dicen de nosotros",
    testimoniosTitle: "Testimonios",
    instagramEyebrow: "Síguenos",
    instagramTitle: "Instagram",
    instagramCta: "Ver en Instagram",
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
    ariaCategoryWa: "Agendar visita para cotizar",
    projectWord: "proyecto",
    scheduleTitle: "Agenda tu visita",
    scheduleSub: "Vamos a tu domicilio a tomar las medidas exactas del espacio para armar tu cotización — dinos qué necesitas, cuándo te queda bien y la dirección.",
    scheduleCategoryLabel: "¿Qué te interesa cotizar?",
    scheduleCategoryOther: "Otro / trabajo a la medida",
    scheduleDateLabel: "Fecha y hora preferida para la visita",
    scheduleLocationLabel: "Dirección para tomar medidas",
    scheduleLocationPlaceholder: "Ej. Calle 12 #45, Col. Centro, Cancún",
    scheduleNameLabel: "Tu nombre",
    scheduleNamePlaceholder: "Ej. María López",
    scheduleSendBtn: "Agendar por WhatsApp",
    scheduleGreeting: "Hola, me interesa cotizar:",
    scheduleDateLine: "Fecha y hora preferida para la visita",
    scheduleLocationLine: "Dirección para tomar medidas",
    scheduleNameLine: "Nombre",
    locationShareBtn: "Compartir mi ubicación de Google Maps",
    locationLoading: "Obteniendo tu ubicación…",
    locationAdded: "Ubicación agregada ✓",
    locationError: "No se pudo obtener tu ubicación. Puedes escribir la dirección arriba.",
    locationDenied: "Permiso de ubicación denegado. Puedes escribir la dirección arriba.",
    availabilityDayClosed: "Ramón no atiende visitas ese día. Elige otra fecha.",
    availabilityOutsideHours: (start, end) => `Ese horario está fuera de la disponibilidad de Ramón para ese día (${start} a ${end}).`,
    availabilityOnBreak: (start, end) => `Ramón no atiende en ese horario ese día (descanso de ${start} a ${end}). Elige otra hora.`,
    availabilityBlockedWindow: (start, end) => `Ramón ya tiene algo agendado ese día de ${start} a ${end}. Elige otra hora.`,
    availabilityPartiallyBlocked: (start, end) => `Ojo: Ramón ya tiene algo agendado ese día de ${start} a ${end} — elige una hora fuera de ese rango.`,
    locationLine: "Ubicación (Google Maps)",
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
    testimoniosEyebrow: "What our clients say",
    testimoniosTitle: "Testimonials",
    instagramEyebrow: "Follow us",
    instagramTitle: "Instagram",
    instagramCta: "View on Instagram",
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
    ariaCategoryWa: "Schedule a visit to quote",
    projectWord: "project",
    scheduleTitle: "Schedule your visit",
    scheduleSub: "We come to your place to take exact measurements of the space to put together your quote — tell us what you need, when works for you, and the address.",
    scheduleCategoryLabel: "What would you like a quote for?",
    scheduleCategoryOther: "Other / custom work",
    scheduleDateLabel: "Preferred date and time for the visit",
    scheduleLocationLabel: "Address to take measurements",
    scheduleLocationPlaceholder: "E.g. Street 12 #45, Col. Centro, Cancún",
    scheduleNameLabel: "Your name",
    scheduleNamePlaceholder: "E.g. Maria Lopez",
    scheduleSendBtn: "Schedule on WhatsApp",
    scheduleGreeting: "Hi, I'm interested in a quote for:",
    scheduleDateLine: "Preferred visit date and time",
    scheduleLocationLine: "Address to take measurements",
    scheduleNameLine: "Name",
    locationShareBtn: "Share my Google Maps location",
    locationLoading: "Getting your location…",
    locationAdded: "Location added ✓",
    locationError: "Couldn't get your location. You can type the address above.",
    locationDenied: "Location permission denied. You can type the address above.",
    availabilityDayClosed: "Ramón doesn't take visits that day. Pick another date.",
    availabilityOutsideHours: (start, end) => `That time is outside Ramón's availability for that day (${start} to ${end}).`,
    availabilityOnBreak: (start, end) => `Ramón isn't available at that time that day (break from ${start} to ${end}). Pick another time.`,
    availabilityBlockedWindow: (start, end) => `Ramón already has something booked that day from ${start} to ${end}. Pick another time.`,
    availabilityPartiallyBlocked: (start, end) => `Heads up: Ramón already has something booked that day from ${start} to ${end} — pick a time outside that range.`,
    locationLine: "Location (Google Maps)",
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

// Ramón configura sus días/horarios disponibles desde admin.html (su teléfono).
// Mientras carga o si la API no responde, se usa esta disponibilidad por
// defecto (igual a la que trae la API si nunca la ha configurado).
const API_BASE = "https://moroludero-catalogos-api.azurewebsites.net";
const DAY_KEYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let AVAILABILITY = {
  days: {
    mon: { enabled: true, start: "09:00", end: "18:00", breakStart: null, breakEnd: null },
    tue: { enabled: true, start: "09:00", end: "18:00", breakStart: null, breakEnd: null },
    wed: { enabled: true, start: "09:00", end: "18:00", breakStart: null, breakEnd: null },
    thu: { enabled: true, start: "09:00", end: "18:00", breakStart: null, breakEnd: null },
    fri: { enabled: true, start: "09:00", end: "18:00", breakStart: null, breakEnd: null },
    sat: { enabled: true, start: "09:00", end: "14:00", breakStart: null, breakEnd: null },
    sun: { enabled: false, start: "09:00", end: "14:00", breakStart: null, breakEnd: null },
  },
  // Cada entrada bloquea todo el día ({date}) o solo una ventana de ese día ({date, start, end}).
  blockedDates: [],
};

async function loadAvailability() {
  try {
    const res = await fetch(`${API_BASE}/api/kintro/availability`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data && data.days) {
      AVAILABILITY = data;
      localStorage.setItem("availabilityCache", JSON.stringify(data));
    }
  } catch (err) {
    console.warn("No se pudo cargar la disponibilidad de la API, usando caché/valor por defecto", err);
    try {
      const cached = JSON.parse(localStorage.getItem("availabilityCache") || "null");
      if (cached && cached.days) AVAILABILITY = cached;
    } catch (e) {
      // sin caché — se queda con la disponibilidad por defecto de arriba
    }
  }
}

function dayKeyFor(isoDate) {
  const [y, m, d] = isoDate.split("-").map(Number);
  return DAY_KEYS[new Date(y, m - 1, d).getDay()];
}

// Devuelve null si la fecha/hora es válida, o un mensaje de error si no.
function availabilityIssue(isoDate, time) {
  if (!isoDate) return null;

  const blockedEntries = (AVAILABILITY.blockedDates || []).filter((b) => b.date === isoDate);
  for (const b of blockedEntries) {
    const isWholeDay = b.start == null || b.end == null;
    if (isWholeDay) return t("availabilityDayClosed");
    if (time && time >= b.start && time <= b.end) return t("availabilityBlockedWindow")(b.start, b.end);
  }

  const dayConfig = AVAILABILITY.days[dayKeyFor(isoDate)];
  if (!dayConfig || !dayConfig.enabled) {
    return t("availabilityDayClosed");
  }
  if (time && (time < dayConfig.start || time > dayConfig.end)) {
    return t("availabilityOutsideHours")(dayConfig.start, dayConfig.end);
  }
  if (time && dayConfig.breakStart && dayConfig.breakEnd && time >= dayConfig.breakStart && time <= dayConfig.breakEnd) {
    return t("availabilityOnBreak")(dayConfig.breakStart, dayConfig.breakEnd);
  }
  return null;
}

// Nota informativa (no bloquea el envío) para cuando aún no se eligió hora
// pero esa fecha tiene una ventana bloqueada o un descanso diario.
function availabilityNote(isoDate, time) {
  if (!isoDate || time) return null;
  const partial = (AVAILABILITY.blockedDates || []).find((b) => b.date === isoDate && b.start != null && b.end != null);
  if (partial) return t("availabilityPartiallyBlocked")(partial.start, partial.end);
  const dayConfig = AVAILABILITY.days[dayKeyFor(isoDate)];
  if (dayConfig && dayConfig.enabled && dayConfig.breakStart && dayConfig.breakEnd) {
    return t("availabilityOnBreak")(dayConfig.breakStart, dayConfig.breakEnd);
  }
  return null;
}

function waLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("waMessage"))}`;
}

function updateWaLinks() {
  const link = waLink();
  ["navWa", "floatWa"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = link;
  });
}

// ---- La galería vive entera en el backend (todas las fotos originales se
// migraron ahí) para que Ramón pueda agregar o eliminar cualquier foto desde
// su panel, no solo las que agregue de ahora en adelante. Empieza vacía y se
// llena al conectar con la API, con respaldo en localStorage si no responde.
let ALL_IMAGES = [];

function imgAlt(img) {
  if (img.caption) return img.caption;
  return `${catLabel(img.category)} — Taller KinTro`;
}

function setGalleryFromApi(items) {
  ALL_IMAGES = items
    .filter((item) => item && item.id && CATEGORIES.some((c) => c.id === item.category))
    .map((item) => ({ src: item.photoUrl, category: item.category, caption: item.caption, apiId: item.id }));
}

async function loadApiGalleryImages() {
  try {
    const res = await fetch(`${API_BASE}/api/kintro/gallery`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) throw new Error("API devolvió una lista vacía");
    localStorage.setItem("galleryCache", JSON.stringify(data));
    setGalleryFromApi(data);
    renderGallery(currentFilter);
  } catch (err) {
    console.warn("No se pudieron cargar las fotos de la galería desde la API, usando caché local", err);
    try {
      const cached = JSON.parse(localStorage.getItem("galleryCache") || "[]");
      if (Array.isArray(cached) && cached.length) {
        setGalleryFromApi(cached);
        renderGallery(currentFilter);
      }
    } catch (e) {
      // sin caché disponible — la galería queda vacía hasta que la API responda
    }
  }
}

// ---- Render category cards ----
const categoryGrid = document.getElementById("categoryGrid");
function renderCategoryCards() {
  categoryGrid.innerHTML = CATEGORIES.map((cat) => {
    const cover = `images/${cat.id}-01.jpg`;
    return `
      <div class="category-card reveal">
        <a class="category-card-link" href="#galeria" data-filter-link="${cat.id}">
          <div class="thumb"><img src="${cover}" alt="${catLabel(cat.id)}" loading="lazy"></div>
          <div class="info">
            <h3>${catLabel(cat.id)}</h3>
            <p class="count">${catDesc(cat.id)}</p>
          </div>
        </a>
        <button type="button" class="category-wa" data-schedule-category="${cat.id}" aria-label="${t("ariaCategoryWa")}">
          <svg class="icon"><use href="#icon-whatsapp"/></svg>
        </button>
      </div>`;
  }).join("");
}

function updateCategoryTexts() {
  categoryGrid.querySelectorAll(".category-card").forEach((card, i) => {
    const cat = CATEGORIES[i];
    card.querySelector("img").alt = catLabel(cat.id);
    card.querySelector("h3").textContent = catLabel(cat.id);
    card.querySelector(".count").textContent = catDesc(cat.id);
    const waBtn = card.querySelector(".category-wa");
    waBtn.setAttribute("aria-label", t("ariaCategoryWa"));
  });
}

renderCategoryCards();

// ---- Schedule visit modal (date + address, replaces direct WhatsApp links
// for anything category/quote-related, since pricing doesn't apply here —
// Ramón needs a date and an address to go take measurements instead) ----
function scheduleCategoryOptionsHTML() {
  const options = CATEGORIES.map((c) => `<option value="${c.id}">${catLabel(c.id)}</option>`).join("");
  return options + `<option value="other">${t("scheduleCategoryOther")}</option>`;
}

function renderScheduleCategoryOptions() {
  document.getElementById("scheduleCategory").innerHTML = scheduleCategoryOptionsHTML();
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function openScheduleModal(categoryId) {
  const select = document.getElementById("scheduleCategory");
  select.value = categoryId || CATEGORIES[0].id;
  const modal = document.getElementById("scheduleModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("scheduleDate").focus();
}

function closeScheduleModal() {
  const modal = document.getElementById("scheduleModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function formatScheduleDateTime(isoDate, time) {
  const [y, m, d] = isoDate.split("-").map(Number);
  const opts = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  let dateObj;
  if (time) {
    const [hh, mm] = time.split(":").map(Number);
    dateObj = new Date(y, m - 1, d, hh, mm);
    opts.hour = "numeric";
    opts.minute = "2-digit";
  } else {
    dateObj = new Date(y, m - 1, d);
  }
  const locale = currentLang === "es" ? "es-MX" : "en-US";
  return new Intl.DateTimeFormat(locale, opts).format(dateObj);
}

function waScheduleMessage() {
  const categoryId = document.getElementById("scheduleCategory").value;
  const categoryLabel = categoryId === "other" ? t("scheduleCategoryOther") : catLabel(categoryId);
  const date = document.getElementById("scheduleDate").value;
  const time = document.getElementById("scheduleTime").value;
  const location = document.getElementById("scheduleLocation").value.trim();
  const name = document.getElementById("scheduleName").value.trim();
  let msg = `${t("scheduleGreeting")} ${categoryLabel}.`;
  if (date) msg += `\n${t("scheduleDateLine")}: ${formatScheduleDateTime(date, time)}`;
  if (location) msg += `\n${t("scheduleLocationLine")}: ${location}`;
  if (name) msg += `\n${t("scheduleNameLine")}: ${name}`;
  if (scheduleLocation) msg += `\n${t("locationLine")}: ${scheduleLocation.link}`;
  return msg;
}

// ---- Google Maps location share ----
let scheduleLocation = null; // { lat, lng, link }

function requestScheduleLocation() {
  const btn = document.getElementById("scheduleLocationBtn");
  const status = document.getElementById("scheduleLocationStatus");
  status.hidden = false;
  if (!navigator.geolocation) {
    status.className = "location-status error";
    status.textContent = t("locationError");
    return;
  }
  btn.disabled = true;
  status.className = "location-status";
  status.textContent = t("locationLoading");
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      scheduleLocation = { lat: latitude, lng: longitude, link: `https://www.google.com/maps?q=${latitude},${longitude}` };
      status.className = "location-status success";
      status.textContent = t("locationAdded");
      btn.disabled = false;
    },
    (err) => {
      scheduleLocation = null;
      status.className = "location-status error";
      status.textContent = err.code === err.PERMISSION_DENIED ? t("locationDenied") : t("locationError");
      btn.disabled = false;
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function resetScheduleLocation() {
  scheduleLocation = null;
  const status = document.getElementById("scheduleLocationStatus");
  status.hidden = true;
  status.textContent = "";
  status.className = "location-status";
}

function initScheduleModal() {
  renderScheduleCategoryOptions();
  const dateField = document.getElementById("scheduleDate");
  const timeField = document.getElementById("scheduleTime");
  dateField.min = todayISO();
  // Clicking anywhere on a native date/time field only opens the picker if
  // you hit the tiny calendar/clock icon exactly — showPicker() makes the
  // whole field open it, like a normal dropdown. Typing is blocked on
  // purpose: Monica wants these picked from the calendar/clock UI only, not
  // typed in free-form.
  [dateField, timeField].forEach((field) => {
    field.addEventListener("click", () => {
      if (field.showPicker) {
        try {
          field.showPicker();
        } catch (e) {
          // ignore — falls back to native click-the-icon behavior
        }
      }
    });
    field.addEventListener("keydown", (e) => {
      if (e.key === "Tab" || e.key === "Escape") return;
      e.preventDefault();
    });
    field.addEventListener("paste", (e) => e.preventDefault());
  });
  const refreshAvailabilityHint = () => {
    const msgEl = document.getElementById("scheduleAvailabilityMsg");
    if (!dateField.value) {
      msgEl.hidden = true;
      return;
    }
    const dayConfig = AVAILABILITY.days[dayKeyFor(dateField.value)];
    if (dayConfig && dayConfig.enabled) {
      timeField.min = dayConfig.start;
      timeField.max = dayConfig.end;
    }
    const issue = availabilityIssue(dateField.value, timeField.value);
    const note = issue ? null : availabilityNote(dateField.value, timeField.value);
    const text = issue || note;
    msgEl.hidden = !text;
    msgEl.className = issue ? "location-status error" : "location-status";
    msgEl.textContent = text || "";
  };
  dateField.addEventListener("change", refreshAvailabilityHint);
  timeField.addEventListener("change", refreshAvailabilityHint);
  document.getElementById("scheduleClose").addEventListener("click", closeScheduleModal);
  document.getElementById("scheduleBackdrop").addEventListener("click", closeScheduleModal);
  document.getElementById("scheduleLocationBtn").addEventListener("click", requestScheduleLocation);
  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("scheduleModal").classList.contains("open")) return;
    if (e.key === "Escape") closeScheduleModal();
  });
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-schedule-category]");
    if (!trigger) return;
    e.preventDefault();
    openScheduleModal(trigger.dataset.scheduleCategory);
  });
  document.getElementById("scheduleSend").addEventListener("click", () => {
    const dateInput = document.getElementById("scheduleDate");
    const timeInput = document.getElementById("scheduleTime");
    const locationInput = document.getElementById("scheduleLocation");
    if (!dateInput.reportValidity() || !locationInput.reportValidity()) return;
    const issue = availabilityIssue(dateInput.value, timeInput.value);
    if (issue) {
      const msgEl = document.getElementById("scheduleAvailabilityMsg");
      msgEl.hidden = false;
      msgEl.className = "location-status error";
      msgEl.textContent = issue;
      return;
    }
    const msg = waScheduleMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    dateInput.value = "";
    document.getElementById("scheduleTime").value = "";
    locationInput.value = "";
    document.getElementById("scheduleName").value = "";
    resetScheduleLocation();
    document.getElementById("scheduleAvailabilityMsg").hidden = true;
    closeScheduleModal();
  });
}

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
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
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

  const prevScheduleCategory = document.getElementById("scheduleCategory").value;
  renderScheduleCategoryOptions();
  document.getElementById("scheduleCategory").value = prevScheduleCategory || CATEGORIES[0].id;

  menuToggle.setAttribute("aria-label", t("ariaMenu"));
  document.getElementById("floatWa").setAttribute("aria-label", t("ariaFloatWa"));
  document.getElementById("lightboxClose").setAttribute("aria-label", t("ariaClose"));
  document.getElementById("lightboxPrev").setAttribute("aria-label", t("ariaPrev"));
  document.getElementById("lightboxNext").setAttribute("aria-label", t("ariaNext"));
  document.getElementById("scheduleClose").setAttribute("aria-label", t("ariaClose"));

  if (scheduleLocation) {
    const status = document.getElementById("scheduleLocationStatus");
    status.className = "location-status success";
    status.textContent = t("locationAdded");
  }

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

initScheduleModal();
initLangSwitch();
setLanguage(currentLang);
loadAvailability();
loadApiGalleryImages();
