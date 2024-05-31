// Tico las declaraciones "dibujo" son como declarar seleccion pero para no marearme las diferencie
// de seleccion seleccionar seleccionadas, seleccionado, etc

const palabras = [];
const posicionesPalabras = [];
let celdasSeleccionadas = [];
let palabrasEncontradas = 0;
let estaSeleccionado = false;
let seleccionarCelda = null;

function agregarPalabra() {
    const palabra = document.getElementById("entradaPalabra").value.toLowerCase().trim();
    if (palabra && !palabras.includes(palabra)) {
        palabras.push(palabra);
        const listaPalabrasDiv = document.getElementById("listaPalabras");
        const palabraElemento = document.createElement("div");
        palabraElemento.textContent = palabra;
        listaPalabrasDiv.appendChild(palabraElemento);
    }
    document.getElementById("entradaPalabra").value = "";
}

function iniciarJuego() {
    if (palabras.length === 0) {
        alert("Pone una palabra para iniciar el juego");
        return;
    }

    const tamañoCuadricula = 16;
    const sopaDeLetras = document.getElementById("sopaDeLetras");
    sopaDeLetras.innerHTML = "";
    sopaDeLetras.style.gridTemplateColumns = `repeat(${tamañoCuadricula}, 38px)`;
    // Esto sirve para que las celdas se ajusten al tamaño de la cuadricula y al tamaño de estas ya que 
    // si agrando el tamaño de la celda se rompe toda la cuadricula y se interponen unas a las otras
    sopaDeLetras.style.gridTemplateColumns = `repeat(${tamañoCuadricula}, 38px)`;
    sopaDeLetras.style.gridTemplateRows = `repeat(${tamañoCuadricula}, 38px)`;

    const cuadricula = Array.from({ length: tamañoCuadricula }, () => Array(tamañoCuadricula).fill(''));
    palabras.forEach(palabra => colocarPalabraEnCuadricula(palabra, cuadricula, tamañoCuadricula));



    for (let i = 0; i < tamañoCuadricula; i++) {
        for (let j = 0; j < tamañoCuadricula; j++) {
            const celda = document.createElement("div");
            celda.textContent = cuadricula[i][j] || obtenerLetraAleatoria();
            celda.classList.add("celda");
            celda.setAttribute("data-fila", i);
            celda.setAttribute("data-columna", j);
            celda.onmousedown = (event) => comenzarDibujo(event, celda);
            celda.onmousemove = (event) => dibujar(event, celda);
            celda.onmouseup = finalizarDibujo;
            sopaDeLetras.appendChild(celda);
        }
    }
    document.addEventListener("mouseup", finalizarDibujo);
}

function colocarPalabraEnCuadricula(palabra, cuadricula, tamañoCuadricula) {
    const direcciones = [
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 1, y: -1 }
    ];
    let colocada = false;
    while (!colocada) {
        const direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
        const filaInicio = Math.floor(Math.random() * tamañoCuadricula);
        const columnaInicio = Math.floor(Math.random() * tamañoCuadricula);

        let cabe = true;
        let posicionTemporal = [];
        for (let k = 0; k < palabra.length; k++) {
            const fila = filaInicio + k * direccion.y;
            const columna = columnaInicio + k * direccion.x;
            if (fila < 0 || fila >= tamañoCuadricula || columna < 0 || columna >= tamañoCuadricula || (cuadricula[fila][columna] !== '' && cuadricula[fila][columna] !== palabra[k])) {
                cabe = false;
                break;
            }
            posicionTemporal.push({ fila, columna });
        }
        if (cabe) {
            posicionTemporal.forEach((pos, index) => {
                cuadricula[pos.fila][pos.columna] = palabra[index];
            });
            posicionesPalabras.push({ palabra, posiciones: posicionTemporal });
            colocada = true;
        }
    }
}
function obtenerLetraAleatoria() {
    const letras = "abcdefghijklmnopqrstuvwxyz";
    return letras[Math.floor(Math.random() * letras.length)];
}
function comenzarDibujo(event, celda) {
    estaSeleccionado = true;
    seleccionarCelda = celda;
    celdasSeleccionadas = [celda];
    celda.classList.add("seleccionada");
}
function dibujar(event, celda) {
    if (estaSeleccionado && !celdasSeleccionadas.includes(celda)) {
        const ultimaCelda = celdasSeleccionadas[celdasSeleccionadas.length - 1];
        const filaInicio = parseInt(seleccionarCelda.getAttribute("data-fila"));
        const columnaInicio = parseInt(seleccionarCelda.getAttribute("data-columna"));
        const filaActual = parseInt(celda.getAttribute("data-fila"));
        const columnaActual = parseInt(celda.getAttribute("data-columna"));
        const deltaFila = filaActual - filaInicio;
        const deltaColumna = columnaActual - columnaInicio;
        if (Math.abs(deltaFila) === Math.abs(deltaColumna) || deltaFila === 0 || deltaColumna === 0) {
            celda.classList.add("seleccionada");
            celdasSeleccionadas.push(celda);
        }
    }
}
function finalizarDibujo() {
    if (estaSeleccionado) {
        const palabraSeleccionada = celdasSeleccionadas.map(celda => celda.textContent).join('');
        const palabraInversa = celdasSeleccionadas.map(celda => celda.textContent).reverse().join('');
        if (palabras.includes(palabraSeleccionada) || palabras.includes(palabraInversa)) {
            celdasSeleccionadas.forEach(celda => {
                celda.classList.remove("seleccionada");
                celda.classList.add("encontrada");
            });
            palabrasEncontradas++;
            if (palabrasEncontradas === palabras.length) {
                alert("Encontraste todas las palabras");
            }
        } else {
            celdasSeleccionadas.forEach(celda => celda.classList.remove("seleccionada"));
        }
        celdasSeleccionadas = [];
        estaSeleccionado = false;
    }
}