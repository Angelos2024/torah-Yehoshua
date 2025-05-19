function checkScreenSize() {
  let width = Math.min(screen.width, window.innerWidth); // 📌 Toma el menor valor entre screen.width y window.innerWidth
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;
  let currentPage = window.location.pathname.split('/').pop();
  let lastRedirect = sessionStorage.getItem('lastRedirect');

  // 📌 Detectar si es Chrome en iOS (importante porque a veces reporta mal el ancho)
  let isChromeiOS = /CriOS/.test(userAgent);

  if (isChromeiOS) {
    width = window.innerWidth; // En Chrome iOS, confiar en window.innerWidth
  }

  // 📌 Si la página es vacía (en GitHub Pages o servidores sin índice)
  if (currentPage === '' || currentPage === 'index.html') {
    currentPage = 'index.html';
  }

  // ✅ REDIRECCIÓN SEGURA
  if (width <= 991 && currentPage !== 'versionmovil.html') {
    if (lastRedirect !== 'versionmovil.html') {
      sessionStorage.setItem('lastRedirect', 'versionmovil.html');
      window.location.href = 'versionmovil.html';
    }
  } else if (width > 991 && currentPage !== 'index.html') {
    if (lastRedirect !== 'index.html') {
      sessionStorage.setItem('lastRedirect', 'index.html');
      window.location.href = './';
    }
  }
}

// 🔥 Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', checkScreenSize);

// 📌 Optimizar detección en cambios de tamaño de pantalla
let resizeTimer;
window.addEventListener('resize', function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(checkScreenSize, 200); // 📌 Esperar 200ms después de que el usuario haya dejado de cambiar el tamaño
});

function ajustarMargen() {
  let btn = document.getElementById('fuentess');
  let ancho = window.innerWidth;

  if (ancho <= 870) {
    btn.style.marginLeft = '170px';
  } else if (ancho <= 980) {
    btn.style.marginLeft = '330px';
  } else if (ancho <= 1070) {
    btn.style.marginLeft = '430px';
  } else if (ancho <= 1150) {
    btn.style.marginLeft = '530px';
  } else {
    btn.style.marginLeft = '600px';
  }
}

// Llamar la función al cargar la página y cuando la ventana se redimensione
window.onload = ajustarMargen;
window.onresize = ajustarMargen;

function toggleSidemenu() {
  let sidemenu = document.getElementById('sidemenu');
  let main = document.getElementById('main');

  if (sidemenu.style.left === '0px') {
    sidemenu.style.left = '-70px';
    main.style.marginLeft = '0';
  } else {
    sidemenu.style.left = '0px';
    main.style.marginLeft = '80px';
  }
}

function toggleSearchBox() {
  const searchBox = document.getElementById('searchContainer');
  const btnSearch = document.querySelector('a.nav-link[title="Buscar"]');

  const isOpen = searchBox.style.display === 'block';

  searchBox.style.display = isOpen ? 'none' : 'block';
  btnSearch.classList.toggle('active-btn', !isOpen);

  if (!isOpen) {
    document.getElementById('searchInput').focus();
  }
}

function customSelect(id) {
  const selectBox = document.getElementById(id);
  const selectedDiv = selectBox.querySelector('.select-selected');
  const optionsDiv = selectBox.querySelector('.select-items');

  selectedDiv.addEventListener('click', function () {
    this.classList.toggle('active');
  });

  optionsDiv.addEventListener('click', function (event) {
    if (event.target.tagName === 'DIV') {
      selectedDiv.innerText = event.target.innerText;
      selectedDiv.setAttribute(
        'data-value',
        event.target.getAttribute('data-value')
      );
      selectedDiv.classList.remove('active'); // Cierra el dropdown
      cambiarEstilo();
    }
  });

  document.addEventListener('click', function (event) {
    if (!selectBox.contains(event.target)) {
      selectedDiv.classList.remove('active');
    }
  });
}

