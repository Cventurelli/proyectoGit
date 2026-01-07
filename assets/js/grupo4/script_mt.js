// //& Función para crear un email corporativo

// function crearEmailCorporativo(usuario, empresa) {
//     let email = usuario + "@" + empresa + ".com";
//     return email;
// }

// // Uso con valores directos (literales)
// let correo1 = crearEmailCorporativo("carlos.perez", "techsolutions");
// console.log("El correo generado es: " + correo1);

// // Uso con variables
// let usuarioNuevo = "ana.garcia";
// let empresaCliente = "innovacionweb";
// let correo2 = crearEmailCorporativo(usuarioNuevo, empresaCliente);
// console.log("El correo generado es: " + correo2);



// //* Función para calcular precio con IVA (ejemplo 19%)

// function calcularPrecioConImpuesto(precioSinImpuesto) {
//     let impuesto = precioSinImpuesto * 0.19;
//     let total = precioSinImpuesto + impuesto;
//     return total;
// }

// // Uso directo
// let precioFinal1 = calcularPrecioConImpuesto(1000);
// console.log("El precio a pagar es: $" + precioFinal1);

// // Uso con variables
// let precioProducto = 5000;
// let precioFinal2 = calcularPrecioConImpuesto(precioProducto);
// console.log("El precio a pagar por el producto es: $" + precioFinal2);




// //! Función de conversión de distancia
// // Función para convertir kilómetros a millas
// function convertirKmAMillas(kilometros) {
//     const factorConversion = 0.621371;
//     return kilometros * factorConversion;
// }

// // Uso directo
// let distancia1 = convertirKmAMillas(10);
// console.log("10 Kilómetros son: " + distancia1 + " millas.");

// // Uso con variables
// let distanciaViaje = 100;
// let resultadoMillas = convertirKmAMillas(distanciaViaje);
// console.log("La distancia del viaje en millas es: " + resultadoMillas);





// //!funcion para ver datos de personaje 
// // Función para mostrar ficha de personaje
// function mostrarFichaPersonaje(nombre, clase, nivel) {
//     console.log("--- FICHA DE JUGADOR ---");
//     console.log("Nombre: " + nombre);
//     console.log("Clase: " + clase);
//     console.log("Nivel actual: " + nivel);
//     console.log("------------------------");
// }

// // Uso directo
// mostrarFichaPersonaje("Aragorn", "Montaraz", 10);

// // Uso con variables
// let nombreJugador = "Gandalf";
// let claseJugador = "Mago";
// let nivelJugador = 20;

// mostrarFichaPersonaje(nombreJugador, claseJugador, nivelJugador);

// $(document).ready(function() {
//     const currenTheme = localStorage.getItem('theme');
//     if (currenTheme==='dark') {
//         $('body').addClass('dark-mode');
//     } 
// }
// );

// $(document).ready(function() {
//     $('#toggle-theme').on('click', function() {
//         $('body').toggleClass('dark-mode');
//         let theme = 'light';
//         if ($('body').hasClass('dark-mode')) {
//             theme = 'dark';
//         }
//         localStorage.setItem('theme', theme);
// });
// });

$(document).ready(function() {
    // 1. Persistencia del Tema
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-mode');
    }

    // 2. Botón de cambio de tema
    $('#toggle-theme').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('dark-mode');
        
        const isDark = $('body').hasClass('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Cambio visual opcional del texto del botón
        $(this).text(isDark ? 'Modo Claro' : 'Modo Oscuro');
    });

    // 3. Cerrar Popup
    $('#close').on('click', function() {
        $('#welcome-popup').fadeOut();
    });

    // 4. Animación de entrada para las secciones del CV
    $('.contenido section').hide().each(function(index) {
        $(this).delay(900 * index).fadeIn(1000);
    });

    // 5. Efecto Hover dinámico con jQuery
    $('.contenido section').hover(
        function() { $(this).css('border-color', '#096a97'); },
        function() { $(this).css('border-color', 'transparent'); }
    );
});


//*formulario de contacto con jquery


// Función para abrir pop up de contacto
function abrirContacto() {
    $('#modal-contacto').fadeIn(300);
}

function cerrarContacto() {
    $('#modal-contacto').fadeOut(300);
}

$(document).ready(function() {
    // Cerrar si se hace clic fuera del contenido blanco
    $(window).on('click', function(event) {
        if ($(event.target).is('#modal-contacto')) {
            cerrarContacto();
        }
    });
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
     // Simula eneevio de datos
        const datos = {
            nombre: $('#nombre').val(),
            email: $('#email').val(),
            mensaje: $('#mensaje').val()
        };

        console.log("Enviando datos:", datos);
        
        alert("¡Gracias " + datos.nombre + "! Tu mensaje ha sido enviado correctamente.");
        
        // reseteo
        this.reset();
        cerrarContacto();
    });
});