const read = require('readline-sync');

class jugador{

    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    showData() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.weight);
    }
}

function menu(){
    let list = [];
    do {
        console.log('[1] Agregar nuevos jugadores\n');
        console.log('[2] Mostrar jugadores\n');
        console.log('[3] Salir\n');
        
        opc = parseInt(read.question('Digite la opcion a elegir: '));
        switch (opc) {
            case 1:
                console.log("Hola!\nIngrese datos de los jugadores\nIngrese cantidad de datos a ingresar: ");
                let datos = read.question('Digite el valor aqui: ');
                
                let i = 0;
                do{
                    console.log("Ingrese nombre del jugador: ");
                    let nombre = read.question('Digite el valor aqui: ');
                    console.log("Ingrese edad del jugador: ");
                    let edad = parseInt(read.question('Digite el valor aqui: '));
                    console.log("Ingrese peso del jugador: ");
                    let peso = parseFloat(read.question('Digite el valor aqui: '));
    
                    let nuevoJugador = new jugador(nombre, edad, peso);
                    list.push(nuevoJugador);
                    i++
                }while(i < datos);
    
                break;
            case 2:
                for (let x = 0; x < list.length; x++) {
                    list[x].showData();
                }
                break;
            case 3:
                console.log('Final del programa :)');
                break;
            default:
                console.log('Opcion no disponible');
                break;
        }
    }while(opc != 3);

}

menu();