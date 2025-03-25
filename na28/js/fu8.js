

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
    "Gálatas 1:1": "galatas1_1",
    "Gálatas 1:3": "galatas1_3",
    "Gálatas 1:4": "galatas1_4",
    "Gálatas 1:6": "galatas1_6",
    "Gálatas 1:8": "galatas1_8",
    "Gálatas 1:9": "galatas1_9",
    "Gálatas 1:10": "galatas1_10",
    "Gálatas 1:11": "galatas1_11",
    "Gálatas 1:12": "galatas1_12",
    "Gálatas 1:13": "galatas1_13",
    "Gálatas 1:15": "galatas1_15",
    "Gálatas 1:16": "galatas1_16",
    "Gálatas 1:17": "galatas1_17",
    "Gálatas 1:18": "galatas1_18",
    "Gálatas 1:19": "galatas1_19",
    "Gálatas 1:21": "galatas1_21",
    "Gálatas 1:23": "galatas1_23"
};

function cargarNA28(libro, capitulo, versiculo) {
    let sidebar = document.getElementById("mySidebar");
    let claveVerso = `${libro} ${capitulo}:${versiculo}`;
    let archivoNA28 = na28Map[claveVerso];

    if (
        sidebar.classList.contains("open") &&
        sidebar.getAttribute("data-libro") === libro &&
        sidebar.getAttribute("data-capitulo") === capitulo &&
        sidebar.getAttribute("data-versiculo") === versiculo
    ) {
        sidebar.classList.remove("open");
        sidebar.style.display = "none";
        return;
    }

    sidebar.setAttribute("data-libro", libro);
    sidebar.setAttribute("data-capitulo", capitulo);
    sidebar.setAttribute("data-versiculo", versiculo);

    if (!archivoNA28) {
        sidebar.innerHTML = `<h5>NA28</h5><p>No hay aparato crítico para ${libro} ${capitulo}:${versiculo}.</p>`;
        sidebar.classList.add("open");
        return;
    }

    let url = `https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/na28/2ts1/${archivoNA28}.html`;
    console.log("📂 Cargando NA28 desde:", url);

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Archivo no encontrado");
            return response.text();
        })
        .then(data => {
            const contenidoSidebar = document.getElementById("contenidoSidebar");
contenidoSidebar.innerHTML = data;

            sidebar.classList.add("open");
            sidebar.style.display = "block";
            main.classList.add("shifted");
            document.body.classList.add("sidebar-open");
        })
.catch(error => {
    console.error("❌ Error al cargar el aparato crítico:", error);
    const contenidoSidebar = document.getElementById("contenidoSidebar");
    contenidoSidebar.innerHTML = `<h5>NA28</h5><p>No hay comentarios disponibles.</p>`;
    sidebar.classList.add("open");
    sidebar.style.display = "block";
                main.classList.add("shifted");
            document.body.classList.add("sidebar-open");
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

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(insertarBotonesNA28, 500); // Ejecuta después de cargar los versos
});

