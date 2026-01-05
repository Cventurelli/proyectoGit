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
});