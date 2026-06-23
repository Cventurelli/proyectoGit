/* ═══════════════════════════════════════════════════════════
   PORTAFOLIO — CARLOS VENTURELLI
   Paleta: navy profundo + ámbar dorado + azul eléctrico
   Fuentes: Space Grotesk (títulos) · Inter (cuerpo)
   Sin frameworks — CSS puro con Grid, Flexbox y variables
═══════════════════════════════════════════════════════════ */

/* ── VARIABLES: MODO OSCURO (default) ─────────────────── */
:root,
[data-theme="dark"] {
  --bg:          #060d1a;
  --bg-alt:      #0d1b2e;
  --surface:     #112240;
  --border:      #1e3a5f;
  --accent:      #e8a020;
  --accent-dim:  rgba(232,160,32,0.12);
  --accent2:     #3a86ff;
  --accent2-dim: rgba(58,134,255,0.12);
  --text:        #ccd6f6;
  --text-strong: #ffffff;
  --muted:       #8892b0;
  --shadow:      rgba(0,0,0,0.5);
  --nav-blur:    rgba(6,13,26,0.88);
  --skeleton-a:  #0d1b2e;
  --skeleton-b:  #1a3050;

  /* Badges de nivel */
  --badge-good-bg:   rgba(52,211,153,0.12);
  --badge-good-text: #34d399;
  --badge-mid-bg:    rgba(251,191,36,0.12);
  --badge-mid-text:  #fbbf24;
}

/* ── VARIABLES: MODO CLARO ─────────────────────────────── */
[data-theme="light"] {
  --bg:          #f4f7fc;
  --bg-alt:      #ffffff;
  --surface:     #e8edf8;
  --border:      #c4cde0;
  --accent:      #b07000;
  --accent-dim:  rgba(176,112,0,0.1);
  --accent2:     #1a5fd4;
  --accent2-dim: rgba(26,95,212,0.1);
  --text:        #1a2340;
  --text-strong: #0a0f1e;
  --muted:       #4a5580;
  --shadow:      rgba(0,0,0,0.12);
  --nav-blur:    rgba(244,247,252,0.92);
  --skeleton-a:  #dde3f0;
  --skeleton-b:  #c8d0e4;

  --badge-good-bg:   rgba(5,150,105,0.1);
  --badge-good-text: #057a55;
  --badge-mid-bg:    rgba(180,120,0,0.1);
  --badge-mid-text:  #92600a;
}

/* ── RESET & BASE ──────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.75;
  padding-top: 60px; /* alto del nav fijo */
  transition: background-color 0.3s ease, color 0.3s ease;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

ul, ol {
  list-style: none;
}

strong {
  color: var(--text-strong);
  font-weight: 600;
}

img, svg {
  display: block;
  max-width: 100%;
}

/* ── TIPOGRAFÍA ────────────────────────────────────────── */
h1, h2, h3 {
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1.2;
  color: var(--text-strong);
}

/* ── FOCO (accesibilidad teclado) ──────────────────────── */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ══════════════════════════════════════════════════════════
   HEADER / NAV
══════════════════════════════════════════════════════════ */
.cv-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 60px;
}

.cv-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 clamp(1rem, 4vw, 2.5rem);
  background: var(--nav-blur);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s ease;
}

.cv-nav__logo {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 3px;
  flex-shrink: 0;
}

.cv-nav__links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.cv-nav__link {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--muted);
  padding: 0.4rem 0.7rem;
  border-radius: 6px;
  transition: color 0.25s, background 0.25s;
  white-space: nowrap;
}

.cv-nav__link:hover,
.cv-nav__link.is-active {
  color: var(--accent);
  background: var(--accent-dim);
}

.cv-nav__link--back {
  margin-left: 0.5rem;
  padding-left: 0.9rem;
  border-left: 1px solid var(--border);
  font-size: 0.8rem;
}

/* Controles: tema + hamburguesa */
.cv-nav__controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

/* Botón de tema */
.cv-theme-btn {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s, border-color 0.25s;
}

.cv-theme-btn:hover {
  background: var(--accent-dim);
  border-color: var(--accent);
}

/* Hamburguesa */
.cv-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
}

.cv-hamburger__bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.cv-hamburger[aria-expanded="true"] .cv-hamburger__bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.cv-hamburger[aria-expanded="true"] .cv-hamburger__bar:nth-child(2) {
  opacity: 0;
}
.cv-hamburger[aria-expanded="true"] .cv-hamburger__bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ══════════════════════════════════════════════════════════
   MENÚ MÓVIL
