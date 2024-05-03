// Imprime en consola la variable hola mostrando el str

// let hola = "hola, buendia";
// console.log(hola);


// Muestra que la variable "variabl1" ya se ha declarado

// let variable1 = 123;
// let variable1 = "argetina";
// console.log(variable1); 

// let miNumero1 = 123;
// let miNumero2 = 12.3;
// let miString = "argentina";
// let miBoolean = true;
// let indefinido;
// let miObjeto1 = {};

// console.log(typeof miNumero1);
// console.log(typeof miNumero2);
// console.log(typeof miString);
// console.log(typeof miBoolean);
// console.log(typeof indefinido);
// console.log(typeof miObjeto1);


// no se puede convertir una variable str en una numero (el mensaje que salta es NaN)
// let miPalabra = "electronica";
// console.log(parseInt(miPalabra));

// Al sumar strings y numeros no se pueden ya que este los concatena por lo que
// debimos agregar la funcion parseInt(miNumero2) para forzar la suma de estos
// let miNumero1 = 123;
// let miNumero2 = "2";
// let suma = miNumero1 + parseInt(miNumero2);
// console.log(suma);

// suma de los primeros 10 núnermos naturales 
// let suma = 0;
// for(let i = 1; i <= 10; i++){
//     suma+= i;
// }

// console.log("La suma de los primeros 10 números naturales es: ", suma);

// Ejercicio 7: 
// let palabras = ["dado", "electronica", "escocia", "rosario"];
// for (let palabra of palabras) {
    // let posicion = -1; 
   
    // for (let i = 0; i < palabra.length; i++) {
    //     if (palabra[i] === 'a') {
     //        posicion = i; 
    //         break; 
    //     }
    // }

    
    // console.log(`En la palabra "${palabra}" la primera 'a' se encuentra en la posición ${posicion}`);
// }


// Ejercicio 8:
// let miPalabra = "Caminando en línea recta no puede uno llegar muy lejos";


// let longitudFrase = miPalabra.length;
// if (longitudFrase > 50) {
    // console.log("La frase tiene más de 50 caracteres.");
// } else {
  //   console.log("La frase tiene 50 caracteres o menos.");
// }

// Ejercicio 9
// let miArrayDeNumeros = new Array();
// miArrayDeNumeros[0] = 1;
// miArrayDeNumeros[1] = 15;
// miArrayDeNumeros[2] = 157;
// miArrayDeNumeros[3] = 63;
// miArrayDeNumeros[4] = 68;
// miArrayDeNumeros[5] = 1000;
// miArrayDeNumeros[6] = 44;


// for (let i = 0; i < miArrayDeNumeros.length; i++) {
    
    // if (miArrayDeNumeros[i] % 2 === 0) {
        // console.log(`${miArrayDeNumeros[i]} es un número par.`);
    // } else {
        // console.log(`${miArrayDeNumeros[i]} no es un número par.`);
    // }
// }

// Ejercicio 10

//var numero1 = 5;
//var numero2 = 8;


//if (numero1 < numero2) {
  //  console.log("numero1 no es mayor que numero2");
//}
//if (numero2 > 0) {
   // console.log("numero2 es positivo");
//}
//if (numero1 != 0) {
   // console.log("numero1 es distinto de cero");
//}
//if (numero1 + 1 < ...) {
  //  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
//}

// Ejercicio 11
// El valor de pi cambia al valor que le asignaste
//let nombre = "Francisco y Santiago"; 
//let edad = 17;
//let ciudad = "Chascomus"; 


//console.log(`Nombre: ${nombre}`);
//console.log(`Edad: ${edad} años`);
//console.log(`Ciudad: ${ciudad}`);

//const PI = 3.14159;
//console.log(`Valor de PI: ${PI}`);
//let precio = 19.99; 
//let disponible = true; 
//let frutas = ['manzana', 'banana', 'naranja']; 
//let info = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' }; 
// onsole.log(`Precio del producto: $${precio}`);
// console.log(`¿Producto disponible?: ${disponible ? 'Sí' : 'No'}`);
// console.log("Lista de frutas:");
// frutas.forEach(fruta => {
    // console.log(fruta);
// });

// Ejercicio 12

// var precio = 12;
// var disponible = (true, false);
// var frutas = ['manzana', 'banana', 'naranja']; 
// var info = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };

// Ejercicio 13
// let frutas = ['manzana', 'banana', 'naranja'];


// console.log("Elementos del array frutas:");
// for (let i = 0; i < frutas.length; i++) {
 //    console.log(frutas[i]);
// }

// function sumarNumeros(numeros) {
  //   let suma = 0;

   
 //    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
 //    }
// 
//     return suma; 
// }

// l// et numeros = [10, 20, 30, 40, 50];
// let resultadoSuma = sumarNumeros(numeros);
// console.log("Suma de los números:", resultadoSuma);

// function encontrarLargoPalabras(palabras) {
 //    let longitudes = [];
// 
 //    
//     for (let i = 0; i < palabras.length; i++) {// 
//         longitudes.push(palabras[i].length);
//     }
// 
//     return longitudes; 
// }

// let palabras = ['manzana', 'banana', 'naranja', 'pera'];
// let longitudesPalabras = encontrarLargoPalabras(palabras);
// console.log("Longitudes de las palabras:", longitudesPalabras); 


