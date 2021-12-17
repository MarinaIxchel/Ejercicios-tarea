/*
Condicionales if, else, else if
Funciones con o sin parametros 
*/

function procesadorDefrutas (Manzanas, Naranjas) {// funcion que devuelve un mensaje con los parametros que utilizamos//
let jugo = "jugo de "+ Manzanas+ "manzanas y "+ Naranjas + "naranjas";
return jugo;
}

let jugoDenaranja = procesadorDefrutas(8,0);
console.log (jugoDenaranja);
let jugoDemanzana = procesadorDefrutas(3,2);
console.log (jugoDemanzana);