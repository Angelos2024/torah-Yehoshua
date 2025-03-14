// 🔹 Mapeo de versículos a archivos en NA28
const na28Map = {
    "Hebreos 1:1": "hebreos1_1",
    "Hebreos 1:2": "hebreos1_2",
    "Hebreos 1:3": "hebreos1_3",
    "Hebreos 1:4": "hebreos1_4",
    "Hebreos 1:7": "hebreos1_7",
    "Hebreos 1:8": "hebreos1_8",
    "Hebreos 1:9": "hebreos1_9",
    "Hebreos 1:11": "hebreos1_11",
    "Hebreos 1:12": "hebreos1_12",
    "Hebreos 1:14": "hebreos1_14",
    "Hebreos 2:1": "hebreos2_1",
    "Hebreos 2:2": "hebreos2_2",
    "Hebreos 2:4": "hebreos2_4",
    "Hebreos 2:6": "hebreos2_6",
    "Hebreos 2:7": "hebreos2_7",
    "Hebreos 2:8": "hebreos2_8",
    "Hebreos 2:9": "hebreos2_9",
    "Hebreos 2:11": "hebreos2_11",
    "Hebreos 2:14": "hebreos2_14",
    "Hebreos 2:17": "hebreos2_17",
    "Gálatas 1:1": "Galatas1_1",
        "Gálatas 1:3": "Galatas1_3",
        "Gálatas 1:4": "Galatas1_4",
        "Gálatas 1:6": "Galatas1_6",
        "Gálatas 1:8": "Galatas1_8",
        "Gálatas 1:9": "Galatas1_9",
        "Gálatas 1:10": "Galatas1_10",
        "Gálatas 1:11": "Galatas1_11",
        "Gálatas 1:12": "Galatas1_12",
        "Gálatas 1:13": "Galatas1_13",
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
