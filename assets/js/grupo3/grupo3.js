document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio modo Cyberpunk cargado.");

    // Actualizar fecha en el footer
    const dateElement = document.getElementById('last-update-date');
    if (dateElement) {
        const now = new Date();
        dateElement.textContent = now.toLocaleDateString() + " " + now.toLocaleTimeString().slice(0, 5);
    }

    // Animación de entrada para las tarjetas
    const cards = document.querySelectorAll('.cyber-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 150)); // Retraso escalonado
    });
});