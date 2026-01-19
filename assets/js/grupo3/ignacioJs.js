$(document).ready(function() {
    
    $('#boton-tema').on('click', function() {
        $('body').toggleClass('tema-claro');
        
        if ($('body').hasClass('tema-claro')) {
            $(this).text('MODO OSCURO');
            $(this).css({'border-color': '#1a1f35', 'color': '#1a1f35'});
        } else {
            $(this).text('MODO CLARO');
            $(this).css({'border-color': '#00f2ff', 'color': '#00f2ff'});
        }
    });

    $('#correo').on('keyup', function() {
        const email = $(this).val();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email.length > 0) {
            if (!regex.test(email)) {
                $('#validacionCorreo').text('Email no válido').css('color', '#ff007a');
            } else {
                $('#validacionCorreo').text('Formato correcto').css('color', '#00f2ff');
            }
        } else {
            $('#validacionCorreo').text('');
        }
    });

    $('.nav-link').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = this.hash;
            $('html, body').animate({
                scrollTop: $(target).offset().top - 80
            }, 800);
        }
    });
});