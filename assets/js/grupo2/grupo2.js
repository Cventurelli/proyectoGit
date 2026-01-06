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

<<<<<<< HEAD
console.log("Empleado:", nombre);
console.log("Factor de Antigüedad:", factorAntiguedad);
console.log("Categoría de Ventas:", categoriaVentas);
console.log("Bono por Rendimiento:", bonoRendimiento);
=======
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
>>>>>>> betojquery
