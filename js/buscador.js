function showFullChapterAndCloseSidebar(libro, capitulo) {
  const sidebarResultadosBusqueda = document.getElementById(
    'sidebarResultadosBusqueda'
  );
  sidebarResultadosBusqueda.classList.remove('active');
  sidebarResultadosBusqueda.classList.remove('semi-hidden');
  sidebarResultadosBusqueda.removeAttribute('style');
  showFullChapter(libro, capitulo);
}

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const navItemAparatoCritico = document.querySelector(
  '.nav-item:has(#buttonAparatoCritico)'
);
const navItemComentarios = document.querySelector(
  '.nav-item:has(#buttonComentarios)'
);

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

// Función de búsqueda principal
async function searchVerses(query) {
  // Obtiene todos los datos para buscar en ellos
  const datos = await fetchAllJsonData();
  if (!datos) return;

  // Check if we're in small screen mode
  const isSmallScreen = window.innerWidth < 992;

  // Ocultar mensaje de bienvenida en cualquier caso
  hideWelcomeMessage();

  // Reference all sidebars
  const sidebarAparatoCritico = document.getElementById(
    'sidebarAparatoCritico'
  );
  const sidebarBibliaParalela = document.getElementById(
    'sidebarBibliaParalela'
  );
  const sidebarComentarios = document.getElementById('sidebarComentarios');
  const sidebarResultadosBusqueda = document.getElementById(
    'sidebarResultadosBusqueda'
  );

  const contenedorAparatoCritico = document.getElementById(
    'contenedorAparatoCritico'
  );
  const contenedorComentarios = document.getElementById(
    'contenedorComentarios'
  );

  // Reference desktop nav items
  const navItemAparatoCritico = document.querySelector(
    '.nav-item:has(#buttonAparatoCritico)'
  );
  const navItemComentarios = document.querySelector(
    '.nav-item:has(#buttonComentarios)'
  );

  // Reference mobile nav buttons
  const aparatoCriticoMov = document.getElementById('bttAparatoCriticoMov');
  const comentariosMov = document.getElementById('bttComentariosMov');
  const bibliaParalelaMov = document.getElementById('bttBibliaParalelaMov');

  // Close all sidebars in small screen mode or just the specific ones in desktop mode
  if (isSmallScreen) {
    // In small screen mode, close all sidebars
    sidebarAparatoCritico.classList.remove('active');
    sidebarBibliaParalela.classList.remove('active');
    sidebarComentarios.classList.remove('active');

    // Clear active states for mobile nav buttons
    if (aparatoCriticoMov)
      aparatoCriticoMov.classList.remove('active-nav-item');
    if (comentariosMov) comentariosMov.classList.remove('active-nav-item');
    if (bibliaParalelaMov)
      bibliaParalelaMov.classList.remove('active-nav-item');
  } else {
    // In desktop mode, handle specific sidebars as before
    if (sidebarAparatoCritico) {
      sidebarAparatoCritico.classList.remove('active');
      if (navItemAparatoCritico) {
        navItemAparatoCritico.classList.remove('active-nav-item');
      }
    }

    if (sidebarComentarios) {
      sidebarComentarios.classList.remove('active');
      if (navItemComentarios) {
        navItemComentarios.classList.remove('active-nav-item');
      }
    }
  }

  // Reset aparato critico data regardless of screen size
  if (sidebarAparatoCritico) {
    sidebarAparatoCritico.removeAttribute('data-libro');
    sidebarAparatoCritico.removeAttribute('data-capitulo');
    sidebarAparatoCritico.removeAttribute('data-versiculo');
    contenedorAparatoCritico.innerHTML = `<p>📖 La NA28 (Nestle-Aland 28) es una edición del Nuevo Testamento en griego, usada por académicos y traductores para estudiar el texto original de la Biblia. Es considerada una de las versiones más precisas, ya que se basa en los manuscritos más antiguos y confiables.</p>`;
  }

  // Reset comentarios content regardless of screen size
  if (contenedorComentarios) {
    contenedorComentarios.innerHTML = `<p id="mensajeNoComentarios">No hay comentarios</p>`;
  }

  const normalizedQuery = query
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  // Verificar si es una búsqueda de versículos específicos o capítulos completos
  const match = normalizedQuery.match(
    /^([\w\s]+)\s(\d+)(?::(\d+)(?:-(\d+))?)?$/
  );
  if (match) {
    // For reference searches, close sidebarResultadosBusqueda in both screen sizes
    sidebarResultadosBusqueda.classList.remove('active');

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
        if (versiculoInicio && versiculoFin) {
          for (let i = versiculoInicio; i <= versiculoFin; i++) {
            const texto = capitulos[capitulo][i];
            resultsContainer.innerHTML += texto
              ? `<li>${libroEncontrado} ${capitulo}:${i} - ${texto}
                            <a href="#" class="full-chapter-link" onclick="showFullChapterAndCloseSidebar('${libroEncontrado}', '${capitulo}')">Leer capítulo completo</a>
                        </li>`
              : `<li>${libroEncontrado} ${capitulo}:${i} - Versículo no encontrado.</li>`;
          }
          return;
        } else if (versiculoInicio) {
          const texto = capitulos[capitulo][versiculoInicio];
          resultsContainer.innerHTML = texto
            ? `<li>${libroEncontrado} ${capitulo}:${versiculoInicio} - ${texto}
                        <a href="#" class="full-chapter-link" onclick="showFullChapterAndCloseSidebar('${libroEncontrado}', '${capitulo}')">Leer capítulo completo</a>
                    </li>`
            : `<li>${libroEncontrado} ${capitulo}:${versiculoInicio} - Versículo no encontrado.</li>`;
          return;
        } else {
          showFullChapterAndCloseSidebar(libroEncontrado, capitulo);
          cargarComentariosCapitulo(libroEncontrado, capitulo);
          return;
        }
      } else {
        // Ocultar el sidebar si el capítulo no existe
        const sidebarResultadosBusqueda = document.getElementById(
          'sidebarResultadosBusqueda'
        );
        sidebarResultadosBusqueda.classList.remove('active');
        resultsContainer.innerHTML = '<li>Capítulo no encontrado.</li>';
        return;
      }
    } else {
      // Ocultar el sidebar si el libro no existe
      const sidebarResultadosBusqueda = document.getElementById(
        'sidebarResultadosBusqueda'
      );
      sidebarResultadosBusqueda.classList.remove('active');
      resultsContainer.innerHTML = '<li>Libro no encontrado.</li>';
      return;
    }
  }

  // Si llegamos aquí, es una búsqueda por palabras/frases
  resultsContainer.innerHTML = '';
  countResultsContainer.innerHTML = '';
  prevPageButton.style.display = 'none'; // Ocultar botón "Anterior"
  nextPageButton.style.display = 'none'; // Ocultar botón "Siguiente"

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
            "<span style='background-color: yellow; color: black; font-weight: bold;'>$1</span>"
          );
          resultados.push(
            `<li>${libro} ${capitulo}:${versiculo} - ${textoResaltado}
              <span class="full-chapter-link" onclick="showFullChapterAndCloseSidebar('${libro}', '${capitulo}')">Leer capítulo completo</span></li>`
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
    // For word/phrase searches with results, show sidebarResultadosBusqueda
    sidebarResultadosBusqueda.classList.add('active');

    // Mostrar la palabra buscada en el contenedor
    const sidebarResultadosBusquedaTitle = document.getElementById(
      'sidebarResultadosBusquedaTitle'
    );
    sidebarResultadosBusquedaTitle.innerHTML = `<p>Búsqueda: "<span style="color: #0c7e70; font-style: italic;">${query}</span>"</p>`;

    resultsContainer.innerHTML = resultados.join('');
    setTimeout(aplicarFuenteGuardada, 50); // Aplicar la fuente después de un breve retraso
  } else {
    // For word/phrase searches with no results
    sidebarResultadosBusqueda.classList.remove('active');

    resultsContainer.innerHTML = '<li>No se encontraron coincidencias.</li>';
  }

  document.querySelectorAll('.expandable').forEach((item) => {
    item.addEventListener('click', function () {
      const nested = this.querySelector('.nested');
      nested.style.display =
        nested.style.display === 'block' ? 'none' : 'block';
      this.classList.toggle('expanded');
    });
  });
}
