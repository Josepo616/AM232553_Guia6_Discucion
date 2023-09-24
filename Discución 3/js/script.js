var listaPalabras = [ 
  { palabra: "abecedario", definicion: "Conjunto de las letras de un idioma dispuestas según un orden establecido." },
  { palabra: "barco", definicion: "Embarcación de notable tamaño que sirve para navegar." },
  { palabra: "cálido", definicion: "Que tiene o proporciona calor." },
  { palabra: "dulce", definicion: "Que tiene un sabor parecido al azúcar o a las cosas azucaradas." },
  { palabra: "elefante", definicion: "Mamífero paquidermo de gran tamaño, de piel muy gruesa, orejas grandes y trompa." },
  { palabra: "fugaz", definicion: "Que desaparece o se acaba rápidamente." },
  { palabra: "gato", definicion: "Mamífero carnívoro de pequeño tamaño, domesticado como animal de compañía." },
  { palabra: "helado", definicion: "Postre frío elaborado a base de leche, azúcar y otros ingredientes." },
  { palabra: "iguana", definicion: "Reptil escamoso de cuerpo alargado, patas cortas y cola larga." },
  { palabra: "jirafa", definicion: "Mamífero rumiante de cuello largo, patas muy largas y pelaje moteado." },
  { palabra: "koala", definicion: "Mamífero marsupial de Australia de aspecto similar a un oso de peluche." },
  { palabra: "león", definicion: "Mamífero carnívoro de gran tamaño, melena en el macho y gran fuerza física." },
  { palabra: "manzana", definicion: "Fruto del manzano, generalmente de forma redondeada y piel de varios colores." },
  { palabra: "nube", definicion: "Agregado de partículas muy pequeñas de agua o hielo suspendidas en la atmósfera." },
  { palabra: "oso", definicion: "Mamífero carnívoro de gran tamaño, cubierto de pelaje y con garras poderosas." },
  { palabra: "pájaro", definicion: "Ave, especialmente la de pequeño tamaño." },
  { palabra: "queso", definicion: "Producto obtenido por la maduración de la cuajada de la leche." },
  { palabra: "ratón", definicion: "Pequeño roedor, generalmente de cola larga y orejas grandes." },
  { palabra: "silla", definicion: "Asiento con respaldo, por lo común con cuatro patas." },
  { palabra: "tigre", definicion: "Mamífero felino de gran tamaño, pelaje anaranjado y rayas negras." },
  { palabra: "uva", definicion: "Fruto de la vid, generalmente de forma redonda y usado para hacer vino." },
  { palabra: "viento", definicion: "Movimiento del aire en la atmósfera." },
  { palabra: "zapato", definicion: "Calzado que cubre el pie y parte de la pierna." },
  { palabra: "árbol", definicion: "Planta perenne de tronco leñoso y elevado, que se ramifica a cierta altura del suelo." },
  { palabra: "bellota", definicion: "Fruto del encino, de forma ovoide y con una sola semilla." },
  { palabra: "cocodrilo", definicion: "Reptil carnívoro de grandes dimensiones, con piel escamosa y mandíbulas poderosas." },
  { palabra: "delfín", definicion: "Mamífero marino de cuerpo alargado y hocico puntiagudo." },
  { palabra: "flor", definicion: "Órgano reproductor de las plantas fanerógamas." },
  { palabra: "guitarra", definicion: "Instrumento musical de cuerdas, compuesto por una caja de resonancia y cuerdas." },
  { palabra: "kiwi", definicion: "Fruta pequeña, de piel peluda y color verde oscuro." },
  { palabra: "limón", definicion: "Fruto del limonero, de forma ovalada y piel amarilla." },
  { palabra: "naranja", definicion: "Fruto del naranjo, de forma esférica y piel rugosa." },
  { palabra: "aeronave", definicion: "Máquina que puede desplazarse por el aire, especialmente aviones y helicópteros." },
  { palabra: "bicicleta", definicion: "Vehículo de transporte de dos ruedas, impulsado por el esfuerzo del ciclista sobre los pedales." },
  { palabra: "cangrejo", definicion: "Crustáceo decápodo de cuerpo plano y patas articuladas, adaptado para el hábito de andar de lado." },
  { palabra: "dinosaurio", definicion: "Reptil fósil de gran tamaño que vivió en la antigüedad." },
  { palabra: "foca", definicion: "Mamífero marino de cuerpo alargado, aletas y pelaje grueso." },
  { palabra: "hipopótamo", definicion: "Mamífero herbívoro de grandes dimensiones, piel gruesa y patas cortas." },
  { palabra: "isla", definicion: "Porción de tierra rodeada de agua por todas partes." },
  { palabra: "jaguar", definicion: "Mamífero felino de gran tamaño, pelaje amarillo y manchas oscuras en forma de roseta." },
  { palabra: "montaña", definicion: "Elevación natural del terreno de gran altura." },
  { palabra: "nuez", definicion: "Fruto del nogal, de forma redondeada y con cáscara dura." },
  { palabra: "océano", definicion: "Gran extensión de agua salada que cubre la mayor parte de la superficie terrestre." },
  { palabra: "pato", definicion: "Ave acuática de plumaje denso, pico aplanado y patas palmadas." },
  { palabra: "selva", definicion: "Tipo de vegetación muy densa, con una gran diversidad de especies, que se encuentra en regiones tropicales." },
  { palabra: "unicornio", definicion: "Criatura mítica representada como un caballo con un cuerno en la frente." },
  { palabra: "vaca", definicion: "Mamífero rumiante domesticado, criado principalmente por su carne y leche." },
  { palabra: "wombat", definicion: "Mamífero marsupial de Australia, de cuerpo robusto y patas cortas." },
  { palabra: "xilófono", definicion: "Instrumento musical de percusión compuesto por láminas de madera de diferentes tamaños." },
  { palabra: "yak", definicion: "Tipo de bovino adaptado a regiones montañosas, con pelaje largo y espeso." },
  { palabra: "zebra", definicion: "Mamífero équido de África, con cuerpo blanco y rayas negras." },
  { palabra: "abeja", definicion: "Insecto volador que colecta néctar de las flores y produce miel." },
  { palabra: "almohada", definicion: "Cojín grande y blando para apoyar la cabeza al dormir." },
  { palabra: "ángel", definicion: "Ser celestial que actúa como mensajero de Dios." },
  { palabra: "búho", definicion: "Ave rapaz de hábitos nocturnos, con ojos grandes y plumaje suave." },
  { palabra: "cárcel", definicion: "Lugar de reclusión para personas condenadas por un delito." },
  { palabra: "dado", definicion: "Pequeño cubo con puntos en sus caras, usado en juegos de azar." },
  { palabra: "estrella", definicion: "Astro luminoso en el espacio que brilla en la noche." },
  { palabra: "fresa", definicion: "Fruto rojo y pequeño con sabor dulce y aroma característico." },
  { palabra: "globo", definicion: "Objeto lleno de aire que flota en el aire, usado como decoración." },
  { palabra: "hamaca", definicion: "Tela resistente sostenida por sus extremos, usada como cama." },
  { palabra: "isla", definicion: "Porción de tierra rodeada de agua por todas partes." },
  { palabra: "jirafa", definicion: "Mamífero rumiante de cuello largo, patas muy largas y pelaje moteado." },
  { palabra: "koala", definicion: "Mamífero marsupial de Australia de aspecto similar a un oso de peluche." },
  { palabra: "limón", definicion: "Fruto del limonero, de forma ovalada y piel amarilla." },
  { palabra: "manzana", definicion: "Fruto del manzano, generalmente de forma redondeada y piel de varios colores." },
  { palabra: "nube", definicion: "Agregado de partículas muy pequeñas de agua o hielo suspendidas en la atmósfera." },
  { palabra: "oso", definicion: "Mamífero carnívoro de gran tamaño, cubierto de pelaje y con garras poderosas." },
  { palabra: "pájaro", definicion: "Ave, especialmente la de pequeño tamaño." },
  { palabra: "queso", definicion: "Producto obtenido por la maduración de la cuajada de la leche." },
  { palabra: "ratón", definicion: "Pequeño roedor, generalmente de cola larga y orejas grandes." },
  { palabra: "silla", definicion: "Asiento con respaldo, por lo común con cuatro patas." },
  { palabra: "tigre", definicion: "Mamífero felino de gran tamaño, pelaje anaranjado y rayas negras." },
  { palabra: "uva", definicion: "Fruto de la vid, generalmente de forma redonda y usado para hacer vino." },
  { palabra: "viento", definicion: "Movimiento del aire en la atmósfera." },
  { palabra: "zapato", definicion: "Calzado que cubre el pie y parte de la pierna." },
  { palabra: "árbol", definicion: "Planta perenne de tronco leñoso y elevado, que se ramifica a cierta altura del suelo." },
  { palabra: "bellota", definicion: "Fruto del encino, de forma ovoide y con una sola semilla." },
  { palabra: "cocodrilo", definicion: "Reptil carnívoro de grandes dimensiones, con piel escamosa y mandíbulas poderosas." },
  { palabra: "delfín", definicion: "Mamífero marino de cuerpo alargado y hocico puntiagudo." },
  { palabra: "flor", definicion: "Órgano reproductor de las plantas fanerógamas." },
  { palabra: "guitarra", definicion: "Instrumento musical de cuerdas, compuesto por una caja de resonancia y cuerdas." },
  { palabra: "hipopótamo", definicion: "Mamífero herbívoro de grandes dimensiones, piel gruesa y patas cortas." },
  { palabra: "unicornio", definicion: "Criatura mítica representada como un caballo con un cuerno en la frente." },
  { palabra: "vaca", definicion: "Mamífero rumiante domesticado, criado principalmente por su carne y leche." },
  { palabra: "zebra", definicion: "Mamífero équido de África, con cuerpo blanco y rayas negras." }
];
// Función iniciar desde donde se controlarán los manejadores de evento a utilizar
function iniciar(){
    // Creando el controlador de evento para el evento doble clic sobre los elementos del cuadro de lista
    var lista = document.getElementById("lista");

    // Cargando los datos en el cuadro de lista al cargar la página
    cargarLista();
    if(lista.addEventListener){
        lista.addEventListener("dblclick", function(){
            cargarTexto(this.options[this.selectedIndex].text);
        }, false);
    }
    else if(lista.attachEvent){
        lista.attachEvent("ondblclick", function(){
            cargarTexto(this.options[this.selectedIndex].text);
        });
    }

    // Capturando el campo de texto sobre el que se ingresan las palabras mediante pulsasión de tecla
    var texto = document.getElementById("filtro");
    if(texto.addEventListener){
        texto.addEventListener("keyup", buscar, false);
    }
    else if(texto.attachEvent){
        texto.attachEvent("onkeyup", buscar);
    }
     var mostrarDefinicion = document.getElementById("mostrarDefinicion");
    if(mostrarDefinicion.addEventListener){
        mostrarDefinicion.addEventListener("click", function(){
            mostrarDefinicionSeleccionada();
        }, false);
    }
    else if(mostrarDefinicion.attachEvent){
        mostrarDefinicion.attachEvent("onclick", function(){
            mostrarDefinicionSeleccionada();
        });
    }
}

