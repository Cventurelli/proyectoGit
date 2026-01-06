function mostrarexterno() {
	alert('Más información desde un archivo externo');
} 
// getElementById para acceder a un elemento HTML por su ID
let miDivFila = document.getElementById('miDivFila');
console.log(miDivFila);
// Modificar el contenido del div
miDivFila.innerHTML = '<div class="col col-lg-2 border border-warning">Este div cambio de 3 a 1 caja</div>';

// Cambiar el estilo del párrafo con id "lorem"
let parrafoLorem = document.getElementById('lorem');
parrafoLorem.innerText = 'Este es un texto modificado desde JavaScript.';
parrafoLorem.style.color = 'blue';
parrafoLorem.style.fontWeight = 'bold';
parrafoLorem.style.fontSize = '18px';

// Función para saludar al usuario con el boton mostrar
function mostrar(){
	// Obtener el valor del input y mostrar el saludo
	const nombreInput = document.getElementById('nombre');
	// Obtener el elemento de salida
	const salida = document.getElementById('salida');
	//Obtener el valor del nombre ingresado
	const nombre = nombreInput.value;
	// Validar si el nombre no está vacío
	if(nombre.trim() === ''){
		//si esta vacío se imprime un mensaje de error
		salida.innerText = 'Por favor, ingresa un nombre.';
		return;
	}else{
		//si tiene contenido se imprime el saludo
		salida.innerText = 'Hola, ' + nombre + '!';
	}
}
let contador = 0;
function formatear(){
	const nombre = document.getElementById('nombre').value.trim();
	const historial = document.getElementById('historial');
	/*if (nombre === ''){
		return;
	}
	 */ 
	if(!nombre)return;
	//contador = contador + 1
	contador++;
  	//Agregamos HTML con formato (negritas, énfasis)
	const item = `<p class="historial-item"><strong>${contador}.</strong> Guardado: <em>${nombre}</em></p>`;
	historial.innerHTML += item;
}

//Función para limpiar el historial
function finalizar(){
	const nombre = document.getElementById('nombre').value.trim();
	const mensajeBase = nombre ? `Proceso finalizado.` : 'Proceso finalizado.';
	alert(mensajeBase + ' El historial será limpiado.');
	
	const historial = document.getElementById('historial');// Obtener el elemento del historial
	historial.innerHTML = '';// Limpiar el contenido del historial
	contador = 0; // Reiniciar el contador

}

/*Clase Número 13 Manipulación del DOM*/
//1. Selección de elementos del DOM
const mensajeElemento = document.getElementById('mensaje'); // Seleccionar el párrafo con id "mensaje"
const cambiarMensajeBtn = document.getElementById('changeTextBtn'); // Seleccionar el botón con id "changeTextBtn"

//2. Definición del Evento
cambiarMensajeBtn.addEventListener('click', function() {
	//3. Manipulación del contenido
	mensajeElemento.textContent = 'El mensaje ha sido cambiado por JavaScript!'; // Cambiar el texto del párrafo
	mensajeElemento.style.color = 'green'; // Cambiar el color del texto
	mensajeElemento.style.fontSize = '20px'; // Cambiar el tamaño de la fuente

	cambiarMensajeBtn.textContent = 'Mensaje Cambiado'; // Cambiar el texto del botón
	cambiarMensajeBtn.disabled = true; // Deshabilitar el botón después de hacer clic
});
//4. Funcionalidad con jQuery
$(document).ready(function() {
	$('#jqueryBtn').click(function() { // Evento de clic para el botón con id "jqueryBtn"
		$('#jqueryText').text('Este es el texto que ha sido cambiado por jQuery!'); // Cambiar el texto del párrafo
		$('#jqueryText').css({
			'color': 'green',
			'font-size': '22px',
			'font-weight': 'bold'
		}); // Cambiar el estilo del texto

		$(this).text('Texto Cambiado con jQuery'); // Cambiar el texto del botón
		$(this).prop('disabled', true); // Deshabilitar el botón después de hacer clic
	});
});