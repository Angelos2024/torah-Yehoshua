

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
    "Hebreos 3:2": "hebreos3_2",
    "Hebreos 3:3": "hebreos3_3",
    "Hebreos 3:4": "hebreos3_4",
    "Hebreos 3:6": "hebreos3_6",
    "Hebreos 3:9": "hebreos3_9",
    "Hebreos 3:10": "hebreos3_10",
    "Hebreos 3:13": "hebreos3_13",
   const hebreosReferencias = {
  "Hebreos 3:14": "hebreos3_14",
  "Hebreos 3:16": "hebreos3_16",
  "Hebreos 3:17": "hebreos3_17",
  "Hebreos 3:18": "hebreos3_18",
  "Hebreos 4:1": "hebreos4_1",
  "Hebreos 4:2": "hebreos4_2",
  "Hebreos 4:3": "hebreos4_3",
  "Hebreos 4:4": "hebreos4_4",
  "Hebreos 4:5": "hebreos4_5",
  "Hebreos 4:6": "hebreos4_6",
  "Hebreos 4:7": "hebreos4_7",
  "Hebreos 4:8": "hebreos4_8",
  "Hebreos 4:11": "hebreos4_11",
  "Hebreos 4:12": "hebreos4_12",
  "Hebreos 4:16": "hebreos4_16",
  "Hebreos 5:1": "hebreos5_1",
  "Hebreos 5:3": "hebreos5_3",
  "Hebreos 5:4": "hebreos5_4",
  "Hebreos 5:6": "hebreos5_6",
  "Hebreos 5:11": "hebreos5_11",
  "Hebreos 5:12": "hebreos5_12",
  "Hebreos 5:13": "hebreos5_13",
  "Hebreos 6:2": "hebreos6_2",
  "Hebreos 6:3": "hebreos6_3",
  "Hebreos 6:9": "hebreos6_9",
  "Hebreos 6:10": "hebreos6_10",
  "Hebreos 6:11": "hebreos6_11",
  "Hebreos 6:14": "hebreos6_14",
  "Hebreos 6:16": "hebreos6_16",
  "Hebreos 6:17": "hebreos6_17",
  "Hebreos 6:18": "hebreos6_18",
  "Hebreos 6:19": "hebreos6_19",
  "Hebreos 7:1": "hebreos7_1",
  "Hebreos 7:2": "hebreos7_2",
  "Hebreos 7:4": "hebreos7_4",
  "Hebreos 7:6": "hebreos7_6",
  "Hebreos 7:9": "hebreos7_9",
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
    "Gálatas 1:23": "galatas1_23",
    "Gálatas 2:1": "galatas2_1",
    "Gálatas 2:4": "galatas2_4",
    "Gálatas 2:5": "galatas2_5",
    "Gálatas 2:6": "galatas2_6",
    "Gálatas 2:9": "galatas2_9",
    "Gálatas 2:11": "galatas2_11",
    "Gálatas 2:12": "galatas2_12",
    "Gálatas 2:13": "galatas2_13",
    "Gálatas 2:14": "galatas2_14",
    "Gálatas 2:16": "galatas2_16",
    "Gálatas 2:17": "galatas2_17",
    "Gálatas 2:20": "galatas2_20",
    "Gálatas 3:1": "galatas3_1",
    "Gálatas 3:7": "galatas3_7",
    "Gálatas 3:10": "galatas3_10",
    "Gálatas 3:12": "galatas3_12",
    "Gálatas 3:14": "galatas3_14",
    "Gálatas 3:16": "galatas3_16",
    "Gálatas 3:17": "galatas3_17",
    "Gálatas 3:18": "galatas3_18",
    "Gálatas 3:19": "galatas3_19",
    "Gálatas 3:21": "galatas3_21",
   "Gálatas 3:23": "galatas3_23",
    "Gálatas 3:24": "galatas3_24",
    "Gálatas 3:26": "galatas3_26",
    "Gálatas 3:28": "galatas3_28",
    "Gálatas 4:3": "galatas4_3",
    "Gálatas 4:6": "galatas4_6",
    "Gálatas 4:7": "galatas4_7",
    "Gálatas 4:8": "galatas4_8",
    "Gálatas 4:9": "galatas4_9",
    "Gálatas 4:10": "galatas4_10",
    "Gálatas 4:12": "galatas4_12",
    "Gálatas 4:11": "galatas4_11",
 "Gálatas 4:14": "galatas4_14",
 "Gálatas 4:15": "galatas4_15",
 "Gálatas 4:17": "galatas4_17",
 "Gálatas 4:18": "galatas4_18",
 "Gálatas 4:19": "galatas4_19",
 "Gálatas 4:21": "galatas4_21",
 "Gálatas 4:23": "galatas4_23",
 "Gálatas 4:25": "galatas4_25",
 "Gálatas 4:26": "galatas4_26",
 "Gálatas 4:28": "galatas4_28",
 "Gálatas 4:30": "galatas4_30",
 "Gálatas 5:1": "galatas5_1",
 "Gálatas 5:3": "galatas5_3",
 "Gálatas 5:6": "galatas5_6",
 "Gálatas 5:7": "galatas5_7",
 "Gálatas 5:8": "galatas5_8",
 "Gálatas 5:9": "galatas5_9",
 "Gálatas 5:10": "galatas5_10",
 "Gálatas 5:11": "galatas5_11",
  "Gálatas 5:12": "galatas5_12",
  "Gálatas 5:13": "galatas5_13",
  "Gálatas 5:14": "galatas5_14",
  "Gálatas 5:17": "galatas5_17",
  "Gálatas 5:19": "galatas5_19",
  "Gálatas 5:20": "galatas5_20",
  "Gálatas 5:21": "galatas5_21",
  "Gálatas 5:23": "galatas5_23",
  "Gálatas 5:24": "galatas5_24",
  "Gálatas 5:25": "galatas5_25",
  "Gálatas 5:26": "galatas5_26",
  "Gálatas 6:1":  "galatas6_1",
  "Gálatas 6:2":  "galatas6_2",
  "Gálatas 6:4":  "galatas6_4",
  "Gálatas 6:7":  "galatas6_7",
  "Gálatas 6:9":  "galatas6_9",
  "Gálatas 6:10": "galatas6_10",
  "Gálatas 6:11": "galatas6_11",
  "Gálatas 6:12": "galatas6_12",
  "Gálatas 6:13": "galatas6_13",
  "Gálatas 6:15": "galatas6_15",
  "Gálatas 6:16": "galatas6_16",
  "Gálatas 6:17": "galatas6_17",
  "Gálatas 6:18": "galatas6_18"    
};