══════════════════════════════════════════════════════════ */
.cv-mobile-menu {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: var(--bg-alt);
  border-bottom: 1px solid var(--border);
  padding: 1.25rem clamp(1rem, 4vw, 2.5rem);
  z-index: 99;
  transform: translateY(-110%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  visibility: hidden;
}

.cv-mobile-menu.is-open {
  transform: translateY(0);
  visibility: visible;
}

.cv-mobile-link {
  display: block;
  padding: 0.8rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--muted);
  border-bottom: 1px solid var(--border);
  transition: color 0.2s;
}

.cv-mobile-link:hover {
  color: var(--accent);
}

/* ══════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════ */
.cv-hero {
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 4rem clamp(1.5rem, 6vw, 6rem);
  position: relative;
  overflow: hidden;
}

/* Degradado de fondo del hero */
.cv-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 55% 55% at 72% 48%, rgba(58,134,255,0.07) 0%, transparent 65%),
    radial-gradient(ellipse 40% 40% at 18% 75%, rgba(232,160,32,0.06) 0%, transparent 65%);
  pointer-events: none;
}

.cv-hero__content {
  flex: 1;
  max-width: 560px;
  position: relative;
  z-index: 1;
}

.cv-hero__eyebrow {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.cv-hero__name {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 700;
  color: var(--text-strong);
  margin-bottom: 0.75rem;
}

.cv-hero__role {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 500;
  color: var(--accent2);
  margin-bottom: 1.5rem;
  min-height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.cv-hero__cursor {
  animation: blink 1s step-end infinite;
  color: var(--accent);
  font-weight: 300;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.cv-hero__bio {
  font-size: 1rem;
  color: var(--muted);
  max-width: 460px;
  margin-bottom: 2.25rem;
  line-height: 1.8;
}

/* ── Botones ─────────────────────────────────────────── */
.cv-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.cv-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.65rem 1.6rem;
  border-radius: 7px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid transparent;
  transition: transform 0.2s ease, background 0.2s ease,
              color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;
}

.cv-btn:hover {
  transform: translateY(-2px);
}

.cv-btn--primary {
  background: var(--accent);
  color: #060d1a;
  border-color: var(--accent);
}
.cv-btn--primary:hover {
  background: transparent;
  color: var(--accent);
  box-shadow: 0 4px 20px rgba(232,160,32,0.25);
}

.cv-btn--outline {
  background: transparent;
  color: var(--accent2);
  border-color: var(--accent2);
}
.cv-btn--outline:hover {
  background: var(--accent2-dim);
  box-shadow: 0 4px 20px rgba(58,134,255,0.2);
}

.cv-btn--icon {
  width: 42px;
  height: 42px;
  padding: 0;
  border-radius: 8px;
  background: var(--surface);
  color: var(--muted);
  border-color: var(--border);
}
.cv-btn--icon:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-dim);
}

.cv-btn--linkedin {
  background: #0a66c2;
  color: #fff;
  border-color: #0a66c2;
}
.cv-btn--linkedin:hover {
  background: #004d8f;
  border-color: #004d8f;
}

.cv-btn--lg {
  padding: 0.8rem 2rem;
  font-size: 0.95rem;
}

/* ── Visual decorativo: órbitas ───────────────────────── */
.cv-hero__visual {
  flex-shrink: 0;
  width: 280px;
  height: 280px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cv-orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px solid;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.cv-orbit--1 {
  width: 170px; height: 170px;
  border-color: rgba(232,160,32,0.45);
  animation: orbit-spin 16s linear infinite;
}
.cv-orbit--2 {
  width: 222px; height: 222px;
  border-color: rgba(58,134,255,0.3);
  animation: orbit-spin 26s linear infinite reverse;
}
.cv-orbit--3 {
  width: 272px; height: 272px;
  border-color: rgba(232,160,32,0.1);
  animation: orbit-spin 40s linear infinite;
}

.cv-orbit__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: -5px;
}
.cv-orbit__dot--amber { background: var(--accent); box-shadow: 0 0 10px var(--accent); }
.cv-orbit__dot--blue  { background: var(--accent2); box-shadow: 0 0 10px var(--accent2); }

@keyframes orbit-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.cv-hero__initials {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 5px;
  text-shadow: 0 0 40px rgba(232,160,32,0.35);
  z-index: 1;
}

/* ── Scroll cue ────────────────────────────────────────── */
.cv-scroll-cue {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity 0.2s;
}
.cv-scroll-cue:hover { opacity: 1; }

.cv-scroll-cue__mouse {
  width: 22px;
  height: 34px;
  border: 2px solid var(--muted);
  border-radius: 11px;
  display: flex;
  justify-content: center;
  padding-top: 5px;
}

