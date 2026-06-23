/**
 * carlos-script.js — Portafolio de Carlos Venturelli
 * ─────────────────────────────────────────────────────
 * Módulos:
 *   1. Tema (oscuro / claro) con persistencia en localStorage
 *   2. Navegación: scroll, sección activa, hamburguesa
 *   3. Rotador de roles en el hero
 *   4. Animaciones de entrada (IntersectionObserver)
 *   5. Botón "volver arriba"
 *   6. Proyectos desde GitHub API
 *   7. Año automático en el footer
 * ─────────────────────────────────────────────────────
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ══════════════════════════════════════════════════
     MÓDULO 1: TEMA OSCURO / CLARO
  ══════════════════════════════════════════════════ */
  const THEME_KEY = 'cv-theme';
  const html      = document.documentElement;
  const themeBtn  = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  /** localStorage seguro (falla en algunos contextos file://) */
  const storage = {
    get(key) {
      try { return localStorage.getItem(key); } catch { return null; }
    },
    set(key, val) {
      try { localStorage.setItem(key, val); } catch { /* sin persistencia */ }
    }
  };

  /** Aplica el tema y actualiza ícono + aria-label */
  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    storage.set(THEME_KEY, theme);

    const isDark = theme === 'dark';
    if (themeIcon) themeIcon.textContent = isDark ? '☀' : '🌙';
    if (themeBtn)  themeBtn.setAttribute('aria-label',
      isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }

  /** Lee preferencia guardada o del sistema operativo */
  function initTheme() {
    const saved   = storage.get(THEME_KEY);
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark' : 'light';
    applyTheme(saved || prefers);
  }

  initTheme();

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }


  /* ══════════════════════════════════════════════════
     MÓDULO 2: NAVEGACIÓN
  ══════════════════════════════════════════════════ */
  const mainNav    = document.getElementById('mainNav');
  const navToggle  = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks   = document.querySelectorAll('.cv-nav__link');
  const sections   = document.querySelectorAll('section[id]');

  /** Cierra el menú móvil */
  function closeMobileMenu() {
    if (!navToggle || !mobileMenu) return;
    navToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  /** Abre/cierra el menú hamburguesa */
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('is-open', !isOpen);
      mobileMenu.setAttribute('aria-hidden', String(isOpen));
    });

    /* Cerrar al hacer clic en un enlace del menú móvil */
    mobileMenu.querySelectorAll('.cv-mobile-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    /* Cerrar al hacer clic fuera */
    document.addEventListener('click', e => {
      if (!mainNav.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobileMenu();
      }
    });

    /* Cerrar con tecla Escape */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMobileMenu();
    });
  }

  /** Resalta el link activo según la sección visible */
  function updateActiveLink() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 80) {
        current = sec.id;
      }
    });
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('is-active', href === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // ejecutar al cargar


  /* ══════════════════════════════════════════════════
     MÓDULO 3: ROTADOR DE ROLES EN EL HERO
  ══════════════════════════════════════════════════ */
  const roleEl = document.getElementById('roleText');

  const roles = [
    'Ingeniero Industrial',
    'Desarrollador Full Stack Junior',
    'Analisís de Datos',
    'Técnico Químico'
  ];

  let roleIndex = 0;

  if (roleEl) {
    setInterval(() => {
      /* Aplicar fade-out via estilos inline momentáneos sin !important */
      roleEl.style.opacity = '0';
      roleEl.style.transform = 'translateY(6px)';
      roleEl.style.transition = 'opacity 0.35s ease, transform 0.35s ease';

      setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleEl.textContent = roles[roleIndex];
        roleEl.style.opacity = '1';
        roleEl.style.transform = 'translateY(0)';
      }, 380);
    }, 3000);
  }


  /* ══════════════════════════════════════════════════
     MÓDULO 4: ANIMACIONES DE ENTRADA (IntersectionObserver)
  ══════════════════════════════════════════════════ */
  const revealEls = document.querySelectorAll('.cv-reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(el => observer.observe(el));
  } else {
    /* Fallback: mostrar todo sin animación */
    revealEls.forEach(el => el.classList.add('is-visible'));
  }


  /* ══════════════════════════════════════════════════
     MÓDULO 5: BOTÓN VOLVER ARRIBA
  ══════════════════════════════════════════════════ */
  const backTopBtn = document.getElementById('backTop');

  if (backTopBtn) {
    /* Mostrar / ocultar según posición de scroll */
    function toggleBackTop() {
      if (window.scrollY > 400) {
        backTopBtn.removeAttribute('hidden');
      } else {
        backTopBtn.setAttribute('hidden', '');
      }
    }

    window.addEventListener('scroll', toggleBackTop, { passive: true });
    toggleBackTop();

    backTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ══════════════════════════════════════════════════
     MÓDULO 6: PROYECTOS DESDE GITHUB API
  ══════════════════════════════════════════════════ */
  const projectsGrid   = document.getElementById('projectsGrid');
  const projectsLoader = document.getElementById('projectsLoader');
  const projectsError  = document.getElementById('projectsError');

  /** Colores de lenguaje (GitHub-style) */
  const langColors = {
    'Java':       '#b07219',
    'JavaScript': '#f1e05a',
    'HTML':       '#e34c26',
    'CSS':        '#563d7c',
    'Python':     '#3572A5',
    'TypeScript': '#2b7489',
    'default':    '#8892b0'
  };

  /** Construye una tarjeta de repositorio */
  function buildRepoCard(repo) {
    const card = document.createElement('a');
    card.href    = repo.html_url;
    card.target  = '_blank';
    card.rel     = 'noopener noreferrer';
    card.className = 'cv-repo-card';
    card.setAttribute('aria-label', `Repositorio ${repo.name} en GitHub`);

    const description = repo.description
      ? repo.description
      : '<em>Sin descripción</em>';

    const langColor = repo.language
      ? (langColors[repo.language] || langColors.default)
      : langColors.default;

    const langHtml = repo.language
      ? `<span class="cv-repo-card__lang">
           <span class="cv-repo-card__lang-dot" style="background:${langColor}"></span>
           ${repo.language}
         </span>`
      : '';

    const starsHtml = repo.stargazers_count > 0
      ? `<span class="cv-repo-card__stars">⭐ ${repo.stargazers_count}</span>`
      : '';

    card.innerHTML = `
      <div class="cv-repo-card__header">
        <span class="cv-repo-card__icon" aria-hidden="true">📁</span>
        <span class="cv-repo-card__name">${repo.name}</span>
      </div>
      <p class="cv-repo-card__desc">${description}</p>
      <div class="cv-repo-card__meta">
        ${langHtml}
        ${starsHtml}
      </div>
    `;
    return card;
  }

  /** Carga los repos desde la API pública de GitHub */
  async function loadGitHubRepos() {
    try {
      const res = await fetch(
        'https://api.github.com/users/Cventurelli/repos?sort=updated&per_page=6',
        { headers: { Accept: 'application/vnd.github.v3+json' } }
      );

      if (!res.ok) throw new Error(`GitHub API respondió con ${res.status}`);

      const repos = await res.json();

      /* Ocultar esqueletos */
      if (projectsLoader) projectsLoader.remove();

      if (!repos.length) {
        if (projectsError) projectsError.removeAttribute('hidden');
        return;
      }

      /* Filtrar forks y renderizar */
      const publicRepos = repos.filter(r => !r.fork).slice(0, 6);

      if (projectsGrid) {
        publicRepos.forEach(repo => {
          projectsGrid.appendChild(buildRepoCard(repo));
        });

        /* Aplicar reveal a las cards recién creadas */
        projectsGrid.querySelectorAll('.cv-repo-card').forEach((card, i) => {
          card.style.transitionDelay = `${i * 80}ms`;
          card.classList.add('cv-reveal');
          setTimeout(() => card.classList.add('is-visible'), 50);
        });
      }

    } catch (err) {
      console.warn('Error al cargar repos de GitHub:', err.message);
      if (projectsLoader) projectsLoader.remove();
      if (projectsError) projectsError.removeAttribute('hidden');
    }
  }

  loadGitHubRepos();


  /* ══════════════════════════════════════════════════
     MÓDULO 7: AÑO AUTOMÁTICO EN EL FOOTER
  ══════════════════════════════════════════════════ */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* ── Confirmación en consola ──────────────────────── */
  console.log(
    '%cPortafolio de Carlos Venturelli cargado ✓',
    'color:#e8a020; font-weight:bold; font-size:12px;'
  );

});
