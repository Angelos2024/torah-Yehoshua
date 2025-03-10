// 🔹 Mapeo de versículos a archivos en NA28
const na28Map = {
    "Hebreos 1:1": "hebreos1_1",
    "Hebreos 1:2": "hebreos1_2",
    "Hebreos 1:3": "hebreos1_3",
    "2Tesalonicenses 1:2": "verso2",
    "2Tesalonicenses 1:4": "verso4",
    "2Tesalonicenses 1:8": "verso8",
    "2Tesalonicenses 1:9": "verso9",
    "2Tesalonicenses 1:10": "verso10",
    "2Tesalonicenses 1:11": "verso11",
    "2Tesalonicenses 1:12": "verso12",
};

function cargarNA28(libro, capitulo, versiculo) {
    let sidebar = document.getElementById("sidebar");
    let claveVerso = `${libro} ${capitulo}:${versiculo}`;
    let archivoNA28 = na28Map[claveVerso];

    // Si el sidebar está abierto CON el mismo libro/capítulo/versículo...
    if (
        sidebar.classList.contains("active") &&
        sidebar.getAttribute("data-libro") === libro &&
        sidebar.getAttribute("data-capitulo") === capitulo &&
        sidebar.getAttribute("data-versiculo") === versiculo
    ) {
        // ...lo cerramos PERO conservamos el contenido
        sidebar.classList.remove("active");
        return; // Importante salir aquí
    }

    // Actualizar atributos para el nuevo verso
    sidebar.setAttribute("data-libro", libro);
    sidebar.setAttribute("data-capitulo", capitulo);
    sidebar.setAttribute("data-versiculo", versiculo);

    // Si no existe el archivo, mostrar mensaje
    if (!archivoNA28) {
        sidebar.innerHTML = `<h5>NA28</h5><p>No hay aparato crítico para ${libro} ${capitulo}:${versiculo}.</p>`;
        sidebar.classList.add("active");
        return;
    }

    // Construir la URL y fetch
    let url = `https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/na28/2ts1/${archivoNA28}.html`;
    console.log("📂 Cargando NA28 desde:", url);

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Archivo no encontrado");
            return response.text();
        })
        .then(data => {
            sidebar.innerHTML = `${data}`;
            sidebar.classList.add("active"); // Mostrar el sidebar
        })
        .catch(error => {
            console.error("❌ Error al cargar el aparato crítico:", error);
            sidebar.innerHTML = `<h5>NA28</h5><p>No hay comentarios disponibles.</p>`;
            sidebar.classList.add("active");
        });
}


function generarBotonNA28(libro, capitulo, versiculo) {
    return `<button class='na28-btn' onclick="cargarNA28('${libro}', '${capitulo}', '${versiculo}')">📖</button>`;
}

function insertarBotonesNA28() {
    document.querySelectorAll("#results li").forEach(verso => {
        let libro = verso.getAttribute("data-libro");
        let capitulo = verso.getAttribute("data-capitulo");
        let versiculo = verso.getAttribute("data-versiculo");

        if (libro && capitulo && versiculo) {
            let botonNA28 = generarBotonNA28(libro, capitulo, versiculo);
            verso.innerHTML += botonNA28;
        }
    });
}

// 🔥 Asegurar que se ejecuta después de cargar los versículos
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(insertarBotonesNA28, 500); // Esperar medio segundo antes de ejecutarlo
});
