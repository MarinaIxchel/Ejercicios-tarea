
/*Crea una función que calcule el descuento que se le va a hacer a un cliente
según el valor de su compra.

Si es una compra de menos 100, se le hara un descuento del 10%, (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descueno del 20%, (100-199)
y si es una compra de más de 200 se le hará un descuento del 30%, (200 >=) 

Utiliza prompt, funciones, condicionales y operadores de conparación.
La función debe pedir el precio al cliente e imprimir el resultado del precio menos el descuento
ya sea en pantalla o en la consola.
(se guardará en un archivo llamado ejercicio funciones.js)*/

function descuentoProducto (){

    let producto= parseInt (prompt (" Introduzca el precio del producto "));

    if (producto < 100) { 
        let valorProductoDescontado = producto *0.90 
        return valorProductoDescontado;
    }else if (producto >=100 && producto <200){
        valorProductoDescontado = producto *0.80;
        return valorProductoDescontado;}
    else if (producto >= 200){
        valorProductoDescontado=producto*0.70;
        return valorProductoDescontado;
    }    

}

const descuento =descuentoProducto ();
document.write ("<h4>El precio con descuento de su producto es: " +descuento +" </h4>");


