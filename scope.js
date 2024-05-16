// Scope global (No es recomendable)

var nombre = "Miguel";
console.log(nombre);

decirSaludo();
console.log(nombre); // El nombre cambio porque se altero dentro de la funcion

function decirSaludo(){
    nombre = "Jose";
    console.log("Hola " + nombre);
}


// Scope local
function decirAdios(){
    var nombrePersona = "Cindy"; // La variable tambien se podria llamar "nombre" porque no estan en un mismo scope
    console.log("Adios " + nombrePersona);
}

decirAdios();
console.log(nombrePersona); // Marca error porque la variable es local
