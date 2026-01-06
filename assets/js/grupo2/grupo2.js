let nombre = "Emilio";
let salarioBase = 800000;       // sueldo mensual
let añosDeServicio = 7;         // años trabajados
let ventasAnuales = 9500;       // ventas del año

let factorAntiguedad;

if (añosDeServicio < 5) {
factorAntiguedad = 0.05;
} else if (añosDeServicio >= 5 && añosDeServicio <= 10) {
factorAntiguedad = 0.10;
} else {
factorAntiguedad = 0.15;
}

let categoriaVentas;

if (ventasAnuales> 10000) {
categoriaVentas = "Alto";
}   else if (ventasAnuales >= 5000) {
categoriaVentas = "Medio";
} else {
categoriaVentas = "Bajo";
}

let bonoRendimiento;

switch (categoriaVentas) {
case "Alto":
bonoRendimiento = 500;
break;
case "Medio":
bonoRendimiento = 200;
break;
default:
bonoRendimiento = 50;
break;
}

console.log("Empleado:", nombre);
console.log("Factor de Antigüedad:", factorAntiguedad);
console.log("Categoría de Ventas:", categoriaVentas);
console.log("Bono por Rendimiento:", bonoRendimiento);
