//comparaciones 

//menor que 
var compara = 45>38;
console.log(compara);

//mayor que
var compara2 = 5<3;
console.log(compara2);

//igual que 
var compara3 = 5==5;
console.log(compara3);  

//diferente que
var compara4 = 5!=8;
console.log(compara4);

//menor o igual que
var compara5 = 5<=8; 
console.log(compara5);

//mayor o igual que
var compara6 = 5>=8;    
console.log(compara6);

//operadores logicos
console.log("----------------Operadores logicos----------------");

var logico = false && false;
console.log(logico);

var logico2 = true && false;
console.log(logico2);

var logico3 = true && true;
console.log(logico3);

var logico4 = false || false;
console.log(logico4);

var logico5 = true || false;
console.log(logico5);

var logico6 = true || true;
console.log(logico6);

// tabla de AND
console.log("Tabla de AND");
var logico1 = 20 == 20 && 8<3;
console.log(logico1);
var logico1 = 20 == 20 && 8<3;
console.log(logico1);
var logico1 = 20 == 20 && 8>3;
console.log(logico1);
var logico1 = 20 == 20 && 8==8;
console.log(logico1);
var logico1 = 20 != 20 && 8<3;
console.log(logico1);
var logico1 = 20 != 20 && 8>3;
console.log(logico1);
var logico1 = 20 != 20 && 8==8;
console.log(logico1);
var logico1 = 20 != 20 && 8!=8;
console.log(logico1);

// tabla de OR
console.log("Tabla de OR");
var logico2 = 20 == 10 || 8<3;
console.log(logico2);
var logico2 = 20 == 20 || 8<3;
console.log(logico2);
var logico2 = 20 == 10 || 8==8;
console.log(logico2);
var logico2 = 20 == 20 || 8==8; 
console.log(logico2);
var logico2 = 20 != 10 || 8<3;
console.log(logico2);
var logico2 = 20 != 20 || 8<3;
console.log(logico2);
var logico2 = 20 != 10 || 8==8;
console.log(logico2);
var logico2 = 20 != 20 || 8==8;
console.log(logico2);
var logico2 = 20 != 20 || 8!=8;
console.log(logico2);
var logico2 = 20 != 10 || 8!=8;
console.log(logico2);
var logico2 = 20 == 10 || 8!=8;
console.log(logico2);