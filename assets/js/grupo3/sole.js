document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('miAvatar');

    img.addEventListener('mouseenter', () => {
        img.src='../../img/Grupo3/ibanez/perrito 1.jpg';
    });

    img.addEventListener('mouseleave', () => {
        img.src='../../img/Grupo3/ibanez/sol.jpg';
    });
});

window.onload = function() {
    const corazon = document.querySelector('.fa-heart');
    corazon.classList.add('corazon-animado');
};

$(window).scroll(function() {
    if ($(this).scrollTop() > 300) { // Si bajó más de 300px
        $('#btnArriba').fadeIn();    // Aparece suavemente
    } else {
        $('#btnArriba').fadeOut();   // Desaparece
    }
});

$('#btnArriba').click(function() {
    $('html, body').animate({scrollTop: 0}, 800); // Sube con animación suave
});

$('#dark-mode-toggle').click(function() {
    $('body').toggleClass('dark-theme'); // Quita o pone la clase "dark-theme"
    
    // Cambia el icono del botón
    $(this).find('i').toggleClass('fa-moon fa-sun');
});