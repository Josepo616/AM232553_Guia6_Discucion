function validar() {
    var archivoInput = document.getElementById('archivo');
    var resultadoElement = document.getElementById('resultado');

    // Obtenemos el nombre del archivo
    var nombreArchivo = archivoInput.value.split('\\').pop();

    // Creamos una expresión regular para validar la extensión
    var regex = /\.(jpg|jpeg|png|gif)$/i;

    if (regex.test(nombreArchivo)) {
        resultadoElement.innerText = 'Archivo válido';
        resultadoElement.style.color = 'green';
    } else {
        resultadoElement.innerText = 'El archivo no es una imagen válido.';
        resultadoElement.style.color = 'red';
    }
}
