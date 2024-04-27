
                // ACLARACION
        //SE IMPRIMEN LOS OBJETOS REPETIDOS EN CONSOLA PORQUE
                //EN EL MISMO ARCHIVO HAGO TODOS LOS 
                    //EJERCICIOS

// Declarar variable con un objeto JSON e imprimirla en consola
let persona1 = {"nombre": "Pepe", "apellido": "Gonzalez"};
console.log(persona1);
// Mostrar nombre y apellido
console.log(persona1.nombre);
console.log(persona1.apellido);
// Ejercicio 3
let persona2 = {"nombre":"Maria", "apellido":"Gimenez"};
let personas = [persona1, persona2];
           personas.forEach(personaActual => {
               console.log(personaActual);
           });
// Ejercicio 4 (persona1 y 2 estan declaradas en los anteriores ejercicios)
let persona3 = {};
persona3.nombre = "Martin";
persona3.apellido = "Capusoto";
persona3.edad = 18;
personas.push(persona3);

personas.forEach(personaActual => {
    console.log(personaActual);
});
// Ejercicio 5
// Crear un nuevo objeto
let producto = {
    nombre: "Celular",
    precio: 599.99,
    especificaciones: {
        marca: "Samsung",
        modelo: "Galaxy S20",
        color: "Negro"
    },
    caracteristicas: ["Pantalla AMOLED", "Cámara de 64MP", "Procesador Snapdragon"],
    disponible: true,
    garantia: null
};
console.log(producto);
// Ejercicio 6
//transformando de json a string y de string a json
const myObj = {"nombre": "Juancito", "edad": 31, "ciudad": "Chascomus"};
const myJSON = JSON.stringify(myObj);
console.log(myJSON);

const text = '{"nombre":"Marianela","edad":"14"}';
let obj = JSON.parse(text);
console.log(obj);
// Ejercicio 7 LocalStorage
localStorage.setItem("testJSON", myJSON);
           let text1 = localStorage.getItem("testJSON");
           console.log(text1); // No se si es así
// Ejercicio 7
let miMascota = {"nombre":"Tronco", "raza":"rottweiler", "edad":13};
           let descripcion = `El nombre de mi mascota es: ${miMascota.nombre} y tiene ${miMascota.edad} años`;
           console.log(descripcion);
