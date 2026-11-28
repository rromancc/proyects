const boton = document.getElementById("leer-mas");
const parrafo = document.querySelector(".extra");

boton.addEventListener("click", function() {
    parrafo.classList.toggle("oculto");

    if (parrafo.classList.contains("oculto")) {
        boton.textContent = "Leer más";
    } else {
        boton.textContent = "Leer menos";
    }
});

const servicios = [
    {
        titulo: "Diseño web",
        texto: "Creación de páginas web modernas y atractivas."
    },
    {
        titulo: "Desarrollo frontend",
        texto: "Desarrollo de interfaces utilizando HTML, CSS y JavaScript."
    },
    {
        titulo: "Diseño responsive",
        texto: "Adaptación de páginas web a celulares, tablets y computadoras."
    },
    {
        titulo: "Mantenimiento web",
        texto: "Actualización y mejora de páginas web."
    },
    {
        titulo: "Mantenimiento web",
        texto: "Actualización y mejora de páginas web."
    },
    {
        titulo: "Mantenimiento web",
        texto: "Actualización y mejora de páginas web."
    }
];

function crearServicio(servicio) {
    return `
        <article class="mini-tarjeta">
            <h3>${servicio.titulo}</h3>
            <p>${servicio.texto}</p>
        </article>
    `;
}

const listaServicios = document.getElementById("servicios-lista");

if (listaServicios) {
    servicios.forEach(function(servicio) {
        listaServicios.innerHTML += crearServicio(servicio);
    });
}

document.getElementById("total-servicios").textContent = servicios.length;