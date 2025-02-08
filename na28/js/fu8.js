function toggleSubButtons(seccion) {
    let subButtonsCritico = document.getElementById("subButtonsCritico");
    let mapas = document.getElementById("mapas");

    // Ocultar contenido de mapas si se abre el aparato crítico
    mapas.style.display = "none";

    if (seccion === "critico") {
        let estaVisible = subButtonsCritico.style.display !== "none";
        subButtonsCritico.style.display = estaVisible ? "none" : "block";

        // Si ocultamos los botones, también ocultamos el contenido de los versos
        if (estaVisible) {
            document.querySelectorAll(".seccionSidebar").forEach(sec => sec.style.display = "none");
        }
    }
}

 function toggleSeccion(seccion) {
    let mapas = document.getElementById("mapas");
    let subButtonsCritico = document.getElementById("subButtonsCritico");

    // Ocultar los botones y el contenido del "Aparato Crítico NA28"
    subButtonsCritico.style.display = "none";
    document.querySelectorAll(".seccionSidebar").forEach(sec => sec.style.display = "none");

    // Alternar la visibilidad de la sección seleccionada
    if (seccion === "mapas") {
        mapas.style.display = mapas.style.display === "none" ? "block" : "none";
    }
}

function mostrarComentarioNA28(idNA28) {
    console.log(`Buscando contenido en NA28 con ID: ${idNA28}`);

    const seccion = document.getElementById(idNA28);
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");

    if (seccion) {
        // Si el sidebar ya está abierto y mostrando el mismo contenido, cerrarlo
        if (sidebar.classList.contains("open") && seccion.style.display === "block") {
            console.log(`Cerrando NA28 para: ${idNA28}`);
            sidebar.classList.remove("open");
            main.classList.remove("shifted");
            seccion.style.display = "none";
        } else {
            console.log(`Mostrando contenido NA28 para: ${idNA28}`);

            // Ocultar todas las secciones del sidebar
            document.querySelectorAll(".seccionSidebar").forEach(sec => sec.style.display = "none");

            // Mostrar la sección correcta
            seccion.style.display = "block";

            // Abrir el sidebar y empujar el contenido
            sidebar.classList.add("open");
            main.classList.add("shifted");
        }
    } else {
        console.log(`No hay contenido crítico en NA28 para el ID: ${idNA28}`);
    }
}




// Aquí mapeamos los libros 
const na28Map = {
    "2Tesalonicenses 1:2": "verso2",
        "2Tesalonicenses 1:4": "verso4",  // Aquí mapeamos correctamente el verso4 con verso4
    "Gálatas 1:2": "verso2",
    "Gálatas 1:3": "verso3",
    "Gálatas 1:5": "verso5",
    "Mateo 5:3": "verso200", // Otro ejemplo de un verso que usa un ID diferente
    // Agrega más relaciones aquí según sea necesario
};

