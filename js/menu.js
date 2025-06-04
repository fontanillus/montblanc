function mostrarPlatos() {
    let platoSeleccionado = document.getElementById("menu").value;
    let imagen = document.getElementById("fotoPlato");
    if (platoSeleccionado) {
        imagen.src = platoSeleccionado;
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
}
