//modo oscuro-claro
const btnTema = document.getElementById("btn-tema");
const temaIcon = document.getElementById("tema-icon");
const elemento_html = document.documentElement;

// Función para cambiar el tema al hacer clic en el botón de tema por evento
btnTema.addEventListener("click", () => {
    const tema_actual = elemento_html.getAttribute("data-bs-theme");
    const nuevoTema = (tema_actual === "dark") ? "light" : "dark";

    elemento_html.setAttribute("data-bs-theme", nuevoTema);

    if (nuevoTema === "dark") {
        temaIcon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
        btnTema.classList.replace("btn-outline-light", "btn-outline-warning");
        btnTema.innerHTML = "Claro";
    } else {
        temaIcon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
        btnTema.classList.replace("btn-outline-warning", "btn-outline-light");
        btnTema.innerHTML = "Oscuro";
    }
});
// Comprobar el tema actual al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const tema_actual = elemento_html.getAttribute("data-bs-theme");
    if (tema_actual === "dark") {
        btnTema.innerHTML = "Claro"; 
    } else {
        btnTema.innerHTML = "Oscuro";
    }
});

//efecto de texto
const parrafo = document.getElementById("parrafo");
const texto = "Soy Ingeniera en Ejecucion en Informatica y cursando estudios en Desarrollador Fullstack Java Developer.";
const letras = texto.split("");
let index = 0;
let intervalId;

/**
 * Escribe el texto en el párrafo con id "parrafo" caracter a caracter,
 * con un intervalo de 100 milisegundos entre cada caracter.
 * Cuando se ha escrito todo el texto, empieza a borrarlo caracter a caracter
 * con el mismo intervalo de tiempo.
 */
function escribir() {
  if (index < texto.length) {
    parrafo.innerHTML += texto.charAt(index);
    index++;
    setTimeout(escribir, 100);
  } else {
    intervalId = setInterval(borrar, 100);
  }
}

/**
 * Borra el texto del párrafo con id "parrafo" caracter a caracter,
 * con un intervalo de 100 milisegundos entre cada caracter.
 * Cuando no hay más texto que borrar, se vuelve a llamar a la función
 * escribir() para escribir el texto de nuevo.
 */
function borrar() {
  if (parrafo.innerHTML.length > 0) {
    parrafo.innerHTML = parrafo.innerHTML.slice(0, -1);
  } else {
    clearInterval(intervalId);
    index = 0;
    escribir();
  }
}

escribir();