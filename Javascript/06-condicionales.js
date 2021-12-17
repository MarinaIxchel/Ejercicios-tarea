/*
Condicionales se utilizan para tomar decisiones de nuestro
progama
*/

const edad = parseInt (prompt( "Ingresa tu edad por favor"))

if (edad >= 18 &&  edad < 30) {
    document.write ("Eres joven, disfruta el momento UwUr");
} else if(edad >= 30 && edad < 60) {
    document.write("Eres adulto, no olvides darte un tiempo para respirar UwUr")
}else if (edad >= 60) {
    document.write("Eres adulto mayor, no olvides lo que es ser joven, juega UwUr");
} else {document.write ("Eres un niño, disfruta tu niñez :3")}