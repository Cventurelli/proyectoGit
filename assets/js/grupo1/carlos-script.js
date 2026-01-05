// Mensaje de bienvenida en la consola
console.log("Portafolio de Carlos Venturelli cargado correctamente");

// Ejemplo de interacción con el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Botón de contacto dinámico
  const contactoBtn = document.querySelector("#contacto a.btn");

  if (contactoBtn) {
    contactoBtn.addEventListener("mouseover", () => {
      contactoBtn.textContent = "¡Escríbeme ahora!";
    });

    contactoBtn.addEventListener("mouseout", () => {
      contactoBtn.textContent = "Contacto";
    });
  }

  // Ejemplo de animación simple en proyectos
  const proyectos = document.querySelectorAll("#proyectos li");
  proyectos.forEach((proyecto) => {
    proyecto.addEventListener("click", () => {
      alert(`Has seleccionado: ${proyecto.textContent}`);
    });
  });
});