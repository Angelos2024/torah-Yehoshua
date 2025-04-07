const resultsContainer = document.getElementById('results');
const countResultsContainer = document.getElementById('countResults');
const sidebarAparatoCritico = document.getElementById('myDIV');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const dropdownButton = document.getElementById('dropdownButton');
const versionSelect = document.getElementById('versionSelect');
const libroSelect = document.getElementById('libroSelect');
const capituloSelect = document.getElementById('capituloSelect');
const btnCargar = document.getElementById('btnCargar');
const btnSync = document.getElementById('btnSync');
const resultadoBibliaParalela = document.getElementById(
  'resultadoBibliaParalela'
);
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const welcomeMessage = document.getElementById('welcomeMessage');

let currentBook;
let currentChapter;

const state = {
  currentBook: null,
  currentChapter: null,
};

window.mainBook = null;
window.mainChapter = null;

let cacheLibros = {
  RVR1960: {},
  BTX4: {},
};

// Evento para seleccionar versículos al hacer clic
document.addEventListener('click', function (e) {
  // Si el clic fue directamente en un li dentro de #results (no en un elemento hijo como botón o texto)
  if (
    e.target.closest('#results li') &&
    (e.target.tagName === 'LI' ||
      (e.target.parentElement.tagName === 'LI' &&
        !e.target.closest('.btn-na28') &&
        !e.target.closest('.texto-verso')))
  ) {
    const li = e.target.closest('#results li');
    li.classList.toggle('selected');
  }
});

async function showFirstChapter(libro) {
  console.log('Obteniendo el primer capítulo del libro:', libro);
  currentBook = libro;
  const datos = await fetchAllJsonData();
  if (!datos || !datos[libro]) {
    resultsContainer.innerHTML = '<li>Libro no encontrado.</li>';
    return;
  }

  const capitulos = datos[libro];
  const primerCapitulo = Object.keys(capitulos)[0]; // Obtener el primer capítulo
  currentChapter = primerCapitulo; // Actualizar el capítulo actual
  const versos = capitulos[primerCapitulo];

  // Vaciar resultados para cargar nuevo contenido
  resultsContainer.innerHTML = '';

  // Crear título del capítulo
  const title = document.createElement('h2');
  title.innerHTML = `${libro} ${primerCapitulo}`;
  title.classList.add('titulo-capitulo');
  resultsContainer.appendChild(title);

  Object.entries(versos).forEach(([versiculo, texto]) => {
    let li = document.createElement('li');
    // Crear un span para el texto con HTML
    let divTexto = document.createElement('span');
    divTexto.innerHTML = `${libro} ${primerCapitulo}:${versiculo} - ${texto}`;
    divTexto.classList.add('texto-verso');
    li.appendChild(divTexto);
    resultsContainer.appendChild(li);
  });

  aplicarFuenteGuardada(); // Aplicar la fuente guardada a los nuevos <li>

  // Actualizar navegación
  showFullChapter(libro, primerCapitulo);

  // Ocultar mensaje de bienvenida y mostrar resultados
  hideWelcomeMessage();

  // **Actualizar comentarios**
  cargarComentariosCapitulo(libro, primerCapitulo);
}

// Función para mostrar el primer capítulo de un libro
async function showFullChapter(libro, capitulo) {
  currentBook = libro;
  currentChapter = capitulo;

  // Cerrar el sidebar de resultados
  const sidebarResultadosBusqueda = document.getElementById(
    'sidebarResultadosBusqueda'
  );
  if (sidebarResultadosBusqueda) {
    sidebarResultadosBusqueda.classList.remove('active');
  }

  const datos = await fetchAllJsonData();
  if (!datos[libro] || !datos[libro][capitulo]) return;

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'auto',
  });

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
      boton.onclick = function () {
        cargarNA28(libro, capitulo, numVerso, this);
      }; // Pasar this como parámetro
      li.appendChild(boton);
    }

    resultsContainer.appendChild(li); // ← ESTA LÍNEA ES IMPORTANTE
  }); // 🔴 AQUÍ TERMINA EL forEach, PERO TE FALTA CERRAR LA FUNCIÓN

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
    // Asegurar que es visible en móvil
    prevPageButton.style.zIndex = '3000';
  } else {
    prevPageButton.style.display = 'none';
  }

  if (nextChapter) {
    nextPageButton.style.display = 'inline-block';
    nextPageButton.onclick = () => showFullChapter(libro, nextChapter);
    // Asegurar que es visible en móvil
    nextPageButton.style.zIndex = '3000';
  } else {
    nextPageButton.style.display = 'none';
  }

  // Cargar comentarios dinámicos para el capítulo actual
  cargarComentariosCapitulo(libro, capitulo);
}

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
  toggleResultsSidebarNotch();
}
