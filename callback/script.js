
function mostrarConsola(num){
    console.log(num);
}

function calcular(num1, num2, callback){
    let suma = num1 + num2;
    callback(suma);
}

calcular(10, 20, mostrarConsola);