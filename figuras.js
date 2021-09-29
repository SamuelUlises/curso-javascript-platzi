
//Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd;

//Código del triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// Triángulo isosceles

function alturaTriangulo(lado1, lado2, base){
    if(lado1===lado2 && lado1 != base){
        const ladoAlCuadrado = (lado1 * lado2);
        const baseAlCuadrado = Math.pow(base,2);
        const altura = Math.sqrt(baseAlCuadrado - ladoAlCuadrado)
        return(altura);
    }
    else{
        return("No es un triángulo isosceles")
    }
}

console.log(alturaTriangulo(2, 2, 7));

console.groupEnd();

//Código del círculo

console.group("Círculos");

//Diámetro

function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}


console.groupEnd();


// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputLado1Triangulo");
    const valueLado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("InputLado2Triangulo");
    const valueLado2 = Number(inputLado2.value);
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase1 = document.getElementById("InputBase1Triangulo");
    const valueBase1 = inputBase1.value;
    const inputAltura = document.getElementById("InputAlturaTriangulo");
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase1, valueAltura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}