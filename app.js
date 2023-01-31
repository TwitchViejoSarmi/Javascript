// Este es un comentario de una sola linea
/**
 * 
 * 
 */
console.log('Hello World!');

//var name = 'Juan'; // Forma antigua de declarar una variable.
let name = 'Juan'; // Forma moderna de declarar una variable. String
const age = 18; // Declarar una constante. Integer.

let weight = 10.5; // Float.
let isAlive = true; // Bool.

let list = [1, 5, 6, 10]; // List.
let json = {}; // JSON.

let student = {
    name: 'Juan',
    edad: 18
};

list[0];
list.push();
list.sort();

console.log(student['name']);
console.log(student.name);
student['edad'] = 10;
student.edad = 10;

/**
 * Condicional: ==
 * Condicional estricto: ===
 * Para establecer que tiene que ser el mismo tipo de variable
 */

// Condicional
if (name === 'Juan') {
    console.log('Es un caballo');
}
else if (name === 'Eduardo') {
    console.log('Es un gei');
}
else {
    console.log('Ni idea de quién sea');
}

// Switch
let opc = 0
switch (opc) {
    case 0:
        console.log('Menú Principal');
}

// Ciclos
for (let i = 0; i < 4; i++) {
    console.log('Ciclo for');
}

let x = 0
while (x < 4) {
    console.log('Ciclo while');
    x++;
}

/**
 * list.forEach((element) => {
 *  console.log(element)
 * })
 */

//Funcion
function nombreFuncion(x, y) {
    return x + y;
}