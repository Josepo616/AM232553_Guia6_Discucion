function validar() {
    var tipoValidacion = document.getElementById('tipoValidacion').value;
    var direccion = document.getElementById('direccion').value;
    var regex;

    switch (tipoValidacion) {
        case 'ipv4':
            regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            break;
        case 'url':
            regex = /^(http:\/\/|https:\/\/|ftp:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
            break;
        case 'email':
            regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            break;
    }

    if (regex.test(direccion)) {
        alert('La dirección es válida');
    } else {
        alert('La dirección no es válida');
    }
}
