//Botón que cambia el texto del header
const titulo = document.querySelector("#myName h1");

const textoOriginal = "¡Hola, soy Pamela!";
const textoAlternativo = "Desarrolladora en constante aprendizaje 🚀";

titulo.addEventListener("click", () => {
  titulo.textContent =
    titulo.textContent === textoOriginal ? textoAlternativo : textoOriginal;
});
//Efecto máquina de escribir
const text = "Desarrolladora Full Stack Java en Formación.";
const typewriterEl = document.getElementById("typewriter");

let index = 0;
let isDeleting = false;
const speed = 100;
const pause = 1500;

function typeLoop() {
  if (!isDeleting && index < text.length) {
    typewriterEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeLoop, speed);
  } else if (isDeleting && index > 0) {
    typewriterEl.textContent = text.substring(0, index - 1);
    index--;
    setTimeout(typeLoop, speed / 2);
  } else {
    isDeleting = !isDeleting;
    setTimeout(typeLoop, pause);
  }
}

typeLoop();

$(document).ready(function () {
  // --- REQUISITO 1: Cambio de Tema Claro/Oscuro (jQuery) ---
  $("#btn-tema").click(function () {
    $("body").toggleClass("dark-mode");

    // Cambiar el texto del botón dinámicamente
    if ($("body").hasClass("dark-mode")) {
      $(this).text("☀️ Modo Claro");
    } else {
      $(this).text("🌙 Modo Oscuro");
    }
  });

  // --- REQUISITO 4: Cambio de colores en una sección (jQuery) ---
$(document).ready(function () {
  // Paleta de colores suaves (Pastel) para mantener legibilidad
  const paleta = [
    "#E8F5E9", // Verde muy claro
    "#FFFDE7", // Amarillo muy claro
    "#E3F2FD", // Azul muy claro
    "#F3E5F5", // Morado muy claro
    "#FFF3E0", // Naranja muy claro
    "#E0F2F1", // Turquesa muy claro
  ];

  // Evento Click para el Requisito 4
$(document).ready(function() {
    // Paleta para modo claro (Pasteles)
    const paletaClara = ['#d1e7dd', '#fff3cd', '#f8d7da', '#cfe2ff', '#e2e3e5'];
    // Paleta para modo oscuro (Verdes y grises profundos)
    const paletaOscura = ['#0a2f1f', '#1c1c1c', '#2c3e50', '#1a3a3a', '#2d2d2d'];

    $('#btn-colores-multiples').on('click', function() {
        // 1. Detectamos si el modo oscuro está activo
        const esModoOscuro = $('body').hasClass('dark-mode');
        
        // 2. Elegimos la paleta correspondiente
        const coloresUsar = esModoOscuro ? paletaOscura : paletaClara;
        const colorTexto = esModoOscuro ? '#ffffff' : '#212529';

        // 3. Recorremos las secciones
        $('section').each(function() {
            const colorAzar = coloresUsar[Math.floor(Math.random() * coloresUsar.length)];
            
            $(this).css({
                'background-color': colorAzar,
                'color': colorTexto
            });

            // Ajustamos el color de los h2 para que contrasten
            $(this).find('h2').css('color', esModoOscuro ? '#20c997' : '#036146');
        });
    });
  });
  // --- REQUISITO 2: Animación al desplazar (JS Puro ) ---
  $(document).ready(function () {
    // Al entrar con el mouse a una sección
    $("section").mouseenter(function () {
      // Buscamos el H2 de esa sección específica y lo resaltamos
      $(this).find("h2").css({
        color: "#ffc107",
        "letter-spacing": "2px",
        transition: "all 0.3s",
      });
    });

    // Al salir con el mouse de la sección (vuelve a la normalidad)
    $("section").mouseleave(function () {
      const esOscuro = $("body").hasClass("dark-mode");
      $(this)
        .find("h2")
        .css({
          color: esOscuro ? "#20c997" : "#036146",
          "letter-spacing": "normal",
        });
    });
  });
});
});

//Resaltar sección al pasar el mouse
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("shadow-lg");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("shadow-lg");
  });
});


// Abrir email al hacer clic en el botón de contacto
document.getElementById("enviarCorreo").addEventListener("click", () => {
  window.location.href = "mailto:pamela.kyp@gmail.com";

  setTimeout(() => {
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("modalContacto")
    );
    if (modal) modal.hide();
  }, 500);
});


//Animación de aparición al hacer scroll
const sections = document.querySelectorAll("section");

const mostrarSeccion = () => {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};

sections.forEach((section) => section.classList.add("fade-in"));

window.addEventListener("scroll", mostrarSeccion);
mostrarSeccion();

//Contador de proyectos

const proyectos = document.querySelectorAll("#proyectos li");
const contador = document.getElementById("contadorProyectos");

contador.textContent = `Total de proyectos: ${proyectos.length}`;

//Animación al hacer scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Mostrar/Ocultar el botón según el scroll
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btnBackToTop.style.display = "block";
  } else {
    btnBackToTop.style.display = "none";
  }
};

//Botón de volver arriba
const btnBackToTop = document.getElementById("btnBackToTop");

// Función para volver arriba suavemente
btnBackToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Esto hace el efecto de deslizamiento suave
  });
})