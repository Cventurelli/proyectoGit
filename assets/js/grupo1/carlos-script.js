/**
 * carlos-script.js
 * Portafolio — Carlos Venturelli
 * ─────────────────────────────────────────────────────────
 * 1. Rotador de roles en el hero
 * 2. Barras de habilidades animadas (IntersectionObserver)
 * 3. Navbar: sombra al hacer scroll + sección activa
 * 4. Menú hamburguesa móvil
 * 5. Hover dinámico en botón de contacto
 * 6. Smooth scroll al cerrar menú móvil
 */

document.addEventListener("DOMContentLoaded", () => {

  /* ── 1. ROTADOR DE ROLES ────────────────────────────── */
  const roles = [
    "Ingeniero Industrial",
    "Desarrollador Full Stack",
    "Analista de Datos",
    "Técnico Químico"
  ];
  let roleIndex = 0;
  const roleEl = document.getElementById("roleText");

  if (roleEl) {
    setInterval(() => {
      roleEl.classList.add("fade");
      setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleEl.textContent = roles[roleIndex];
        roleEl.classList.remove("fade");
      }, 400);
    }, 2800);
  }

  /* ── 2. BARRAS DE HABILIDADES (IntersectionObserver) ── */
  const skills = document.querySelectorAll(".cv-skill");

  const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skill = entry.target;
        const level = skill.dataset.level || "0";
        const fill = skill.querySelector(".cv-skill__fill");
        if (fill) {
          // Pequeño delay para que la animación se sienta natural
          setTimeout(() => {
            fill.style.width = level + "%";
          }, 150);
        }
        observer.unobserve(skill);
      }
    });
  };

  const skillObserver = new IntersectionObserver(animateSkills, {
    threshold: 0.3
  });

  skills.forEach(skill => skillObserver.observe(skill));

  /* ── 3. NAVBAR: scroll shadow + sección activa ─────── */
  const nav = document.getElementById("mainNav");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".cv-nav__link");

  const onScroll = () => {
    // Sombra al desplazarse
    if (nav) {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    }

    // Link activo según sección visible
    let current = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 90;
      if (window.scrollY >= top) {
        current = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  /* ── 4. MENÚ HAMBURGUESA ────────────────────────────── */
  const toggle    = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  const closeMobileMenu = () => {
    if (!toggle || !mobileMenu) return;
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
  };

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
      mobileMenu.classList.toggle("open", isOpen);
      mobileMenu.setAttribute("aria-hidden", !isOpen);
    });

    // Cerrar al hacer clic en cualquier enlace del menú móvil
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  /* ── 5. HOVER DINÁMICO EN BOTÓN DE CONTACTO ────────── */
  const contactBtn = document.getElementById("contactBtn");

  if (contactBtn) {
    const originalText = contactBtn.textContent;
    contactBtn.addEventListener("mouseover", () => {
      contactBtn.textContent = "¡Escríbeme ahora!";
    });
    contactBtn.addEventListener("mouseout", () => {
      contactBtn.textContent = originalText;
    });
  }

  /* ── LOG ─────────────────────────────────────────────── */
  console.log("%cPortafolio de Carlos Venturelli cargado ✓", "color:#e8a020;font-weight:bold;");

});
