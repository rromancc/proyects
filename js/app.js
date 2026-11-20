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