function cambiarEstilo() {
  let fuente = document
    .getElementById('fuenteSelect')
    .querySelector('.select-selected')
    .getAttribute('data-value');
  let tamano = document
    .getElementById('tamanoSelect')
    .querySelector('.select-selected')
    .getAttribute('data-value');

  localStorage.setItem('fuenteSeleccionada', fuente);
  localStorage.setItem('tamanoSeleccionado', tamano);

  aplicarEstilo(fuente, tamano);
}

function aplicarEstilo(fuente, tamano) {
  document.querySelectorAll('#results li').forEach((li) => {
    li.style.fontFamily = fuente;
    li.style.fontSize = tamano;
  });
}

function toggleOpciones() {
  const container = document.getElementById('opcionesContainer');

  if (container.style.display === 'none' || container.style.display === '') {
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
}

customSelect('fuenteSelect');
customSelect('tamanoSelect');
let currentBook = null;
let currentChapter = null;

// Función para mostrar el primer capítulo de un libro
async function showFirstChapter(libro) {
  currentBook = libro; // Actualizar el libro actual
  const datos = await fetchAllJsonData();
  if (!datos || !datos[libro]) {
    resultsContainer.innerHTML = '<li>Libro no encontrado.</li>';
    return;
  }

  const capitulos = datos[libro];
  const primerCapitulo = Object.keys(capitulos)[0]; // Obtener el primer capítulo
  currentChapter = primerCapitulo; // Actualizar el capítulo actual
  const versos = capitulos[primerCapitulo];

  // Limpiar resultados y mostrar los versos del primer capítulo
  resultsContainer.innerHTML = '';
  Object.entries(versos).forEach(([versiculo, texto]) => {
    let li = document.createElement('li');
    li.textContent = `${libro} ${primerCapitulo}:${versiculo} - ${texto}`;
    resultsContainer.appendChild(li);
  });

  aplicarFuenteGuardada(); // Aplicar la fuente guardada a los nuevos <li>
  sidebar.style.display = 'none';

  // Actualizar navegación
  showFullChapter(libro, primerCapitulo);

  // Ocultar mensaje de bienvenida y mostrar resultados
  hideWelcomeMessage();
  sidebar.style.display = 'none';

  // **Actualizar comentarios**
  cargarComentariosCapitulo(libro, primerCapitulo);
}

// Añadir evento a cada opción del menú desplegable

document.querySelectorAll('#dropdownMenu a').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const libro = item.getAttribute('data-libro'); // Obtener el libro seleccionado
    if (libro) {
      showFirstChapter(libro);

      // 🔴 Ocultar myDIV al seleccionar un libro desde el dropdown
      sidebar.style.display = 'none';

      // Cerrar el menú desplegable
      dropdownMenu.style.display = 'none';
    }
  });
});