.cv-scroll-cue__wheel {
  width: 3px;
  height: 6px;
  background: var(--accent);
  border-radius: 2px;
  animation: scroll-wheel 2s ease infinite;
}

@keyframes scroll-wheel {
  0%   { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
}

/* ══════════════════════════════════════════════════════════
   SECCIONES BASE
══════════════════════════════════════════════════════════ */
.cv-section {
  padding: 5.5rem clamp(1.5rem, 6vw, 6rem);
  background-color: var(--bg);
  transition: background-color 0.3s ease;
}

.cv-section--alt {
  background-color: var(--bg-alt);
}

.cv-container {
  max-width: 900px;
  margin: 0 auto;
}

.cv-section__title {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 700;
  color: var(--text-strong);
  margin-bottom: 0.75rem;
}

/* Línea decorativa bajo el título */
.cv-section__title::after {
  content: '';
  display: block;
  width: 48px;
  height: 3px;
  background: var(--accent);
  border-radius: 2px;
  margin-top: 0.6rem;
}

.cv-section__subtitle {
  color: var(--muted);
  font-size: 0.95rem;
  margin-bottom: 2.5rem;
}

/* Enlace inline */
.cv-link {
  color: var(--accent2);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s;
}
.cv-link:hover { color: var(--accent); }

/* ══════════════════════════════════════════════════════════
   SOBRE MÍ
══════════════════════════════════════════════════════════ */
.cv-about p {
  color: var(--muted);
  margin-bottom: 1.1rem;
  font-size: 1.02rem;
  max-width: 700px;
}

.cv-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.75rem;
}

.cv-tag {
  display: inline-block;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-family: 'Space Grotesk', sans-serif;
}

/* ══════════════════════════════════════════════════════════
   TECNOLOGÍAS — Grid de tarjetas
══════════════════════════════════════════════════════════ */
.cv-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.cv-skill-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
}

.cv-skill-card:hover {
  border-color: var(--accent);
  box-shadow: 0 8px 30px var(--shadow);
  transform: translateY(-3px);
}

.cv-skill-card__emoji {
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
  display: block;
}

.cv-skill-card__name {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-strong);
}

.cv-skill-card__badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 20px;
  margin-bottom: 0.6rem;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.4px;
}

.cv-skill-card__badge--good {
  background: var(--badge-good-bg);
  color: var(--badge-good-text);
}
.cv-skill-card__badge--mid {
  background: var(--badge-mid-bg);
  color: var(--badge-mid-text);
}

.cv-skill-card__desc {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.6;
}

/* ── Caja "Actualmente aprendiendo" ───────────────────── */
.cv-learning {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent2);
  border-radius: 10px;
  padding: 1.5rem 1.75rem;
}

.cv-learning__title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-strong);
  margin-bottom: 1rem;
}

.cv-learning__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cv-learning__list li {
  font-size: 0.9rem;
  color: var(--muted);
  padding-left: 1rem;
  position: relative;
}

.cv-learning__list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent2);
  font-size: 0.85rem;
}

/* ══════════════════════════════════════════════════════════
   EXPERIENCIA — Timeline vertical
   Elemento firma: línea continua con marcadores
══════════════════════════════════════════════════════════ */
.cv-timeline {
  position: relative;
  padding-left: 2rem;
}

/* Línea vertical */
.cv-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent), var(--accent2));
  border-radius: 1px;
}

.cv-timeline__item {
  position: relative;
  padding-bottom: 2.5rem;
}

.cv-timeline__item:last-child {
  padding-bottom: 0;
}

/* Marcador circular */
.cv-timeline__item::before {
  content: '';
  position: absolute;
  left: -2.45rem;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg);
  box-shadow: 0 0 0 2px var(--accent);
  transition: background 0.3s;
}

.cv-timeline__item:hover::before {
  background: var(--accent2);
  box-shadow: 0 0 0 2px var(--accent2);
}

.cv-timeline__period {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.3rem;
  font-family: 'Space Grotesk', sans-serif;
}

.cv-timeline__role {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-strong);
  margin-bottom: 0.2rem;
}

.cv-timeline__org {
  font-size: 0.85rem;
  color: var(--accent2);
  margin-bottom: 0.5rem;
}

.cv-timeline__desc {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.7;
  max-width: 620px;
}

/* ══════════════════════════════════════════════════════════
   PROYECTOS — GitHub API
══════════════════════════════════════════════════════════ */

/* Esqueletos de carga */
.cv-projects-loader {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
}

.cv-skeleton {
  height: 160px;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--skeleton-a) 25%, var(--skeleton-b) 50%, var(--skeleton-a) 75%);
  background-size: 200% 100%;
  animation: skeleton-shine 1.5s infinite;
}

