function mostrarDatos() {
    
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var ciudad = document.getElementById('ciudad').value;
    var bandaMusical = document.getElementById('musicaInput').value;
    var deporte = document.getElementById('deporteInput').value;
    var cumpleanos = document.getElementById('cumpleanos').value;

    
    var mensaje = "Nombre: " + nombre + "<br>";
    mensaje += "Apellido: " + apellido + "<br>";
    mensaje += "Ciudad: " + ciudad + "<br>";
    mensaje += "Banda Musical: " + bandaMusical + "<br>";
    mensaje += "Deporte Favorito: " + deporte + "<br>";
    mensaje += "Cumpleaños: " + cumpleanos;

    document.getElementById('datos-container').innerHTML = mensaje;
}