function normalizarNombreLibro(libro) {
  return libro
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/ /g, "")
    .toLowerCase();
}

function cargarNA28(libro, capitulo, versiculo) {
  const sidebar = document.getElementById("sidebar") || document.getElementById("mySidebar");
  const claveVerso = `${libro} ${capitulo}:${versiculo}`;
  const archivoNA28 = na28Map[claveVerso];

  if (
    sidebar.classList.contains("open") &&
    sidebar.getAttribute("data-libro") === libro &&
    sidebar.getAttribute("data-capitulo") === capitulo &&
    sidebar.getAttribute("data-versiculo") === versiculo
  ) {
    sidebar.classList.remove("open", "active");
    sidebar.style.display = "none";
    document.body.classList.remove("sidebar-open");
    if (typeof main !== "undefined") main.classList.remove("shifted");
    return;
  }

  sidebar.setAttribute("data-libro", libro);
  sidebar.setAttribute("data-capitulo", capitulo);
  sidebar.setAttribute("data-versiculo", versiculo);

  if (!archivoNA28) {
    sidebar.innerHTML = `<h5>NA28</h5><p>No hay aparato crítico para ${libro} ${capitulo}:${versiculo}.</p>`;
    sidebar.classList.add("open", "active");
    sidebar.style.display = "block";
    return;
  }

  const carpetaLibro = normalizarNombreLibro(libro);
  const url = `https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/na28/${carpetaLibro}/${archivoNA28}.html`;
  console.log("📂 Cargando NA28 desde:", url);

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Archivo no encontrado");
      return response.text();
    })
    .then((data) => {
      const contenidoSidebar = document.getElementById("contenidoSidebar") || sidebar;
      contenidoSidebar.innerHTML = data;
      sidebar.classList.add("open", "active");
      sidebar.style.display = "block";
      document.body.classList.add("sidebar-open");
      if (typeof main !== "undefined") main.classList.add("shifted");
    })
    .catch((error) => {
      console.error("❌ Error al cargar el aparato crítico:", error);
      const contenidoSidebar = document.getElementById("contenidoSidebar") || sidebar;
      contenidoSidebar.innerHTML = `<h5>NA28</h5><p>No hay comentarios disponibles.</p>`;
      sidebar.classList.add("open", "active");
      sidebar.style.display = "block";
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

