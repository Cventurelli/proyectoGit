//Paso 1

let nombre = 'Juan Perez';
let salarioBase = 50000;
let anosDeServicio = 7;
let ventasAnuales = 2000;

//Paso 2

let factorDeAntiguedad;

if (anosDeServicio < 5) {
    factorDeAntiguedad = 0.05;
} else if (anosDeServicio >= 5 && anosDeServicio < 10) {
    factorDeAntiguedad = 0.10;
} else {
    factorDeAntiguedad = 0.15;
}


//Paso 3



if (ventasAnuales > 10000) {
    rangoDeVentas = 'Alto';
} else if (ventasAnuales >= 5000 && ventasAnuales <= 10000) {
    rangoDeVentas = 'Medio';
} else {
    rangoDeVentas = 'Bajo';
}

let bonoDeRendimiento;
switch (rangoDeVentas) {
    case 'Alto':
        bonoDeRendimiento = 500;
        break;
    case 'Medio':
        bonoDeRendimiento = 200;
        break;  
    default:
        bonoDeRendimiento = 50;
}

console.log(bonoDeRendimiento);
console.log(factorDeAntiguedad);
!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src='https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}(document,'script','weatherwidget-io-js');
