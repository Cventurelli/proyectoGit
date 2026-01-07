$(document).ready(function () {

    // MODO OSCURO / CLARO
    $("#btnTema").click(function () {
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            $(this).text("☀️ Modo claro");
        } else {
            $(this).text("🌙 Modo oscuro");
        }
    });

    // ANIMACIÓN SCROLL
    $(window).on("scroll", function () {
        $(".fade-section").each(function () {
            let top = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let height = $(window).height();

            if (scroll + height > top + 100) {
                $(this).addClass("show");
            }
        });
    });

    // VALIDACIÓN FORMULARIO
    $("#formContacto").submit(function (e) {
        e.preventDefault();

        let valido = true;

        if ($("#nombre").val().trim() === "") {
            $("#errorNombre").text("Ingrese su nombre");
            valido = false;
        } else {
            $("#errorNombre").text("");
        }

        if ($("#email").val().trim() === "") {
            $("#errorEmail").text("Ingrese su email");
            valido = false;
        } else {
            $("#errorEmail").text("");
        }

        if (valido) {
            alert("Formulario enviado correctamente ✔️");
            this.reset();
        }
    });

});
$(document).ready(function () {

    let colores = ["color-1", "color-2", "color-3", "color-4"];
    let indiceColor = 0;

    $("#btnColor").click(function () {

        let seccion = $("#competencias");

        // Eliminar colores anteriores
        seccion.removeClass("color-1 color-2 color-3 color-4");

        // Agregar nuevo color
        seccion.addClass(colores[indiceColor]);

        // Cambiar al siguiente color
        indiceColor++;

        if (indiceColor >= colores.length) {
            indiceColor = 0;
        }
    });

});
$(window).on("scroll", function () {
    $(".seccion").each(function () {
        const top = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();

        if (scroll + windowHeight - 100 > top) {
            $(this).addClass("visible");
        }
    });
});
$(document).ready(function () {
    $(window).trigger("scroll");
});
$('#videoModal').on('hidden.bs.modal', function () {
    const iframe = $(this).find('iframe');
    const src = iframe.attr('src');

    iframe.attr('src', '');
    iframe.attr('src', src);
});