async function showFullChapter(libro, capitulo) {
  currentBook = libro;
  currentChapter = capitulo;

  const datos = await fetchAllJsonData();
  if (!datos[libro] || !datos[libro][capitulo]) return;

  console.log(`Mostrando en versión hebrea: ${libro} ${capitulo}`);

  resultsContainer.innerHTML = `<h2 class="titulo-capitulo">${libro} ${capitulo}</h2>`;

  Object.entries(datos[libro][capitulo]).forEach(([numVerso, texto]) => {
    let li = document.createElement('li');
    li.classList.add('versiculo');
    li.setAttribute('data-libro', libro);
    li.setAttribute('data-capitulo', capitulo);
    li.setAttribute('data-versiculo', numVerso);

    // Crear contenedor para texto y botón
    let divTexto = document.createElement('span');
    divTexto.innerHTML = `<b>${numVerso}.</b> ${texto}`;
    divTexto.classList.add('texto-verso');

    li.appendChild(divTexto);

    let claveVerso = `${libro} ${capitulo}:${numVerso}`;

    // Normalizar la clave solo para buscar en el mapa (no afecta visualmente)
    let idNA28 = na28Map[claveVerso];

    if (idNA28) {
      li.classList.add('con-variantes'); // Resaltar versículos con variantes
      let boton = document.createElement('button');
      boton.innerText = '📖'; // Icono pequeño
      boton.classList.add('btn-na28');
      boton.onclick = () => cargarNA28(libro, capitulo, numVerso); // ✅ Usar la nueva función
      li.appendChild(boton);
    }

    resultsContainer.appendChild(li); // ← ESTA LÍNEA ES IMPORTANTE
  }); // 🔴 AQUÍ TERMINA EL forEach, PERO TE FALTA CERRAR LA FUNCIÓN

  aplicarFuenteGuardada(); // ✅ Esta línea está después del forEach, pero aún dentro de showFullChapter

  function seleccionarVersiculo(elemento) {
    // Quitar la selección de otros versículos
    document
      .querySelectorAll('.versiculo')
      .forEach((v) => v.classList.remove('versiculo-activo'));

    // Marcar el versículo seleccionado como activo
    elemento.classList.add('versiculo-activo');
  }

  aplicarFuenteGuardada(); // Aplicar la fuente después de actualizar el capítulo

  // Determinar capítulos anterior y siguiente
  const chapterNumbers = Object.keys(datos[libro])
    .map(Number)
    .sort((a, b) => a - b);
  const currentChapterIndex = chapterNumbers.indexOf(parseInt(capitulo));

  const prevChapter = chapterNumbers[currentChapterIndex - 1];
  const nextChapter = chapterNumbers[currentChapterIndex + 1];

  // Mostrar u ocultar botones según disponibilidad
  if (prevChapter) {
    prevPageButton.style.display = 'inline-block';
    prevPageButton.onclick = () => showFullChapter(libro, prevChapter);
  } else {
    prevPageButton.style.display = 'none';
  }

  if (nextChapter) {
    nextPageButton.style.display = 'inline-block';
    nextPageButton.onclick = () => showFullChapter(libro, nextChapter);
  } else {
    nextPageButton.style.display = 'none';
  }

  // Cargar comentarios dinámicos para el capítulo actual
  cargarComentariosCapitulo(libro, capitulo);
}

const toggleButton = document.getElementById('toggleComentarios');
const comentariosDiv = document.getElementById('comentarios');
const contenidoComentarios = document.getElementById('contenidoComentarios');

toggleButton.addEventListener('click', () => {
  const isVisible = comentariosDiv.style.display === 'block';

  comentariosDiv.style.display = isVisible ? 'none' : 'block';

  // Cambiar visual del botón
  toggleButton.classList.toggle('active-btn', !isVisible);

  if (!isVisible) {
    cargarComentariosCapitulo(currentBook, currentChapter);
  }
});


// Funciones del sidebar
// Función para alternar el sidebar principal (mySidebar)
function toggleSidebar() {
  const sidebar = document.getElementById('mySidebar');
  const main = document.getElementById('main');
  const toggleNav = document.getElementById('toggleNav'); // Aseguramos que toggleNav está declarado
  const nextPageButton = document.getElementById('nextPage');
  const btnMaterial = document.getElementById("imgMaterial"); // ⬅ Botón Aparato Crítico

  const isOpen = sidebar.classList.contains('open');

  if (isOpen) {
    // Cerrar el sidebar
    sidebar.classList.remove('open');
    main.classList.remove('shifted');
    document.body.classList.remove('sidebar-open');

    // Restaurar posición de nextPage cuando se cierra mySidebar
    nextPageButton.style.right = '282px';

    // Cambiar estado visual del botón
    btnMaterial.classList.remove('active-btn');

    if (toggleNav) {
      toggleNav.classList.remove('active');
    }
  } else {
    // Asegurarse de que el sidebar es visible
    sidebar.style.display = 'block';

    // Abrir el sidebar con animación
    setTimeout(() => {
      sidebar.classList.add('open');
      main.classList.add('shifted');
      document.body.classList.add('sidebar-open');

      // Ajustar la posición de nextPage cuando se abre
      nextPageButton.style.right = '350px';

      // Cambiar estado visual del botón
      btnMaterial.classList.add('active-btn');

      if (toggleNav) {
        toggleNav.classList.add('active');
      }
    }, 10);
  }
}

