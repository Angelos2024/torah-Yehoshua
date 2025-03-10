//--------------------------------------------------------
// 1) Variables globales de la versión principal (hebreo)
//--------------------------------------------------------
window.mainBook = null;       // Almacena el libro que se está mostrando en la hebrea
window.mainChapter = null;    // Almacena el capítulo actual en la hebrea

// Cada vez que cambies de libro/capítulo en la versión hebrea, actualiza esto:
function showFullChapterHebreo(libro, capitulo) {
  window.mainBook = libro;
  window.mainChapter = capitulo;
}
//--------------------------------------------------------
// 1) Mapa de URLs para cada versión y cada libro
//--------------------------------------------------------
// La idea es que cada archivo JSON contenga un array de capítulos, 
// y cada capítulo es un array de versos (tal como mostraste en tu ejemplo).
const urlsLibros = {
  RVR1960: {
      "Mateo": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/mateo.json",
      "Marcos": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/marcos.json",
      "Lucas": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/lucas.json",
      "Juan": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/juan.json",
      "Hechos": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/hechos.json",
      "Romanos": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/romanos.json",
      "1Corintios": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_corintios.json",
      "2Corintios": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_corintios.json",
      "Gálatas": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/galatas.json",
      "Efesios": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/efesios.json",
      "Filipenses": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/filipenses.json",
      "Colosenses": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/colosenses.json", 
      "1Tesalonicenses": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_tesalonicenses.json",
      "2Tesalonicenses": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_tesalonicenses.json",
      "1Timoteo": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_timoteo.json",
      "2Timoteo": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_timoteo.json",
      "Tito": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/tito.json",  
      "Filemon": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/filemon.json",  
      "Hebreos": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/hebreos.json", 
      "Santiago": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/santiago.json",
      "1Pedro": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_pedro.json",
      "2Pedro": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_pedro.json",
      "1Juan": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_juan.json",
      "2Juan": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_juan.json",
      "3Juan": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/3_juan.json",
      "Judas": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/judas.json",
      "Apocalipsis": "https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/apocalipsis.json"

    },
 BTX4: {
      "Génesis": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/apocalipsis.json",
      "Exodo": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/exodo.json",
      "Levitico": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/levitico.json",
      "Numeros": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/numeros.json",
      "Deuteronomios": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/deuteronomios.json",
      "Josue": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/josue.json",
      "Jueces": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/jueces.json",
      "Rut": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/rut.json",
      "1Samuel": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1samuel.json",
      "2Samuel": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2samuel.json",
      "1Reyes": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1reyes.json",
      "2Reyes": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2reyes.json",
      "Abdias": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/abdias.json",
      "Joel": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/joel.json",
      "Jonas": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/jonas.json",
      "Amos": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/amos.json",
      "Miqueas": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/miqueas.json",
      "Oseas": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/oseas.json",
      "Nahum": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/nahum.json",
      "Isaias": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/isaias.json",
      "Jeremias": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/jeremias.json",
      "Lamentaciones": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/lamentaciones.json",
      "Sofonias": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/sofonias.json",
      "Habacuc": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/habacuc.json",
      "Ezequiel": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/ezequiel.json",
      "Daniel": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/daniel.json",
      "Ester": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/ester.json",
      "1Cronicas": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1cronicas.json",
      "2Cronicas": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2cronicas.json",
      "Esdras": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/esdras.json",
      "Nehemias": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/nehemias.json",
      "Hageo": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/hageo.json",
      "Zacarias": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/zacarias.json",
      "Malaquias": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/malaquias.json",
      "Job": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/job.json",
      "Salmos": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/salmos.json",
      "Proverbios": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/proverbios.json",
      "Eclesiastes": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/eclesiastes.json",
      "Cantares": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/cantares.json",
      "Juan": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/juan.json",
      "Mateo": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/mateo.json",
      "Marcos": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/marcos.json",
      "Lucas": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/lucas.json",
      "Hechos": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/hechos.json",
      "Jacobo": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/jacobo.json",
      "1Pedro": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1pedro.json",
      "2Pedro": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2pedro.json",
      "Judas": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/judas.json",
      "1Juan": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1juan.json",
      "2Juan": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2juan.json",
      "3Juan": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/3juan.json",
      "Galatas": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/galatas.json",
      "1Tesalonicenses": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1tesalonicenses.json",
      "2Tesalonicenses": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2tesalonicenses.json",
      "1Corintios": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1corintios.json",
      "2Corintios": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2corintios.json",
      "Romanos": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/romanos.json",
      "Efesios": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/efesios.json",
      "Filipenses": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/filipenses.json",
      "Colosenses": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/colosenses.json",
      "Hebreos": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/hebreos.json",
      "Filemon": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/filemon.json",
      "1Timoteo": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1timoteo.json",
      "2Timoteo": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2timoteo.json",
      "Tito": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/tito.json",
      "Apocalipsis": "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/apocalipsis.json"
          }
};

//--------------------------------------------------------
// 2) Caché para no recargar el mismo JSON varias veces
//--------------------------------------------------------
let cacheLibros = {
  RVR1960: {},
  BTX4: {}
};

