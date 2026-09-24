/* ==========================================================================
   Loki — Archivo de Variantes
   App de una sola página: enrutamiento por hash + render de vistas
   ========================================================================== */

/* ---------- Datos ---------- */

const seasons = [
  { id: "temporada-1", num: "01", label: "2021 // 6 episodios", title: "Temporada 1", desc: "Loki es llevado ante la AVT tras robar el Teseracto y debe cazar a una variante peligrosa de sí mismo.", tone: "lime" },
  { id: "temporada-2", num: "02", label: "2023 // 6 episodios", title: "Temporada 2", desc: "Loki y sus aliados navegan el multiverso para encontrar a Sylvie, Ravonna y Miss Minutos.", tone: "amber" },
];

const characters = [
  { name: "Loki Laufeyson", role: "Dios de las Mentiras, Variante", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrH_0-fn14Lvq6Xu7-BHiphC7txwHi-XZHcSr17q_K0w&s=10" },
  { name: "Sylvie", role: "Diosa de las Mentiras, Variante", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuhygIyi890djQcRpkbuoKFh9IZZX1Fx2yxJVa39MdA&s=10" },
  { name: "Mobius M. Mobius", role: "Analista de la AVT", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwRlqO8m3xd8G3gnb5vDXyI9J503mt-iNYBRVr60mlA&s=10" },
  { name: "Ravonna Renslayer", role: "Jueza de la AVT", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wfL95ywEW02sMOH3NlCNHOWqyxwrYmJfWBXLp76mvA&s=10" },
  { name: "B-15", role: "Cazadora de la AVT", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRXMfwIkd_owinT_7zbYtDp2f_LUNnA8nYTWCF1nnAw&s=10" },
  { name: "Casey", role: "Analista de la AVT", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-JGMu9PVAptPPoxi2dNSsFdOft1C65QvJLpIgo0jkg&s=10" },
  { name: "Ouroboros", role: "Técnico de la AVT, autor del manual de la AVT", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34H4kZWDWebWFsMmo14rB-d-NhRbzuKTpcQCMClRAqQ&s=10" },
  { name: "Miss Minutes", role: "Inteligencia Artificial de la AVT", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe22PA1w2gRISPCCfCB2j5JG1KNqTVa-gcJrGu1wd2Iw&s" },
  { name: "Loki Laufeyson clásico", role: "Variante podada", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWcMmnizmOamKj9RWUFfDj85KNRWD9zAOGnKGeSCc6A&s=10" },
  { name: "Loki Laufeyson niño", role: "Variante podada", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK7nowvyzYwNfAhVrqKkb1AtoWH86JSBZAWn0LcAecQ&s=10" },
  { name: "Loki Laufeyson \"Fanfarrón\"", role: "Variante podada", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxRpZMOwE1o3uCYQvWMFI-dV_iwi5-fNMGbKWw9iTRg&s=10" },
  { name: "Loki Caimán", role: "Variante podada", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwnBP8c09siStMQErTjegkhUwZ2OqRmFaFf5h0OXylyw&s" },
  { name: "X-5 / \"Brad Wolfe\"", role: "Cazador de la AVT", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMmi3MRLHQOjJdV1Mas8rDr5a_75_ELwl9tT78W3sKA&s=10" },
  { name: "Victor Timely", role: "Inventor del siglo XVIII, Variante", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaUYVFNLEXP9bYFTIhE0E8ZhrASRhZCcrvbDRViny0w&s=10" },
  { name: "Aquel Que Permanece", role: "Creador de la AVT, Conquistador", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yosg1GrPyETIQUTArI07ykn1PWCJOA5jIXfnfQNvPw&s" },
];

const seasonContent = {
  "temporada-1": {
    title: "TEMPORADA 1",
    label: "01 / Expediente temporal",
    poster: "img/seasons/season-1-poster.jpeg",
    posterAlt: "Póster de la primera temporada de Loki",
    description: [
      "La primera temporada, basada en el personaje del mismo nombre de Marvel Comics, se muestra a Loki llevado a la misteriosa Autoridad de Variación Temporal (AVT).",
      "Después de robar el Teseracto durante los eventos de Avengers: Endgame (2019), Loki se ve obligado a ayudar a atrapar una variante peligrosa de sí mismo. La serie ambientada en el Universo cinematográfico de Marvel (UCM), compartiendo continuidad con la las películas y la series de televisión de la franquicia. La temporada fue producida por Marvel Studios, con Michael Waldron como escritor principal y Kate Herron como directora.",
      "La serie, junto con esta temporada se estrenaron en Disney+ el 9 de junio de 2021, con seis episodios hasta el 14 de julio, como parte de la Fase Cuatro del UCM. Ha recibido críticas positivas, con elogios por las actuaciones del elenco, la partitura musical y las imágenes. Se anunció una segunda temporada en julio de 2021.",
    ],
    trailer: "https://www.youtube.com/watch?v=KcBStos46EM&pp=ygUYbG9raSB0ZW1wb3JhZGEgMSB0cmFpbGVy",
    next: "temporada-2",
    previous: null,
    episodes: [
      { number: "01", title: "Un glorioso propósito", image: "img/seasons/s1-episode-1.jpg", alt: "Loki ante la Autoridad de Variación Temporal" },
      { number: "02", title: "La variante", image: "img/seasons/s1-episode-2.jpg", alt: "Loki y la variante en una ciudad" },
      { number: "03", title: "Lamentis", image: "img/seasons/s1-episode-3.jpg", alt: "Loki y Sylvie en Lamentis" },
      { number: "04", title: "El evento nexus", image: "img/seasons/s1-episode-4.jpg", alt: "El evento nexus de la primera temporada" },
      { number: "05", title: "Un viaje hacia el misterio", image: "img/seasons/s1-episode-5.jpg", alt: "Loki en el vacío" },
      { number: "06", title: "Eternamente. Siempre.", image: "img/seasons/s1-episode-6.jpg", alt: "El final de la primera temporada" },
    ],
  },
  "temporada-2": {
    title: "TEMPORADA 2",
    label: "02 / Expediente temporal",
    poster: "img/seasons/season-2-poster.webp",
    posterAlt: "Póster de la segunda temporada de Loki",
    description: [
      "La segunda temporada, basada en Marvel Comics con el personaje del mismo nombre, se ve a Loki trabajando con Mobius M. Mobius, la cazadora B-15 y otros miembros de la Autoridad de Variación Temporal para navegar por el multiverso y encontrar a Sylvie, Ravonna Renslayer y Miss Minutes. Está ambientada en el Universo cinematográfico de Marvel (UCM), compartiendo continuidad con las películas y las series de televisión de la franquicia. La temporada es producida por Marvel Studios, con Eric Martin como escritor principal, con Justin Benson y Aaron Moorhead al frente del equipo de dirección.",
      "Esta temporada debutó en Disney+ el 5 de octubre de 2023, y consistió de seis episodios que se emitieron hasta el 9 de noviembre, como parte de la Fase Cinco del UCM. La temporada recibió críticas positivas de la crítica, con elogios por su conclusión, la partitura musical y el arco del personaje de Loki.",
    ],
    trailer: "https://www.youtube.com/watch?v=DkskOhoQpuo&pp=ygUYbG9raSB0ZW1wb3JhZGEgMiB0cmFpbGVy",
    next: null,
    previous: "temporada-1",
    episodes: [
      { number: "01", title: "Ouroboros", image: "img/seasons/s2-episode-1.jpg", alt: "Ouroboros en la segunda temporada" },
      { number: "02", title: "Breaking Brad", image: "img/seasons/s2-episode-2.jpg", alt: "Breaking Brad en la segunda temporada" },
      { number: "03", title: "1893", image: "img/seasons/s2-episode-3.jpg", alt: "Loki en 1893" },
      { number: "04", title: "El corazón de la AVT", image: "img/seasons/s2-episode-4.jpg", alt: "El corazón de la AVT" },
      { number: "05", title: "Ciencia/Ficción", image: "img/seasons/s2-episode-5.jpg", alt: "Ciencia y ficción en la segunda temporada" },
      { number: "06", title: "Un glorioso propósito", image: "img/seasons/s2-episode-6.jpg", alt: "El final de la segunda temporada" },
    ],
  },
};

/* ---------- Iconos (SVG en línea, estilo lucide) ---------- */

const icons = {
  arrowDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>`,
  arrowUpRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M7 17 17 7M7 7h10v10"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="m6 9 6 6 6-6"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="m15 18-6-6 6-6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="m9 18 6-6-6-6"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8 5v14l11-7z"/></svg>`,
};

/* ---------- Utilidades ---------- */

const root = document.getElementById("view-root");
let episodeIndex = { "temporada-1": 0, "temporada-2": 0 };

function showNotice(message) {
  const notice = document.getElementById("notice");
  notice.textContent = message;
  notice.classList.add("is-visible");
  clearTimeout(showNotice._t);
  showNotice._t = setTimeout(() => notice.classList.remove("is-visible"), 2600);
}

/* ---------- Vistas ---------- */

function homeView() {
  return `
    <section class="hero-section">
      <div class="hero-copy">
        <p class="eyebrow">${icons.pin} AVT // ARCHIVO ACTIVO</p>
        <h1>ETERNAMENTE <em>SIEMPRE</em></h1>
        <p class="hero-intro">El villano Loki retoma su papel de Dios de las mentiras en una nueva serie que tiene lugar después de los eventos de Avengers: Endgame.</p>
        <p class="hero-intro">Se presenta ante Loki la Autoridad de Variación Temporal (AVT), una organización responsable por el flujo del tiempo a través del cosmos, y cuya función principal es mantener a salvo la Sagrada Línea del Tiempo.</p>
        <p class="hero-intro">La AVT fue creada hace eones por los Guardianes del Tiempo, y a su vez estos crearon a todos sus trabajadores, al menos eso es lo que creen todos ellos. Loki jugará un papel importante en la AVT y encontrará un nuevo significado para su glorioso propósito.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#temporadas/temporada-1">ABRIR EXPEDIENTE ${icons.arrowUpRight}</a>
          <a class="button button-quiet" href="#personajes">PERSONAJES DE INTERÉS</a>
        </div>
        <div class="hero-meta">
          <span><b>02</b>Temporadas</span>
          <span><b>∞</b>Líneas temporales</span>
          <span><b>1</b>Propósito glorioso</span>
        </div>
      </div>
      <div class="hero-image-wrap">
        <div class="hero-image-frame">
          <img src="img/loki-hero-user.webp" alt="Loki en la Autoridad de Variación Temporal">
          <span class="hero-image-label">EXPEDIENTE // L-1130</span>
        </div>
        <span class="hero-side-note">ETERNAMENTE SIEMPRE</span>
      </div>
    </section>
    <div class="ticker"><p class="ticker-message">GLORIOSO PROPÓSITO // AUTORIDAD DE VARIACIÓN TEMPORAL // ETERNAMENTE SIEMPRE // SITIO DE FANS NO OFICIAL</p></div>
  `;
}

function seasonsSection(compact) {
  return `
    <section class="content-section season-section${compact ? " compact" : ""}">
      <div class="section-heading">
        <h2>TEMPORADAS</h2>
        <p class="section-note">Dos temporadas, un lazo temporal glorioso. Elegí una para ver su expediente completo.</p>
      </div>
      <div class="season-grid">
        ${seasons.map((s) => `
          <a class="season-card season-${s.tone}" href="#temporadas/${s.id}">
            <div class="card-topline"><span>${s.label}</span><span>ARCHIVO ${s.num}</span></div>
            <p class="season-number">${s.num}</p>
            <div class="season-card-bottom">
              <div><h3>${s.title}</h3><p>${s.desc}</p></div>
              <span class="round-arrow">${icons.arrowUpRight}</span>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function charactersSection() {
  return `
    <section class="content-section character-section">
      <div class="section-heading">
        <h2>ARCHIVO DE PERSONAJES</h2>
      </div>
      <div class="character-grid">
        ${characters.map((c, i) => `
          <button class="character-card" type="button" data-character="${c.name}">
            <span class="character-card-index">EXPEDIENTE ${String(i + 1).padStart(2, "0")}</span>
            <div class="character-card-image">
              <img src="${c.image}" alt="${c.name}" loading="lazy">
            </div>
            <div class="character-card-info">
              <p class="character-card-name">${c.name}</p>
              <p class="character-card-role">${c.role}</p>
            </div>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function personajesView() {
  return `
    ${pageIntro("PERSONAJES", "Variantes, cazadores, jueces y demás registrados en el archivo de la AVT.")}
    <div class="page-section">${charactersSection()}</div>
  `;
}

function galeriaView() {
  const stills = [
    ...seasonContent["temporada-1"].episodes.map((e) => ({ ...e, season: "T1" })),
    ...seasonContent["temporada-2"].episodes.map((e) => ({ ...e, season: "T2" })),
  ];
  return `
    ${pageIntro("GALERÍA", "Registro visual oficial recuperado de los archivos de la AVT.")}
    <section class="content-section gallery-section">
      <div class="gallery-header">
        <h2>ARCHIVO<br>VISUAL</h2>
        <p class="section-note">${stills.length} fotogramas recuperados de ambas temporadas.</p>
      </div>
      <div class="gallery-grid-full">
        ${stills.map((s) => `
          <div class="gallery-tile-square">
            <img src="${s.image}" alt="${s.alt}" loading="lazy">
            <span class="gallery-tile-label">${s.season} // EP ${s.number}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function contactoView() {
  return `
    ${pageIntro("CONTACTO", "Envía tu reporte a la Autoridad de Variación Temporal, o seguí el rastro en redes.")}
    <section class="content-section contact-section">
      <div class="contact-panel">
        <form class="contact-form" id="contact-form" novalidate>
          <h2>ESCRIBA SU<br>REPORTE</h2>
          <p>¿Encontraste una variante fuera de lugar? Completá el formulario y lo archivamos.</p>
          <label class="form-field">
            <span>Nombre</span>
            <input type="text" name="nombre" placeholder="Tu nombre" required>
          </label>
          <label class="form-field">
            <span>Correo electrónico</span>
            <input type="email" name="email" placeholder="tu@correo.com" required>
          </label>
          <label class="form-field">
            <span>Mensaje</span>
            <textarea name="mensaje" rows="5" placeholder="Describí tu reporte..." required></textarea>
          </label>
          <button class="button button-primary" type="submit">Enviar reporte ${icons.arrowUpRight}</button>
        </form>
        <div class="contact-side">
          <p class="eyebrow">${icons.pin} OTROS CANALES</p>
          <div class="contact-links">
            <button type="button" data-social="Instagram">Instagram ${icons.arrowUpRight}</button>
            <button type="button" data-social="X">X / Twitter ${icons.arrowUpRight}</button>
            <button type="button" data-social="YouTube">YouTube ${icons.arrowUpRight}</button>
          </div>
          <a class="text-link" href="mailto:contacto@archivoloki.fan">O escribí directo por correo ${icons.arrowUpRight}</a>
        </div>
      </div>
    </section>
  `;
}

function pageIntro(title, note) {
  return `
    <section class="page-intro">
      <h1>${title}</h1>
      <div class="page-intro-rule"></div>
      <p class="section-note">${note}</p>
    </section>
  `;
}

function seasonPageView(id) {
  const content = seasonContent[id];
  if (!content) return homeView();
  const index = episodeIndex[id] || 0;
  const episode = content.episodes[index];
  const isFirst = index === 0;
  const isLast = index === content.episodes.length - 1;

  return `
    <div class="season-page">
      <section class="season-overview">
        <div class="season-poster-column">
          <h1 class="season-page-title">${content.title}</h1>
          <div class="season-poster-frame">
            <img src="${content.poster}" alt="${content.posterAlt}">
            <span class="season-poster-stamp">AVT // ARCHIVO ${id === "temporada-1" ? "01" : "02"}</span>
          </div>
        </div>
        <div class="season-description">
          <p class="eyebrow">${content.label}</p>
          ${content.description.map((p) => `<p>${p}</p>`).join("")}
          <a class="button button-primary" href="${content.trailer}" target="_blank" rel="noopener">${icons.play} VER TRAILER</a>
        </div>
      </section>

      <section class="episodes-section">
        <div class="episodes-heading">
          <div>
            <p class="eyebrow">Registro de episodios // 06 archivos</p>
            <h2><span class="episode-title-white">ETERNAMENTE.</span><br><span class="episode-title-gold">SIEMPRE.</span></h2>
          </div>
          <p class="episodes-count">${episode.number} / 06</p>
        </div>
        <div class="episode-viewer">
          <button class="episode-arrow" type="button" data-episode-nav="-1" ${isFirst ? "disabled" : ""} aria-label="Episodio anterior">${icons.chevronLeft}</button>
          <article class="episode-card">
            <div class="episode-image-wrap">
              <img src="${episode.image}" alt="${episode.alt}">
              <span class="episode-image-label">EPISODIO ${episode.number}</span>
            </div>
            <div class="episode-details">
              <p class="episode-kicker">EXPEDIENTE ${episode.number} // AVT</p>
              <h3>${episode.title}</h3>
              <p>REGISTRO VISUAL OFICIAL RECUPERADO</p>
            </div>
          </article>
          <button class="episode-arrow" type="button" data-episode-nav="1" ${isLast ? "disabled" : ""} aria-label="Siguiente episodio">${icons.chevronRight}</button>
        </div>
        <div class="episode-dots" aria-label="Seleccionar episodio">
          ${content.episodes.map((ep, i) => `<button type="button" class="${i === index ? "is-active" : ""}" data-episode-goto="${i}" aria-label="Ir al episodio ${ep.number}"></button>`).join("")}
        </div>
      </section>

      <div class="season-navigation">
        ${content.previous ? `<a class="season-switch-button season-switch-previous" href="#temporadas/${content.previous}">${icons.arrowLeft} TEMPORADA ANTERIOR</a>` : `<span></span>`}
        ${content.next ? `<a class="season-switch-button season-switch-next" href="#temporadas/${content.next}">SIGUIENTE TEMPORADA ${icons.arrowRight}</a>` : `<span></span>`}
      </div>
    </div>
  `;
}

/* ---------- Enrutador ---------- */

const routes = {
  "": homeView,
  "personajes": personajesView,
  "galeria": galeriaView,
  "contacto": contactoView,
};

function render() {
  const hash = window.location.hash.replace(/^#\/?/, "");

  if (hash.startsWith("temporadas/")) {
    const seasonId = hash.split("/")[1];
    root.innerHTML = seasonPageView(seasonId);
  } else if (routes[hash]) {
    root.innerHTML = routes[hash]();
  } else {
    root.innerHTML = homeView();
  }

  updateActiveNav(hash);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  attachViewHandlers();
  closeMobileMenu();
}

function updateActiveNav(hash) {
  document.querySelectorAll(".main-nav a[data-route]").forEach((a) => {
    a.classList.toggle("is-active", a.dataset.route === hash || (a.dataset.route === "temporadas" && hash.startsWith("temporadas")));
  });
}

/* ---------- Handlers que dependen de la vista actual ---------- */

function attachViewHandlers() {
  root.querySelectorAll("[data-character]").forEach((btn) => {
    btn.addEventListener("click", () => showNotice(`${btn.dataset.character}`));
  });
  root.querySelectorAll("[data-social]").forEach((btn) => {
    btn.addEventListener("click", () => showNotice(`Próximamente vas a poder seguirnos en ${btn.dataset.social}.`));
  });

  const contactForm = root.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showNotice("Reporte archivado. La AVT se pondrá en contacto pronto.");
      contactForm.reset();
    });
  }

  root.querySelectorAll("[data-episode-nav]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const hash = window.location.hash.replace(/^#\/?/, "");
      const seasonId = hash.split("/")[1];
      const content = seasonContent[seasonId];
      const dir = Number(btn.dataset.episodeNav);
      const current = episodeIndex[seasonId] || 0;
      episodeIndex[seasonId] = Math.min(Math.max(current + dir, 0), content.episodes.length - 1);
      root.innerHTML = seasonPageView(seasonId);
      attachViewHandlers();
    });
  });
  root.querySelectorAll("[data-episode-goto]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const hash = window.location.hash.replace(/^#\/?/, "");
      const seasonId = hash.split("/")[1];
      episodeIndex[seasonId] = Number(btn.dataset.episodeGoto);
      root.innerHTML = seasonPageView(seasonId);
      attachViewHandlers();
    });
  });
}

/* ---------- Navegación / menú / dropdown ---------- */

function closeMobileMenu() {
  document.getElementById("main-nav").classList.remove("is-open");
}

function initChrome() {
  document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("main-nav").classList.toggle("is-open");
  });

  const seasonNavItem = document.getElementById("season-nav-item");
  document.getElementById("season-nav-trigger").addEventListener("click", (e) => {
    e.stopPropagation();
    seasonNavItem.classList.toggle("is-open");
  });
  document.addEventListener("click", () => seasonNavItem.classList.remove("is-open"));

  document.getElementById("header-status").addEventListener("click", () => showNotice("Estado del sistema: ESTABLE. Ninguna variante crítica detectada."));
}

/* ---------- Init ---------- */

window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", () => {
  initChrome();
  render();
});
