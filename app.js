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
    edad: 18,
    getName: function () { // Forma antigua de crear clases.
        return student.name
    }
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
        console.log('Menu Principal');
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

// Otra forma de declarar funciones
const suma = (x, y) => {
    return x + y
}

function miFuncion2(x) {
    // ...
    console.log(x);
}

//Función de retorno
function miFuncion1(callback) {
    //...
    callback(10);
}

miFuncion1(miFuncion2); //Gracias a esto, se puede acceder a otra función y asignarle el parámetro a la misma directamente.

// Construcción de clases
class Animal {
    //Incialización de atributos.
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }

    //Métodos

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

//Herencia de clases
class Perro extends Animal {
    constructor(name, age) {
        super(name, age)
    }
}

let animal = new Animal('Tu mama', 100)