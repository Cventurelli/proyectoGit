document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('miAvatar');

    img.addEventListener('mouseenter', () => {
        img.src='../../img/Grupo3/ibanez/perrito 1.jpg';
    });

    img.addEventListener('mouseleave', () => {
        img.src='../../img/Grupo3/ibanez/sol.jpg';
    });
});