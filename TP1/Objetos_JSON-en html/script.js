let data = [];

function listarDispositivos() {
    const tbody = document.getElementById('dispositivos');
    tbody.innerHTML = '';

    if (data.length > 0) {
        data.forEach((registro) => {
// Tuve que cambiar esta parte ya que no se guardaban mas de 3 dispositivos
            if (registro.objetos && Array.isArray(registro.objetos)) {
                registro.objetos.forEach((objeto) => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${objeto.tipo}</td>
                        <td>${objeto.codigo}</td>
                        <td>Retirado</td>
                        <td>${registro.profesor.nombre} ${registro.profesor.apellido}</td>
                        <td>${registro.materia.nombre}</td>
                        <td>${registro.aula}</td>
                    `;
                    tbody.appendChild(tr);
                });
            }
        });
    } else {
        console.log('No hay datos para mostrar');
    }
}

document.getElementById('formDispositivo').addEventListener('submit', function(event) {
    event.preventDefault();
    const tipo = document.getElementById('tipo').value;
    const codigo = document.getElementById('codigo').value;
    const profesor = document.getElementById('profesor').value;
    const materia = document.getElementById('materia').value;
    const aula = document.getElementById('aula').value;

    const nuevoDispositivo = {
        id: Math.random(),
        tipo: tipo,
        codigo: parseInt(codigo),
        estado: "Disponible",
        profesor: profesor,
        materia: materia,
        aula: aula
    };

    data.push({
        objetos: [nuevoDispositivo],
        profesor: { nombre: profesor.split(' ')[0], apellido: profesor.split(' ')[1] },
        materia: { nombre: materia },
        aula: aula
    });


    listarDispositivos();

    document.getElementById('formDispositivo').reset();
});

document.getElementById('formProfesor').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreProfesor').value;
    const apellido = document.getElementById('apellidoProfesor').value;
    const dni = document.getElementById('dni').value;

    const nuevoProfesor = {
        nombre: nombre,
        apellido: apellido,
        dni: dni
    };

    data.push({ profesor: nuevoProfesor });

    console.log("Nuevo Profesor guardado", nuevoProfesor);
    alert('Profesor guardado');
});

document.getElementById('formMateria').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreMateria').value;
    const año = document.getElementById('año').value;
    const profesor = document.getElementById('profesor').value;

    const nuevaMateria = {
        nombre: nombre,
        año: año,
        profesor: profesor
    };

    data.push({ materia: nuevaMateria });


    console.log("Nueva materia guardada", nuevaMateria);
    alert('Materia guardada');
});
