const imagenes = document.querySelectorAll("#imagen-lateral img")
const imagenCambio = document.querySelector("#imagen-grande img")

imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
        const nuevaFuente = imagen.getAttribute("src");
        imagenCambio.src = nuevaFuente;
    });
});