//--------------------------------------------------------
// 4) Referencias a elementos del DOM
//--------------------------------------------------------
const versionSelect = document.getElementById("versionSelect");
const libroSelect = document.getElementById("libroSelect");
const capituloSelect = document.getElementById("capituloSelect");
const btnCargar = document.getElementById("btnCargar");
const btnSync = document.getElementById("btnSync");
const contenidoBiblia = document.getElementById("contenidoBiblia");

//--------------------------------------------------------
// 5) Función para llenar el dropdown de libros
//--------------------------------------------------------
function fillBooksForVersion(version) {
  libroSelect.innerHTML = "";
  capituloSelect.innerHTML = `<option value="">-- Elige libro primero --</option>`;

  Object.keys(urlsLibros[version]).forEach(libro => {
    let opt = document.createElement("option");
    opt.value = libro;
    opt.textContent = libro;
    libroSelect.appendChild(opt);
  });

  libroSelect.insertAdjacentHTML("afterbegin", `<option value="" disabled selected>-- Elige libro --</option>`);
}

//--------------------------------------------------------
// 6) Función para llenar el dropdown de capítulos
//--------------------------------------------------------
async function fillChaptersForBook(version, libro) {
    if (!urlsLibros[version] || !urlsLibros[version][libro]) {
        console.error(`❌ El libro "${libro}" no está disponible en la versión ${version}`);
        alert(`El libro "${libro}" no está disponible en la versión ${version}.`);
        return false;
    }

    if (!cacheLibros[version][libro]) {
        try {
            const urlJson = urlsLibros[version][libro];
            console.log(`📥 Cargando JSON desde: ${urlJson}`);

            const resp = await fetch(urlJson);
            if (!resp.ok) throw new Error(`❌ Error al cargar ${libro}: ${resp.status}`);

            cacheLibros[version][libro] = await resp.json();
        } catch (error) {
            console.error("🚨 Error al obtener los capítulos:", error);
            alert(`No se pudo cargar el libro "${libro}" en la versión ${version}.`);
            return false;
        }
    }

    capituloSelect.innerHTML = "";
    const totalCaps = cacheLibros[version][libro].length;

    for (let i = 1; i <= totalCaps; i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.textContent = i;
        capituloSelect.appendChild(opt);
    }

    return true;
}

//--------------------------------------------------------
// 7) Eventos para cambiar la versión y el libro
//--------------------------------------------------------
versionSelect.addEventListener("change", () => fillBooksForVersion(versionSelect.value));
libroSelect.addEventListener("change", async () => {
  await fillChaptersForBook(versionSelect.value, libroSelect.value);
});

//--------------------------------------------------------
// 8) Botón "Buscar" para cargar el capítulo
//--------------------------------------------------------
btnCargar.addEventListener("click", () => {
  const version = versionSelect.value;
  const libro = libroSelect.value;
  const capitulo = parseInt(capituloSelect.value, 10);

  if (!version || !libro || !capitulo) {
    contenidoBiblia.innerHTML = `<p style="color:red;">Selecciona versión, libro y capítulo.</p>`;
    return;
  }

  const versos = cacheLibros[version][libro][capitulo - 1];
  let html = `<h5>${libro} ${capitulo} - ${version}</h5><ul>`;
  versos.forEach((texto, idx) => html += `<li><strong>${idx + 1}.</strong> ${texto}</li>`);
  html += "</ul>";

  contenidoBiblia.innerHTML = html;
});

//--------------------------------------------------------
// 9) Botón "Sincronizar" para alinear con la versión hebrea
//--------------------------------------------------------
document.getElementById("btnSync").addEventListener("click", async () => {
    if (!currentBook || !currentChapter) {
        alert("No hay un libro/capítulo activo en la versión principal.");
        return;
    }

    const versionParalela = document.getElementById("versionSelect").value;

    // 🔹 Convertir el nombre del libro si es BTX4
    let libroParalelo = currentBook;

    if (versionParalela === "BTX4") {
        const libroSinTildes = currentBook
            .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Quitar tildes
        const libroEncontrado = Object.keys(urlsLibros["BTX4"]).find(key =>
            key.toLowerCase() === libroSinTildes.toLowerCase()
        );

        if (libroEncontrado) {
            libroParalelo = libroEncontrado; // Usar el nombre correcto de BTX4
        } else {
            alert(`No se encontró el libro "${currentBook}" en la versión BTX4.`);
            return;
        }
    }

    fillBooksForVersion(versionParalela);

    setTimeout(async () => {
        document.getElementById("libroSelect").value = libroParalelo;
        const success = await fillChaptersForBook(versionParalela, libroParalelo);

        if (success) {
            document.getElementById("capituloSelect").value = currentChapter;
            document.getElementById("btnCargar").click();
        } else {
            alert(`No se pudo sincronizar ${currentBook} en la versión ${versionParalela}.`);
        }
    }, 300);
});



document.getElementById("toggleSearchOptions").addEventListener("click", function () {
    const searchContainer = document.getElementById("searchOptionsContainer");

    // Alternar la visibilidad del contenedor de búsqueda
    searchContainer.classList.toggle("hidden");

    // Cambiar el ícono dinámicamente
    this.innerHTML = searchContainer.classList.contains("hidden")
        ? `<i class="fas fa-chevron-down"></i>`  // Si está oculto, mostrar "bajar"
        : `<i class="fas fa-chevron-up"></i>`;   // Si está visible, mostrar "subir"
});
