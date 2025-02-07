

  // Definimos los libros disponibles para la versión RVR1960
  const versionesBiblia = {
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
    Americas: {},
    Jubileos: {}
  };

  let currentVersion = "RVR1960"; // Versión predeterminada
  let dataCache = {}; // Caché de datos cargados


 

  function closesidebar2() {
    const sidebar2 = document.getElementById("sidebar2");
    const main = document.getElementById("main");

    sidebar2.classList.remove("open");
    main.classList.remove("shifted-left");
  }
document.addEventListener("DOMContentLoaded", () => {
  cargarLibros(versionesBiblia[currentVersion]);
});


async function sincronizarVersion() {
    // Verificar si hay un libro y capítulo cargado en la versión hebrea
    if (!currentBook || !currentChapter) {
        alert("Navega a un capítulo en la versión hebrea antes de sincronizar.");
        return;
    }

    console.log(`Sincronizando desde la Biblia hebrea: ${currentBook} ${currentChapter}`);

    // Obtener selectores de la Biblia paralela
    let bookSelector = document.getElementById("bookSelector");
    let chapterSelector = document.getElementById("chapterSelector");

    // **1. Si el libro en la Biblia paralela no coincide, actualizarlo**
    if (bookSelector.value.trim() !== currentBook.trim()) {

        console.log(`Cambiando libro en Biblia paralela de ${bookSelector.value} a ${currentBook}`);
        bookSelector.value = currentBook;
        bookSelector.dispatchEvent(new Event("change")); // Simular cambio de libro
        await new Promise(resolve => setTimeout(resolve, 500)); // Esperar carga de capítulos
    }

    // **2. Si el capítulo en la Biblia paralela no coincide, actualizarlo**
    if (chapterSelector.value !== currentChapter) {
        console.log(`Cambiando capítulo en Biblia paralela de ${chapterSelector.value} a ${currentChapter}`);
        chapterSelector.value = currentChapter;
        chapterSelector.dispatchEvent(new Event("change")); // Simular cambio de capítulo
    }

    // **3. Obtener la versión seleccionada en el sidebar**
    const versionSeleccionada = document.getElementById("versionSelector").value;
    
    // **4. Buscar la URL de la versión seleccionada según el libro en la versión hebrea**
    const url = versionesBiblia[versionSeleccionada]?.[currentBook];

    if (!url) {
        alert("Este libro no está disponible en la versión seleccionada.");
        return;
    }

    try {
        // **5. Obtener los datos de la versión seleccionada**
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error al cargar la versión seleccionada.");
        const datosVersion = await response.json();

        // **6. Validar que el capítulo realmente existe en la versión seleccionada**
        if (!datosVersion[currentChapter - 1]) {
            alert("Este capítulo no está disponible en la versión seleccionada.");
            return;
        }

        // **7. Limpiar el contenido previo del sidebar antes de mostrar el nuevo capítulo**
        const sidebarContent = document.getElementById("chapterContentSidebar");
        sidebarContent.innerHTML = "";

        // **8. Mostrar todos los versículos del capítulo en el sidebar**
        console.log(`Mostrando contenido: ${currentBook} ${currentChapter} - ${versionSeleccionada}`);
      sidebarContent.innerHTML = `<h3 style="font-size: 14px; margin-bottom: 5px;">${currentBook} ${currentChapter} - ${versionSeleccionada}</h3>`;
        datosVersion[currentChapter - 1].forEach((texto, idx) => {
            let p = document.createElement("p");
            p.innerHTML = `<b>${currentChapter}:${idx + 1}</b> - ${texto}`;
            sidebarContent.appendChild(p);
        });

    } catch (error) {
        console.error(error);
        alert("Hubo un error al cargar la versión seleccionada.");
    }
}





// Cargar los libros en el dropdown y limpiar capítulos
function cargarLibros(libros) {
  const bookSelector = document.getElementById("bookSelector");
  bookSelector.innerHTML = '<option value="">Seleccionar</option>'; // Limpiar libros previos
  document.getElementById("chapterSelector").innerHTML = '<option value="">Seleccionar</option>';
  document.getElementById("chapterContentSidebar").innerHTML = "";

  for (const bookName in libros) {
    const option = document.createElement("option");
    option.value = bookName;
    option.textContent = bookName;
    bookSelector.appendChild(option);
  }

}

document.addEventListener("DOMContentLoaded", () => {
  cargarLibros(versionesBiblia[currentVersion]);

  // Agregar evento para actualizar currentBook cuando el usuario cambia manualmente el libro
  document.getElementById("bookSelector").addEventListener("change", function () {
    currentBook = this.value; // Actualizar el libro actual
    cargarCapitulos(); // Cargar los capítulos del nuevo libro
  });
});



// Cargar capítulos cuando se seleccione un libro
function cargarCapitulos() {
  const bookSelector = document.getElementById("bookSelector");
  const bookName = bookSelector.value;

  if (!bookName || bookName === currentBook) return; // No recargar si ya está seleccionado

  currentBook = bookName; // Guardar el libro actual seleccionado
  dataCache = {}; // Limpiar caché anterior
  const url = versionesBiblia[currentVersion][bookName];
  const chapterSelector = document.getElementById("chapterSelector");
  chapterSelector.innerHTML = '<option value="">Seleccionar</option>';

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Error al cargar contenido: ${response.status}`);
      return response.json();
    })
    .then(data => {
      dataCache = data;

      data.forEach((_, idx) => {
        const option = document.createElement("option");
        option.value = idx + 1;
        option.textContent = `Capítulo ${idx + 1}`;
        chapterSelector.appendChild(option);
      });
    })
    .catch(error => {
      chapterSelector.innerHTML = '<option value="">Error al cargar capítulos</option>';
      console.error(error);
    });
}

// Mostrar contenido del capítulo seleccionado
function mostrarCapitulo() {
  const chapterSelector = document.getElementById("chapterSelector");
  const chapterContent = document.getElementById("chapterContentSidebar");
  const chapterIndex = parseInt(chapterSelector.value, 10) - 1;

  if (!dataCache || !dataCache[chapterIndex]) {
    chapterContent.innerHTML = "<p>Error al cargar el capítulo.</p>";
    return;
  }

  chapterContent.innerHTML = dataCache[chapterIndex]
    .map((verso, idx) => `<p><b>${chapterIndex + 1}:${idx + 1}</b> - ${verso}</p>`)
    .join("");
}

function abrirModal(imageUrl) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imageUrl; // Establece la imagen del modal con la URL proporcionada
}

function cerrarModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
