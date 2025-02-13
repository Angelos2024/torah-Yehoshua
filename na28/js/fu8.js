let modoLectura = "avanzado"; // Modo por defecto

function toggleSubButtons(seccion) {
    let subButtonsCritico = document.getElementById("subButtonsCritico");
    let mapas = document.getElementById("mapas");

    mapas.style.display = "none";

    if (seccion === "critico") {
        let estaVisible = subButtonsCritico.style.display !== "none";
        subButtonsCritico.style.display = estaVisible ? "none" : "block";

        if (estaVisible) {
            document.querySelectorAll(".seccionSidebar").forEach(sec => sec.style.display = "none");
        }
    }
}

function toggleSeccion(seccion) {
    let mapas = document.getElementById("mapas");
    let subButtonsCritico = document.getElementById("subButtonsCritico");

    subButtonsCritico.style.display = "none";
    document.querySelectorAll(".seccionSidebar").forEach(sec => sec.style.display = "none");

    if (seccion === "mapas") {
        mapas.style.display = mapas.style.display === "none" ? "block" : "none";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    marcarModoLecturaActivo(); // Llamamos la función al cargar la página
});

function setModoLectura(modo) {
    modoLectura = modo;
    console.log(`Modo de lectura establecido en: ${modoLectura}`);
    
    marcarModoLecturaActivo();

    let seccionAbierta = document.querySelector(".seccionSidebar[style*='display: block']");
    
    if (seccionAbierta) {
        let idNA28 = seccionAbierta.id;
        actualizarContenidoSeccion(idNA28);
    }
}


function marcarModoLecturaActivo() {
    document.querySelectorAll("#subButtonsCritico button").forEach(btn => {
        btn.classList.remove("activo");
    });

    if (modoLectura === "avanzado") {
        document.querySelector("#subButtonsCritico button:nth-child(1)").classList.add("activo");
    } else {
        document.querySelector("#subButtonsCritico button:nth-child(2)").classList.add("activo");
    }
}


function mostrarComentarioNA28(idNA28) {
    console.log(`Buscando contenido en NA28 con ID: ${idNA28} en modo ${modoLectura}`);

    const seccion = document.getElementById(idNA28);
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");

    if (!seccion) {
        console.log(`No hay contenido crítico en NA28 para el ID: ${idNA28}`);
        return;
    }

    const seccionVisible = seccion.style.display === "block";
    const sidebarAbierto = sidebar.classList.contains("open");

    // 🔥 Si el usuario da clic en el mismo botón 📖, se cierra con animación
    if (seccionVisible && sidebarAbierto) {
        cerrarSidebar();
        return;
    }

    // 🔥 Si el sidebar está oculto, abrirlo con animación
    if (!sidebarAbierto) {
        abrirSidebar();
    }

    // 🔥 Mostrar solo la sección correspondiente
    document.querySelectorAll(".seccionSidebar").forEach(sec => sec.style.display = "none");
    actualizarContenidoSeccion(idNA28);
}

function actualizarContenidoSeccion(idNA28) {
    let seccion = document.getElementById(idNA28);
    let url = `na28/2ts1/${idNA28}.html`;

    if (modoLectura === "simple") {
        url = `na28/2ts1/${idNA28}_simple.html`;
    }

    seccion.innerHTML = `<object type="text/html" data="${url}" width="100%" height="405px"></object>`;
    seccion.style.display = "block";
}

function abrirSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
    const nextPageButton = document.getElementById("nextPage");

    // Mostrar el sidebar sin usar display: block directamente
    sidebar.style.display = "block"; 

    // Abrir el sidebar con animación
    setTimeout(() => {
        sidebar.classList.add("open");
        main.classList.add("shifted");
        document.body.classList.add("sidebar-open");
    }, 10);

    // Mover el botón de "Página Siguiente" al abrir el sidebar
    if (nextPageButton) {
        nextPageButton.style.right = "350px"; // Ajusta según necesidad
    }
}

function cerrarSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
    const nextPageButton = document.getElementById("nextPage");

    sidebar.classList.remove("open");
    main.classList.remove("shifted");
    document.body.classList.remove("sidebar-open");

    // Mover el botón de "Página Siguiente" inmediatamente antes de ocultar el sidebar
    if (nextPageButton) {
        nextPageButton.style.right = "282px"; // Ajusta según necesidad
    }

    // Sólo ocultamos el sidebar después de la animación
    setTimeout(() => {
        // Esto evita que se oculte el sidebar con display: none
        if (!sidebar.classList.contains("open")) {
            sidebar.style.display = "none"; 
        }
    }, 400); // 0.4s para la animación fluida
}





// Aquí mapeamos los libros 
const na28Map = {
    "2Tesalonicenses 1:2": "verso2",
    "2Tesalonicenses 1:4": "verso4",
    "2Tesalonicenses 1:8": "verso8",
    "2Tesalonicenses 1:9": "verso9",
    "2Tesalonicenses 1:10": "verso10",// Aquí mapeamos correctamente el verso4 con verso4
    "2Tesalonicenses 1:11": "verso11",
    "2Tesalonicenses 1:12": "verso12",
    "Hebreos 1:1": "hebreos1_1",
    "Hebreos 1:2": "hebreos1_2",
    "Hebreos 1:3": "hebreos1_3",
    "Hebreos 1:4": "hebreos1_4",
    "Hebreos 1:7": "hebreos1_7",
    "Mateo 5:3": "verso200", // Otro ejemplo de un verso que usa un ID diferente
    // Agrega más relaciones aquí según sea necesario
};
