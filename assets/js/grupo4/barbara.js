const texto = "Desarrollador Web | Analista Programador";
let index = 0;

$(document).ready(function () {

    // MODO OSCURO
    const $html = $("html");
    const $btnTema = $("#btn-tema");
    const $temaIcon = $("#tema-icon");

    $btnTema.on("click", function () {
        const temaActual = $html.attr("data-bs-theme");
        const nuevoTema = (temaActual === "dark") ? "light" : "dark";

        $html.attr("data-bs-theme", nuevoTema);

        if (nuevoTema === "dark") {
            $temaIcon.removeClass("bi-moon-stars-fill").addClass("bi-sun-fill");
            $btnTema.removeClass("btn-outline-light").addClass("btn-outline-warning");
        } else {
            $temaIcon.removeClass("bi-sun-fill").addClass("bi-moon-stars-fill");
            $btnTema.removeClass("btn-outline-warning").addClass("btn-outline-light");
        }
    });


    //ALERTA BUSCAR
    const $formBuscar = $("form.d-flex");
    const $alerta = $("#alertBuscar");

    $formBuscar.on("submit", function (e) {
        e.preventDefault();

        $alerta.removeClass("d-none").addClass("show");

        setTimeout(() => {
            $alerta.removeClass("show").addClass("d-none");
        }, 2000);
    });


    //BOTÓN VOLVER ARRIBA
    const $btnTop = $("#btnTop");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
            $btnTop.fadeIn();
        } else {
            $btnTop.fadeOut();
        }
    });

    $btnTop.on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

});

//efecto en el texto
function efecto() {
    if (index < texto.length) {
        $("#texto_dinamico").append(texto.charAt(index));
        index++;
        setTimeout(efecto, 100);
    }
}

function cerrarAlerta() {
    $("#alertBuscar").removeClass("show").addClass("d-none");
}

$(window).on("load", efecto);