function cargarLista() {
    // Cargamos el combo
    var listaElement = document.getElementById("lista");
    for(var x = 0; x < listaPalabras.length; x++) {
        var option = new Option(listaPalabras[x].palabra);
        listaElement.add(option);
    }
}

function cargarTexto(palabra){
    var definicion = document.getElementById("definicion");
    var palabraObj = listaPalabras.find(function(item) {
        return item.palabra === palabra;
    });
    if(palabraObj){
        definicion.value = palabraObj.definicion;
    }
}

function buscar() {
    limpiarLista();
    // Se obtiene el valor del texto
    var str = document.getElementById("filtro").value;
    // Crear la expresión regular
    var expr = new RegExp("^" + str, "i");
    // Recorrer la lista. Si la expresión regular es OK
    y = 0;
    for(x = 0; x < listaPalabras.length; x++) {
        if(expr.test(listaPalabras[x].palabra)) {
            var listaElement = document.getElementById("lista");
            var option = new Option(listaPalabras[x].palabra);
            listaElement.add(option);
            y++;
        }
    }
}

function limpiarLista() {
    var listaElement = document.getElementById("lista");
    listaElement.innerHTML = "";
}
function mostrarDefinicionSeleccionada() {
    var listaElement = document.getElementById("lista");
    var palabraSeleccionada = listaElement.options[listaElement.selectedIndex].text;
    cargarTexto(palabraSeleccionada);
}
// Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}