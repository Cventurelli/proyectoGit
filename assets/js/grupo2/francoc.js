function mostrarprompt() {
    let numero1 = Number(prompt("Ingresa el primer número:"));
    let numero2 = Number(prompt("Ingresa el segundo número"));

    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2; 

    alert('La suma es: ' + suma);
    alert('La resta es: ' + resta);
    alert('La multiplicación es: ' +multiplicacion);
    alert('La división es: ' + division);
  }

  $(document).ready(function() {
    $('#jqueryBtn').click(function() {
        $('#jqueryText').text('Texto modifcado por JQuery');
        $('#jqueryText').css({
            'color': 'brown',
            'font-weight': 'bold'
        });
        $(this).text('El boton se ha desactivado');
        $(this).prop('disable', true);
    });
});
/*Manejo del DOM, configurando atributos usando selector de id*/
document.querySelectorAll('#urlExt').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
})
/*Modificación de evento "click" con selector de id, problema=funcionó como evento unico y no se replico en otras etiquetas con el mismo id*/
$(document).ready(function() {
    $('#lnkExt').click(function(event) {
        event.preventDefault();
        window.open(this.href, '_blank');
    });
});
