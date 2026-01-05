//modo oscuro
const btnTema = document.getElementById("btn-tema");
const temaIcon = document.getElementById("tema-icon");
const elemento_html = document.documentElement;

btnTema.addEventListener("click", () => {
    const tema_actual = elemento_html.getAttribute("data-bs-theme");
    const nuevoTema = (tema_actual === "dark") ? "light" : "dark";
            
    elemento_html.setAttribute("data-bs-theme", nuevoTema);
            
            
    if (nuevoTema === "dark") {
                
        temaIcon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
                
        btnTema.classList.replace("btn-outline-light", "btn-outline-warning");
    } else {
                
        temaIcon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
        btnTema.classList.replace("btn-outline-warning", "btn-outline-light");
    }
});

//efecto de texto
const texto = "Desarrollador Web | Analista Programador";
let index = 0;

function efecto() {
    if (index < texto.length) {
        document.getElementById("texto_dinamico").innerHTML += texto.charAt(index);
        index++;
        setTimeout(efecto, 100);
    }
}
window.onload = efecto;