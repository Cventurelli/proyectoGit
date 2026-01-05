document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("welcome-popup");
    const closeBtn = document.getElementById("close");

    // Mostramos el popup con un pequeño retraso para suavidad
    setTimeout(() => {
        popup.classList.add("active");
    }, 500);

    // Evento para cerrar
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    });

    // Opcional: Cerrar al hacer clic fuera de la caja blanca
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("active");
        }
    });
});