// Función para alternar el sidebar paralelo (sidebar2)
function togglesidebar2() {
  const sidebar2 = document.getElementById('sidebar2');
  const prevPageButton = document.getElementById('prevPage');
  const btn = document.getElementById('imgParalelo'); // 📌 Botón paralelas

  const isOpen = document.body.classList.contains('sidebar2-open');

  if (isOpen) {
    document.body.classList.remove('sidebar2-open');
    prevPageButton.style.left = '215px';
    btn.classList.remove('active-btn'); // 🔴 Remover clase activa
  } else {
    document.body.classList.add('sidebar2-open');
    prevPageButton.style.left = '215px';
    btn.classList.add('active-btn'); // 🟢 Agregar clase activa
  }
}


// JSON y búsqueda
const urls = [
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/Marcos.json',
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/galatas.json',
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/Hebreos.json',
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/1_Tesalonicenses.json',
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/2_Tesalonicenses.json',
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/Romanos.json',
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/Apocalipsis.json',
];
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const resultsContainer = document.getElementById('results');
const countResultsContainer = document.getElementById('countResults');
const sidebar = document.getElementById('myDIV');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');

const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Función para cargar datos JSON

async function fetchJsonData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Error al cargar JSON: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Error:`, error);
    return null;
  }
}

async function fetchAllJsonData() {
  const allData = {};
  for (const url of urls) {
    const data = await fetchJsonData(url);
    if (data) Object.assign(allData, data);
  }
  return allData;
}

// Función de búsqueda principal
async function searchVerses(query) {
  const datos = await fetchAllJsonData();
  if (!datos) return;

  // Mostrar la palabra buscada en el contenedor
  const searchTermContainer = document.getElementById('searchTermContainer');
  searchTermContainer.innerHTML = `Busqueda: <span style="color: #007bff;">${query}</span>`;

  resultsContainer.innerHTML = '';
  countResultsContainer.innerHTML = '';
  prevPageButton.style.display = 'none'; // Ocultar botón "Anterior"
  nextPageButton.style.display = 'none'; // Ocultar botón "Siguiente"

  const normalizedQuery = query
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  // Mapear abreviaturas a nombres completos
  const libroMap = {
    gal: 'gálatas',
    Gal: 'Gálatas',
    heb: 'hebreos',
    Heb: 'Hebreos',
    '1 tes': '1Tesalonicenses',
    '1tes': '1Tesalonicenses',
    '1 tesa': '1Tesalonicenses',
    '1Tesa': '1Tesalonicenses',
    '1 tesalonicenses': '1Tesalonicenses',
    '2 tes': '2Tesalonicenses',
    '2tes': '2Tesalonicenses',
    '2 tesa': '2Tesalonicenses',
    '2Tesa': '2Tesalonicenses',
    '2 tesalonicenses': '2Tesalonicenses',
    Romanos: 'Romanos',
    romanos: 'Romanos',
    Rom: 'Romanos',
    rom: 'Romanos',
    ROMANOS: 'Romanos',
    ROM: 'Romanos',
    Marcos: 'Marcos',
    marcos: 'Marcos',
    MARCOS: 'Marcos',
    marc: 'Marcos',
    Mc: 'Marcos',
    Mar: 'Marcos',
    MAR: 'Marcos',
    mar: 'Marcos',
    Ap: 'Apocalipsis',
    ap: 'Apocalipsis',
    apocalipsis: 'Apocalipsis',
    APOCALIPSIS: 'Apocalipsis',
    Apoc: 'Apocalipsis',
    apoc: 'Apocalipsis',
    APOC: 'Apocalipsis',
    AP: 'Apocalipsis',
  };

  // Verificar si es una búsqueda de versículos específicos o capítulos completos
  const match = normalizedQuery.match(
    /^([\w\s]+)\s(\d+)(?::(\d+)(?:-(\d+))?)?$/
  );
  if (match) {
    let libro = match[1].trim();
    const capitulo = match[2];
    const versiculoInicio = match[3] ? parseInt(match[3], 10) : null;
    const versiculoFin = match[4] ? parseInt(match[4], 10) : null;

    libro = libroMap[libro] || libro;
    const libroEncontrado = Object.keys(datos).find((key) => {
      return (
        key
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase() ===
        libro
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
      );
    });

    if (libroEncontrado) {
      const capitulos = datos[libroEncontrado];
      if (capitulos[capitulo]) {
        // Ocultar myDIV si es búsqueda de libro/capítulo
        sidebar.style.display = 'none';

        if (versiculoInicio && versiculoFin) {
          for (let i = versiculoInicio; i <= versiculoFin; i++) {
            const texto = capitulos[capitulo][i];
            resultsContainer.innerHTML += texto
              ? `<li>${libroEncontrado} ${capitulo}:${i} - ${texto}
                            <a href="#" class="full-chapter-link" onclick="showFullChapter('${libroEncontrado}', '${capitulo}')">Leer capítulo completo</a>
                        </li>`
              : `<li>${libroEncontrado} ${capitulo}:${i} - Versículo no encontrado.</li>`;
          }
          return;
        } else if (versiculoInicio) {
          const texto = capitulos[capitulo][versiculoInicio];
          resultsContainer.innerHTML = texto
            ? `<li>${libroEncontrado} ${capitulo}:${versiculoInicio} - ${texto}
                        <a href="#" class="full-chapter-link" onclick="showFullChapter('${libroEncontrado}', '${capitulo}')">Leer capítulo completo</a>
                    </li>`
            : `<li>${libroEncontrado} ${capitulo}:${versiculoInicio} - Versículo no encontrado.</li>`;
          return;
        } else {
          showFullChapter(libroEncontrado, capitulo);
          cargarComentariosCapitulo(libroEncontrado, capitulo);
          return;
        }
      } else {
        resultsContainer.innerHTML = '<li>Capítulo no encontrado.</li>';
        // 🔴 Ocultar myDIV si el libro no existe
        sidebar.style.display = 'none';
        return;
      }
    } else {
      resultsContainer.innerHTML = '<li>Libro no encontrado.</li>';

      // 🔴 Ocultar myDIV si el libro no existe
      sidebar.style.display = 'none';
      return;
    }
  }

  const resultados = [];
  const conteoPorLibro = {};
  const ubicacionesPorLibro = {};
  const palabraRegex = new RegExp(`(${query})`, 'gi');

  Object.keys(datos).forEach((libro) => {
    let libroCount = 0;
    ubicacionesPorLibro[libro] = [];
    Object.keys(datos[libro]).forEach((capitulo) => {
      Object.entries(datos[libro][capitulo]).forEach(([versiculo, texto]) => {
        const textoNormalizado = texto
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();
        if (textoNormalizado.includes(normalizedQuery)) {
          const textoResaltado = texto.replace(
            palabraRegex,
            "<span style='background-color: #333; color: white; font-weight: bold;'>$1</span>"
          );
          resultados.push(
            `<li>${libro} ${capitulo}:${versiculo} - ${textoResaltado}
              <span class="full-chapter-link" onclick="showFullChapter('${libro}', '${capitulo}')">Leer capítulo completo</span></li>`
          );
          libroCount++;
          ubicacionesPorLibro[libro].push(`${capitulo}:${versiculo}`);
        }
      });
    });
    if (libroCount > 0) {
      conteoPorLibro[libro] = libroCount;
    }
  });

  Object.entries(conteoPorLibro).forEach(([libro, count]) => {
    const ubicaciones = ubicacionesPorLibro[libro]
      .map(
        (ubicacion) =>
          `<li><a href="#" onclick="showVerse('${libro}', '${ubicacion}')">${libro} ${ubicacion}</a></li>`
      )
      .join('');
    countResultsContainer.innerHTML += `<li class="expandable">${libro} (${count})<ul class="nested">${ubicaciones}</ul></li>`;
  });

  if (resultados.length > 0) {
    resultsContainer.innerHTML = resultados.join('');
    setTimeout(aplicarFuenteGuardada, 50); // Aplicar la fuente después de un breve retraso
  } else {
    resultsContainer.innerHTML = '<li>No se encontraron coincidencias.</li>';
  }

  sidebar.style.display = resultados.length > 0 ? 'block' : 'none';
  document.querySelectorAll('.expandable').forEach((item) => {
    item.addEventListener('click', function () {
      this.querySelector('.nested').style.display =
        this.querySelector('.nested').style.display === 'block'
          ? 'none'
          : 'block';
    });
  });
}

// Funciones auxiliares: showVerse, showFullChapter, etc. permanecen iguales

function showVerse(libro, ubicacion) {
  const [capitulo, versiculo] = ubicacion.split(':');
  fetchAllJsonData().then((datos) => {
    if (!datos[libro] || !datos[libro][capitulo]) return;
    const texto = datos[libro][capitulo][versiculo];
    resultsContainer.innerHTML = texto
      ? `<li>${libro} ${capitulo}:${versiculo} - ${texto}
               <br>
               <a href="#" onclick="showFullChapter('${libro}', '${capitulo}')" class="full-chapter-link">Leer capítulo completo</a>
               </li>`
      : `<li>${libro} ${capitulo}:${versiculo} - Versículo no encontrado.</li>`;
  });
  // Ocultar botones de navegación
  prevPageButton.style.display = 'none';
  nextPageButton.style.display = 'none';
}

function showFullChapterWithHighlight(libro, capitulo, versiculoResaltado) {
  fetchAllJsonData().then((datos) => {
    if (!datos[libro] || !datos[libro][capitulo]) return;
    const versiculos = Object.entries(datos[libro][capitulo])
      .map(([versiculo, texto]) => {
        if (versiculo === versiculoResaltado) {
          return `<li style="background-color: #666; color: white; font-weight: bold; font-family: Arial, sans-serif; transition: background-color 0.3s ease;" 
            onmouseover="this.style.backgroundColor='#000'" 
            onmouseout="this.style.backgroundColor='#666'" 
            data-temporary="true" 
            onmouseenter="if (this.dataset.temporary === 'true') {
              setTimeout(() => { 
                this.style.backgroundColor = '#fff'; 
                this.style.color = '#333'; 
                this.style.fontWeight = 'normal'; 
                this.style.padding = '15px'; 
                this.style.border = '1px solid #ccc'; 
                this.style.marginBottom = '-13px'; 
                this.style.borderRadius = '4px'; 
                this.style.width = 'calc(100% + 80px)'; 
                this.style.marginLeft = '-90px'; 
                this.style.marginTop = '20px'; 

                // Elimina los eventos de hover
                this.removeAttribute('onmouseover');
                this.removeAttribute('onmouseout');
                this.dataset.temporary = 'false'; // Desactiva el estilo temporal
              }, 5000);
            }">
            ${libro} ${capitulo}:${versiculo} - ${texto}
        </li>`;
        }
        return `<li>${libro} ${capitulo}:${versiculo} - ${texto}</li>`;
      })
      .join('');
    resultsContainer.innerHTML =
      versiculos || '<li>Capítulo no encontrado.</li>';
  });
}

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) searchVerses(query);
});

searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query) searchVerses(query);
  }
});

// Ocultar el mensaje de bienvenida al realizar una búsqueda
const welcomeMessage = document.getElementById('welcomeMessage');
function hideWelcomeMessage() {
  welcomeMessage.style.display = 'none';
}
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    hideWelcomeMessage();
    searchVerses(query);
  }
});
searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query) {
      hideWelcomeMessage();
      searchVerses(query);
      // 🔻 Ocultar buscador al presionar Enter
      document.getElementById('searchContainer').style.display = 'none';
    }
  }
});

function displayChapter(libro, capitulo) {
  fetchAllJsonData().then((datos) => {
    if (!datos[libro] || !datos[libro][capitulo]) return;
    resultsContainer.innerHTML = '';
    Object.entries(datos[libro][capitulo]).forEach(([numVerso, textoVerso]) => {
      resultsContainer.innerHTML += `<li>${libro} ${capitulo}:${numVerso} - ${textoVerso}</li>`;
    });
  });
}

function copiarContenido() {
  const resultados = document.getElementById('results');
  const texto = resultados.innerText; // Obtiene el texto de los resultados

  if (texto) {
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        mostrarNotificacion('El contenido ha sido copiado.');
      })
      .catch((err) => {
        console.error('Error al copiar.', err);
      });
  } else {
    mostrarNotificacion('No hay contenido para copiar.');
  }

  // Activar visualmente el botón con efecto breve
  const btn = document.getElementById("imgCopiar");
  btn.classList.add("active-btn");

  setTimeout(() => {
    btn.classList.remove("active-btn");
  }, 1000); // Efecto visible por 1 segundo
}


function mostrarNotificacion(mensaje) {
  const notificacion = document.createElement('div');
  notificacion.innerText = mensaje;
  notificacion.style.position = 'fixed';
  notificacion.style.top = '115px'; // Ajusta esto para subir o bajar la notificación
  notificacion.style.left = '50%';
  notificacion.style.transform = 'translateX(-50%)';
  notificacion.style.background = 'rgba(0, 0, 0, 0.8)';
  notificacion.style.color = 'white';
  notificacion.style.padding = '5px 10px';
  notificacion.style.borderRadius = '5px';
  notificacion.style.fontSize = '16px';
  notificacion.style.zIndex = '1000';
  notificacion.style.opacity = '0';
  notificacion.style.transition = 'opacity 0.3s ease-in-out';

  document.body.appendChild(notificacion);

  // Mostrar la notificación
  setTimeout(() => {
    notificacion.style.opacity = '1';
  }, 10);

  // Ocultar y eliminar la notificación después de 1.5 segundos
  setTimeout(() => {
    notificacion.style.opacity = '0';
    setTimeout(() => {
      notificacion.remove();
    }, 300);
  }, 730);
}

// Funcionalidad del menú desplegable
function toggleLibrosSidebar() {
  const sidebar = document.getElementById('dropdownMenu');
  const boton = document.getElementById('dropdownButton');

  const isOpen = sidebar.classList.contains('open');

  if (isOpen) {
    sidebar.classList.remove('open');
    boton.classList.remove('active-btn');
  } else {
    sidebar.classList.add('open');
    boton.classList.add('active-btn');
  }
}


// Función para alternar el nuevo sidebar

document.addEventListener('DOMContentLoaded', function () {
  const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  tooltips.forEach((tooltipTriggerEl) => {
    const tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: 'hover',
    });

    tooltipTriggerEl.addEventListener('click', function () {
      tooltip.hide();
    });
  });
});

function aplicarFuenteGuardada() {
  let fuenteGuardada = localStorage.getItem('fuenteSeleccionada') || 'Arial';
  let tamanoGuardado = localStorage.getItem('tamanoSeleccionado') || '16px';

  document.querySelectorAll('#results li').forEach((li) => {
    li.style.fontFamily = fuenteGuardada;
    li.style.fontSize = tamanoGuardado;
  });
}
