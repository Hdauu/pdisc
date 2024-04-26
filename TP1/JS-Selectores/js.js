// El valor del elemento cuyo id es "nombre"

let elementoInputt = document.getElementById("nombre");
console.log(elementoInputt.id);

// La cantidad de letras (.length) del elemento cuyo id es "nombre"
let elementoInput = document.getElementById("nombre");
let valorNombre = elementoInput.value;
let cantidadLetras = valorNombre.length;
console.log("Cantidad de letras del elemento 'nombre':", cantidadLetras);


// La cantidad de elementos con clase "formulario" (.length)
let elementosFormulario = document.getElementsByClassName("formulario");
let cantidadElementosFormulario = elementosFormulario.length;
console.log("Cantidad de elementos con clase 'formulario':", cantidadElementosFormulario);


// El id de cada uno de elementos de la clase "formulario" (usar un for(let i=...))</li>
for (let i = 0; i < elementosFormulario.length; i++) {
    let elemento = elementosFormulario[i];
    let idElemento = elemento.id;
    
    console.log("ID del elemento " + (i + 1) + " de la clase 'formulario':", idElemento);
}

// Cambiar el color de fondo del elemento cuyo id es "contenido" (style.background-color = ‘red’)
let elementoContenido = document.getElementById("contenido");
elementoContenido.style.backgroundColor = 'red';
