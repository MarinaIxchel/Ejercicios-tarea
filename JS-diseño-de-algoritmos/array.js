/*Coleccion de elementos
tienen metodos o funciones que nos permiten ordenar o manipular los datos almacenados
*/
//way 1
const arreglo1 = [5, "Gosh, D:", true [1,2,3,9,4]]; /*const para no perder datos, 
js admite diferentes tipos de datosen el*/

console.log ( 'arreglo')
const arreglo2 = Array.of (1,2, "think you keep up with me");
console.log (arreglo2);

//oldaway3
const arreglo3 = new Array (1,2,"knock about");

const frutas = ["manzanas", "naranjas", "uvas", "sandias",     [1,2,3,4,5,   ["a","b","c"]   ]   ]    ;
//                  0           1         2          3                    4
//notacion de corchetes 
console.log(frutas[2]);
console.log(frutas[4][4]);     //en el segundo array cuenta de 0-4
console.log(frutas[4][5][0]);

//metodos 
//lenght
const letras = ['a', 'b', 'c', 'd'];
console.log(letras.lenght)//cantidad de elementos que estan guardados dentro del arreglo

//push añade al ultimo un elemento dentro del arreglo
letras.push ('e');
console.log (letras);

//pop elimina el ultimo elemento dentro de nuestro arreglo
letras.pop ();
console.log(letras);
//unshift+shift F1F07
//unshift agrega al principio
letras.unshift('1');
console.log (letras);

//shift elimina el primer elemento
letras.shift();
console.log(letras);
