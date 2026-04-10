function mostrarMensajes() {

    alert("Se te callo la pagina manin");

    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Hola Mundo en formato parrafo, es epicardo";

    console.log("Esto es Hola Mundo en consola manin");
    console.log("Hola Mundo ");


    const contenedor = document.getElementById("contenedor");
    contenedor.textContent = "Hola Mundo mostrando en DIV";
}