@keyframes skeleton-shine {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Grid de proyectos real */
.cv-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
}

/* Tarjeta de proyecto */
.cv-repo-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
  text-decoration: none;
  color: inherit;
}

.cv-repo-card:hover {
  border-color: var(--accent2);
  box-shadow: 0 8px 30px var(--shadow);
  transform: translateY(-4px);
}

.cv-repo-card__header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cv-repo-card__icon {
  color: var(--accent2);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.cv-repo-card__name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent2);
  word-break: break-word;
}

.cv-repo-card__desc {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.6;
  flex: 1;
}

.cv-repo-card__meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border);
}

.cv-repo-card__lang {
  font-size: 0.75rem;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.cv-repo-card__lang-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  display: inline-block;
}

.cv-repo-card__stars {
  font-size: 0.75rem;
  color: var(--muted);
  margin-left: auto;
}

/* Error de API */
.cv-projects-error {
  color: var(--muted);
  font-size: 0.9rem;
  text-align: center;
  padding: 2rem;
}

/* ══════════════════════════════════════════════════════════
   CONTACTO
══════════════════════════════════════════════════════════ */
.cv-contact {
  text-align: center;
}

.cv-contact .cv-section__title::after {
  margin-left: auto;
  margin-right: auto;
}

.cv-contact .cv-section__subtitle {
  margin-bottom: 2rem;
}

.cv-contact__btns {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.cv-contact__location {
  color: var(--muted);
  font-size: 0.9rem;
}

/* ══════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════ */
.cv-footer {
  background: var(--bg-alt);
  border-top: 1px solid var(--border);
  padding: 1.75rem clamp(1.5rem, 6vw, 6rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.cv-footer__copy {
  font-size: 0.82rem;
  color: var(--muted);
}

.cv-footer__links {
  display: flex;
  gap: 1.25rem;
}

.cv-footer__link {
  font-size: 0.82rem;
  color: var(--muted);
  transition: color 0.2s;
}
.cv-footer__link:hover { color: var(--accent); }

/* ══════════════════════════════════════════════════════════
   BOTÓN VOLVER ARRIBA
══════════════════════════════════════════════════════════ */
.cv-back-top {
  position: fixed;
  bottom: 1.75rem;
  right: 1.75rem;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--accent);
  color: #060d1a;
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(232,160,32,0.4);
  transition: transform 0.2s, opacity 0.2s, box-shadow 0.2s;
  z-index: 90;
  opacity: 0;
}

.cv-back-top:not([hidden]) {
  opacity: 1;
}

.cv-back-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 24px rgba(232,160,32,0.5);
}

/* ══════════════════════════════════════════════════════════
   ANIMACIONES DE ENTRADA (IntersectionObserver)
══════════════════════════════════════════════════════════ */
.cv-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.cv-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ══════════════════════════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  /* Nav: ocultar links, mostrar hamburguesa */
  .cv-nav__links { display: none; }
  .cv-hamburger  { display: flex; }

  /* Hero: apilar verticalmente */
  .cv-hero {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1.5rem 5rem;
    min-height: auto;
    gap: 2.5rem;
  }

  .cv-hero__content { max-width: 100%; }

  .cv-hero__actions {
    justify-content: center;
  }

  .cv-hero__bio { margin-left: auto; margin-right: auto; }

  .cv-hero__visual {
    width: 200px;
    height: 200px;
    order: -1;
  }

  .cv-orbit--1 { width: 120px; height: 120px; }
  .cv-orbit--2 { width: 160px; height: 160px; }
  .cv-orbit--3 { width: 196px; height: 196px; }
  .cv-hero__initials { font-size: 1.8rem; }

  .cv-scroll-cue { display: none; }

  .cv-section { padding: 4rem 1.5rem; }

  /* Contacto: botones en columna */
  .cv-contact__btns { flex-direction: column; align-items: center; }
  .cv-btn--lg { width: 100%; max-width: 320px; justify-content: center; }

  /* Footer: apilar */
  .cv-footer {
    flex-direction: column;
    text-align: center;
  }
  .cv-footer__links { justify-content: center; }
}

@media (max-width: 480px) {
  .cv-skills-grid { grid-template-columns: 1fr; }
  .cv-projects-loader,
  .cv-projects-grid { grid-template-columns: 1fr; }
}

/* ── Movimiento reducido ─────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .cv-orbit,
  .cv-hero__cursor,
  .cv-scroll-cue__wheel,
  .cv-skeleton,
  .cv-reveal {
    animation: none !important;
    transition: none !important;
  }
  .cv-reveal { opacity: 1; transform: none; }
}
