//IF

let clave = prompt("Ingresa una clase secreta");

if(clave == "12345"){
    console.log("Bienvenido al sistema");
} 
console.log("la clave es incorrecta");

console.log("++++++++Ciclo+++++++")

let num = parseInt(prompt("Ingresa un numero del 1 al 10"));

if(num < 10){
    console.log("FUera del rango");
} else {
    console.log("Dentro del rango");
}
console.log("Fin del programa");

console.log("}}}}}}}}} Conexion a internt {{{{{{{{{{{")
let port = 3008;
if(port != 3008){
    console.log("No se puede conectar a internet");
} else {
    console.log("Conectado a internet");
}

console.log("Fin del programa");

console.log("&&&&&&&&&& Comparacion de numeros &&&&&&&&&&&&")

let numero1 = parseInt(prompt("Ingresa un numero"));
let numero2 = parseInt(prompt("Ingresa otro numero"));  
let numero3 = parseInt(prompt("Ingresa otro numero mas"));

//indica si es mayor que, menor que o igual entre los 3 numeros o 2 de ellos
if(numero1 > numero2 && numero1 > numero3){
    console.log("El numero 1 es el mayor");
}   
if(numero2 > numero1 && numero2 > numero3){
    console.log("El numero 2 es el mayor");
}
if(numero3 > numero1 && numero3 > numero2){
    console.log("El numero 3 es el mayor");
}
if(numero1 == numero2 && numero1 == numero3){
    console.log("Los 3 numeros son iguales");
}
if(numero1 == numero2 && numero1 != numero3){
    console.log("El numero 1 y 2 son iguales");
}
if(numero1 == numero3 && numero1 != numero2){
    console.log("El numero 1 y 3 son iguales");
}
if(numero2 == numero3 && numero2 != numero1){
    console.log("El numero 2 y 3 son iguales");
}

console.log("Fin del programa");    