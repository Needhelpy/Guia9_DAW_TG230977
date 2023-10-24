// Variable para empleo con XMLHttpRequest
var solicitudAsinc;

// Establecer los manejadores de evento para las imágenes con 
// las portadas de los libros
function registrarEventos() {

  // Creando el contenido y borrándolos al producirse los eventos
  // mouseover y mouseout sobre las imágenes capturadas por su id
  // Primera imagen
  const imgCss = document.getElementById("csstecprof");
  if (imgCss.addEventListener) {
    imgCss.addEventListener("mouseover", function() {
      obtenerContenido("1");
    }, false);
  } else if (imgCss.attachEvent) {
    imgCss.attachEvent("onmouseover", function() {
      obtenerContenido("1");
    });
  }

  if (imgCss.addEventListener) {
    imgCss.addEventListener("mouseout", borrarContenido, false);
  } else if (imgCss.attachEvent) {
    imgCss.attachEvent("onmouseout", borrarContenido);
  }
}
// Segunda imagen
const imgJava = document.getElementById("javaB");
if (imgJava.addEventListener) {
    imgJava.addEventListener("mouseover", function() {
        obtenerContenido("2");
    }, false);
} else if (imgJava.attachEvent) {
    imgJava.attachEvent("mouseover", function() {
        obtenerContenido("2");
    });
}

if (imgJava.addEventListener) {
    imgJava.addEventListener("mouseout", borrarContenido, false);
} else if (imgJava.attachEvent) {
    imgJava.attachEvent("onmouseout", borrarContenido);
}

// Tercera imagen
const imgNinja = document.getElementById("jsninja");
if (imgNinja.addEventListener) {
    imgNinja.addEventListener("mouseover", function() {
        obtenerContenido("3");
    }, false);
} else if (imgNinja.attachEvent) {
    imgNinja.attachEvent("onmouseover", function() {
        obtenerContenido("3");
    });
}

if(imgNinja.addEventListener) {
    imgNinja.addEventListener("mouseout", borrarContenido, false);
} else if (imgNinja.attachEvent) {
    imgNinja.attachEvent("onmouseout", borrarContenido);
}

// Cuarta imagen
const imgNode = document.getElementById("nodejs");

if (imgNode.addEventListener) {
    imgNode.addEventListener("mouseover", function() {
        obtenerContenido("4");
    }, false);
} else if (imgNode.attachEvent) {
    imgNode.attachEvent("onmouseover", function() {
        obtenerContenido("4");
    });
}

if (imgNode.addEventListener) {
    imgNode.addEventListener("mouseout", borrarContenido, false);
} else if (imgNode.attachEvent) {
    imgNode.attachEvent("onmouseout", borrarContenido);
}

// Fin de la función que registra eventos sobre las imágenes

function obtenerContenido(id){
    // Intentar crear objeto XMLHttpRequest y realizar la petición
    const URL = "https://65383a25a543859d1bb153da.mockapi.io/api/example/books/" + id;
    try {
        // Crear objeto petición multivavegador para construir el objeto XMLHttpRequest
        // Cambiar esto por una función multivavegador
        solicitudAsinc = new XMLHttpRequest();

        if (solicitudAsinc.addEventListener) {
            solicitudAsinc.addEventListener("readystatechange", cambiarEstado, false);
        }
        else if (solicitudAsinc.attachEvent) {
            solicitudAsinc.attachEvent("onreadystatechange", cambiarEstado);
        }
        
        // Preparar la solicitud
        solicitudAsinc.open("GET", URL, true);
        // Enviar la solicitud
        solicitudAsinc.send(null);
    } catch(exception) {
        alert("No se procesó la petición AJAX");
    }
}

function borrarContenido() {
    document.getElementById("descriptions").innerHTML = "";
}

function cambiarEstado() {
    if (solicitudAsinc.readyState == 4 && solicitudAsinc.status == 200) {
        // Coloca el contenido devuelto en la petición en el div descriptions
        const jsonDescription = solicitudAsinc.responseText;
        document.getElementById("descriptions").innerHTML = JSON.parse(jsonDescription).description;
    }
}

if (window.addEventListener) {
    window.addEventListener("load", registrarManejadores, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", registrarManejadores);
}
