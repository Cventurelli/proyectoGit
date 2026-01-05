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
  