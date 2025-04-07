// 🔹 Mapeo de versículos a archivos en NA28
const na28Map = {
  'Hebreos 1:1': 'hebreos1_1',
  'Hebreos 1:2': 'hebreos1_2',
  'Hebreos 1:3': 'hebreos1_3',
  'Hebreos 1:4': 'hebreos1_4',
  'Hebreos 1:7': 'hebreos1_7',
  'Hebreos 1:8': 'hebreos1_8',
  'Hebreos 1:9': 'hebreos1_9',
  'Hebreos 1:11': 'hebreos1_11',
  'Hebreos 1:12': 'hebreos1_12',
  'Hebreos 1:14': 'hebreos1_14',
  'Hebreos 2:1': 'hebreos2_1',
  'Hebreos 2:2': 'hebreos2_2',
  'Hebreos 2:4': 'hebreos2_4',
  'Hebreos 2:6': 'hebreos2_6',
  'Hebreos 2:7': 'hebreos2_7',
  'Hebreos 2:8': 'hebreos2_8',
  'Hebreos 2:9': 'hebreos2_9',
  'Hebreos 2:11': 'hebreos2_11',
  'Hebreos 2:14': 'hebreos2_14',
  'Hebreos 2:17': 'hebreos2_17',
  'Hebreos 3:2': 'hebreos3_2',
  'Hebreos 3:3': 'hebreos3_3',
  'Hebreos 3:4': 'hebreos3_4',
  'Hebreos 3:6': 'hebreos3_6',
  'Hebreos 3:9': 'hebreos3_9',
  'Hebreos 3:10': 'hebreos3_10',
  'Hebreos 3:13': 'hebreos3_13',
  'Gálatas 1:1': 'galatas1_1',
  'Gálatas 1:3': 'galatas1_3',
  'Gálatas 1:4': 'galatas1_4',
  'Gálatas 1:6': 'galatas1_6',
  'Gálatas 1:8': 'galatas1_8',
  'Gálatas 1:9': 'galatas1_9',
  'Gálatas 1:10': 'galatas1_10',
  'Gálatas 1:11': 'galatas1_11',
  'Gálatas 1:12': 'galatas1_12',
  'Gálatas 1:13': 'galatas1_13',
  'Gálatas 1:15': 'galatas1_15',
  'Gálatas 1:16': 'galatas1_16',
  'Gálatas 1:17': 'galatas1_17',
  'Gálatas 1:18': 'galatas1_18',
  'Gálatas 1:19': 'galatas1_19',
  'Gálatas 1:21': 'galatas1_21',
  'Gálatas 1:23': 'galatas1_23',
  'Gálatas 2:1': 'galatas2_1',
  'Gálatas 2:4': 'galatas2_4',
  'Gálatas 2:5': 'galatas2_5',
  'Gálatas 2:6': 'galatas2_6',
  'Gálatas 2:9': 'galatas2_9',
  'Gálatas 2:11': 'galatas2_11',
  'Gálatas 2:12': 'galatas2_12',
  'Gálatas 2:13': 'galatas2_13',
  'Gálatas 2:14': 'galatas2_14',
  'Gálatas 2:16': 'galatas2_16',
  'Gálatas 2:17': 'galatas2_17',
  'Gálatas 2:20': 'galatas2_20',
};

function cargarNA28(libro, capitulo, versiculo, botonClickeado) {
  let sidebarAparatoCritico = document.getElementById('sidebarAparatoCritico');
  let contenedorAparatoCritico = document.getElementById(
    'contenedorAparatoCritico'
  );
  let claveVerso = `${libro} ${capitulo}:${versiculo}`;
  let archivoNA28 = na28Map[claveVerso];
  // Referencia al botón de navegación del aparato crítico
  const navItemAparatoCritico = document.querySelector(
    '.nav-item:has(#buttonAparatoCritico)'
  );
  const navItemComentarios = document.querySelector(
    '.nav-item:has(#buttonComentarios)'
  );

  // Referencias a los botones móviles
  const aparatoCriticoMov = document.getElementById('bttAparatoCriticoMov');
  const comentariosMov = document.getElementById('bttComentariosMov');

  // Desactivar todos los botones primero
  document.querySelectorAll('.btn-na28.active').forEach((btn) => {
    btn.classList.remove('active');
  });

  // Si el sidebarAparatoCritico está abierto CON el mismo libro/capítulo/versículo...
  if (
    sidebarAparatoCritico.classList.contains('active') &&
    sidebarAparatoCritico.getAttribute('data-libro') === libro &&
    sidebarAparatoCritico.getAttribute('data-capitulo') === capitulo &&
    sidebarAparatoCritico.getAttribute('data-versiculo') === versiculo
  ) {
    // ...lo cerramos PERO conservamos el contenido
    sidebarAparatoCritico.classList.remove('active');
    // Quitar clase activa del botón de navegación
    if (navItemAparatoCritico) {
      navItemAparatoCritico.classList.remove('active-nav-item');
    }
    if (navItemComentarios) {
      navItemComentarios.classList.remove('active-nav-item');
    }
    // Quitar clase activa del botón móvil
    if (aparatoCriticoMov) {
      aparatoCriticoMov.classList.remove('active-nav-item');
    }
    if (comentariosMov) {
      comentariosMov.classList.remove('active-nav-item');
    }
    // También aseguramos que el botón clickeado no tenga la clase 'active'
    if (botonClickeado) {
      botonClickeado.classList.remove('active');
    }
    return; // Importante salir aquí
  }

  // Activar el botón clickeado si existe
  if (botonClickeado) {
    botonClickeado.classList.add('active');
  }

  // Actualizar atributos para el nuevo verso
  sidebarAparatoCritico.setAttribute('data-libro', libro);
  sidebarAparatoCritico.setAttribute('data-capitulo', capitulo);
  sidebarAparatoCritico.setAttribute('data-versiculo', versiculo);

  // Si no existe el archivo, mostrar mensaje
  if (!archivoNA28) {
    contenedorAparatoCritico.innerHTML = `<h5>NA28</h5><p>No hay aparato crítico para ${libro} ${capitulo}:${versiculo}.</p>`;
    sidebarAparatoCritico.classList.add('active');
    // Añadir clase activa al botón de navegación
    if (navItemAparatoCritico) {
      navItemAparatoCritico.classList.add('active-nav-item');
    }
    if (navItemComentarios) {
      navItemComentarios.classList.remove('active-nav-item');
    }
    // Añadir clase activa al botón móvil
    if (aparatoCriticoMov) {
      aparatoCriticoMov.classList.add('active-nav-item');
    }
    if (comentariosMov) {
      comentariosMov.classList.remove('active-nav-item');
    }
    return;
  }

  // Construir la URL y fetch
  let url = `https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/na28/2ts1/${archivoNA28}.html`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error('Archivo no encontrado');
      return response.text();
    })
    .then((data) => {
      // Create a temporary div to parse the HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = data;
      const containerContent =
        tempDiv.querySelector('.container')?.innerHTML || data;
      contenedorAparatoCritico.scrollTop = 0; // Reset scroll position
      contenedorAparatoCritico.innerHTML = containerContent;
      sidebarAparatoCritico.classList.add('active'); // Mostrar el sidebarAparatoCritico
      // Añadir clase activa al botón de navegación
      if (navItemAparatoCritico) {
        navItemAparatoCritico.classList.add('active-nav-item');
      }
      if (navItemComentarios) {
        navItemComentarios.classList.remove('active-nav-item');
      }
      // Añadir clase activa al botón móvil
      if (aparatoCriticoMov) {
        aparatoCriticoMov.classList.add('active-nav-item');
      }
      if (comentariosMov) {
        comentariosMov.classList.remove('active-nav-item');
      }
    })
    .catch((error) => {
      console.error('❌ Error al cargar el aparato crítico:', error);
      contenedorAparatoCritico.innerHTML = `<h5>NA28</h5><p>No hay aparato crítico disponible.</p>`;
      sidebarAparatoCritico.classList.add('active');
      // Añadir clase activa al botón de navegación
      if (navItemAparatoCritico) {
        navItemAparatoCritico.classList.add('active-nav-item');
      }
      if (navItemComentarios) {
        navItemComentarios.classList.remove('active-nav-item');
      }
      // Añadir clase activa al botón móvil
      if (aparatoCriticoMov) {
        aparatoCriticoMov.classList.add('active-nav-item');
      }
      if (comentariosMov) {
        comentariosMov.classList.remove('active-nav-item');
      }
    });
}

function generarBotonNA28(libro, capitulo, versiculo) {
  return `<button class='btn-na28' onclick="cargarNA28('${libro}', '${capitulo}', '${versiculo}', this)">📖</button>`;
}

function insertarBotonesNA28() {
  document.querySelectorAll('#results li').forEach((verso) => {
    let libro = verso.getAttribute('data-libro');
    let capitulo = verso.getAttribute('data-capitulo');
    let versiculo = verso.getAttribute('data-versiculo');

    if (libro && capitulo && versiculo) {
      let claveVerso = `${libro} ${capitulo}:${versiculo}`;
      // Solo insertar si existe en el mapa de NA28 y NO tiene ya un botón
      if (na28Map[claveVerso] && !verso.querySelector('.btn-na28')) {
        // Marcar el verso como que tiene variantes para el CSS
        verso.classList.add('con-variantes');
        let botonNA28 = generarBotonNA28(libro, capitulo, versiculo);
        verso.innerHTML += botonNA28;
      }
    }
  });

  // Después de insertar todos los botones, sincronizar el estado activo
  sincronizarBotonActivo();
}

// Función para sincronizar el estado activo del botón con el sidebar
function sincronizarBotonActivo() {
  const sidebarAparatoCritico = document.getElementById(
    'sidebarAparatoCritico'
  );

  // Si el sidebar está activo, encontrar y activar el botón correspondiente
  if (sidebarAparatoCritico.classList.contains('active')) {
    const libro = sidebarAparatoCritico.getAttribute('data-libro');
    const capitulo = sidebarAparatoCritico.getAttribute('data-capitulo');
    const versiculo = sidebarAparatoCritico.getAttribute('data-versiculo');

    // Desactivar todos los botones primero
    document.querySelectorAll('.btn-na28.active').forEach((btn) => {
      btn.classList.remove('active');
    });

    if (libro && capitulo && versiculo) {
      let botonEncontrado = false;
      const claveVerso = `${libro} ${capitulo}:${versiculo}`;
      let botonActivo = null;

      // Método 1: Buscar por atributo onclick
      document.querySelectorAll('.btn-na28').forEach((btn) => {
        const onclickAttr = btn.getAttribute('onclick');
        if (
          onclickAttr &&
          onclickAttr.includes(`'${libro}'`) &&
          onclickAttr.includes(`'${capitulo}'`) &&
          onclickAttr.includes(`'${versiculo}'`)
        ) {
          btn.classList.add('active');
          botonEncontrado = true;
          botonActivo = btn;
        }
      });

      // Método 2: Si no se encontró, buscar por el li padre
      if (!botonEncontrado) {
        const versiculoElement = document.querySelector(
          `#results li[data-libro="${libro}"][data-capitulo="${capitulo}"][data-versiculo="${versiculo}"]`
        );
        if (versiculoElement) {
          const boton = versiculoElement.querySelector('.btn-na28');
          if (boton) {
            boton.classList.add('active');
            botonEncontrado = true;
            botonActivo = boton;
          }
        }
      }

      // Método 3: Buscar por estructura del DOM
      if (!botonEncontrado) {
        document.querySelectorAll('#results li.con-variantes').forEach((li) => {
          const liLibro = li.getAttribute('data-libro');
          const liCapitulo = li.getAttribute('data-capitulo');
          const liVersiculo = li.getAttribute('data-versiculo');

          if (
            liLibro === libro &&
            liCapitulo === capitulo &&
            liVersiculo === versiculo
          ) {
            const boton = li.querySelector('.btn-na28');
            if (boton) {
              boton.classList.add('active');
              botonEncontrado = true;
              botonActivo = boton;
            }
          }
        });
      }

      // Método 4: Si el versículo está en na28Map, inyectar y generar un botón temporal si es necesario
      if (!botonEncontrado && na28Map[claveVerso]) {
        // Buscar el li que corresponde a este versículo, incluso si no tiene el botón todavía
        const allVerses = document.querySelectorAll('#results li');

        for (const li of allVerses) {
          const liLibro = li.getAttribute('data-libro');
          const liCapitulo = li.getAttribute('data-capitulo');
          const liVersiculo = li.getAttribute('data-versiculo');

          if (
            liLibro === libro &&
            liCapitulo === capitulo &&
            liVersiculo === versiculo
          ) {
            // Si no tiene un botón, añadirlo
            if (!li.querySelector('.btn-na28')) {
              li.classList.add('con-variantes');
              const nuevoBoton = document.createElement('button');
              nuevoBoton.className = 'btn-na28 active';
              nuevoBoton.textContent = '📖';
              nuevoBoton.setAttribute(
                'onclick',
                `cargarNA28('${libro}', '${capitulo}', '${versiculo}', this)`
              );
              li.appendChild(nuevoBoton);
              botonEncontrado = true;
              botonActivo = nuevoBoton;
            }
            break;
          }
        }
      }

      // Asegurar que el botón se mantiene con la clase 'active'
      if (botonActivo) {
        // Usamos un tiempo de espera para garantizar que se aplica después de cualquier otro cambio
        setTimeout(() => {
          if (
            sidebarAparatoCritico.classList.contains('active') &&
            sidebarAparatoCritico.getAttribute('data-libro') === libro &&
            sidebarAparatoCritico.getAttribute('data-capitulo') === capitulo &&
            sidebarAparatoCritico.getAttribute('data-versiculo') === versiculo
          ) {
            botonActivo.classList.add('active');
          }
        }, 150);
      }

      if (!botonEncontrado) {
        console.log(
          `⚠️ No se encontró ningún botón para el versículo ${libro} ${capitulo}:${versiculo}`
        );
      }
    } else {
      console.log(
        '⚠️ Faltan atributos para identificar el versículo en el sidebar'
      );
    }
  }
}

// 🔥 Asegurar que se ejecuta después de cargar los versículos
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(insertarBotonesNA28, 500); // Esperar medio segundo antes de ejecutarlo
});

// También sincronizar cuando cambia el contenido
document.addEventListener('DOMContentLoaded', () => {
  // Observar cambios en el DOM para volver a insertar botones si cambia el contenido
  const observer = new MutationObserver(function (mutations) {
    // Usamos una variable para controlar el debounce
    let debounceTimeout;

    mutations.forEach(function (mutation) {
      if (mutation.type === 'childList' && mutation.target.id === 'results') {
        // Cancelar cualquier timeout pendiente
        clearTimeout(debounceTimeout);

        // Configurar un nuevo timeout
        debounceTimeout = setTimeout(() => {
          // Limpiar botones duplicados primero
          document.querySelectorAll('#results li').forEach((verso) => {
            const botones = verso.querySelectorAll('.btn-na28');
            if (botones.length > 1) {
              // Mantener solo el primer botón
              for (let i = 1; i < botones.length; i++) {
                botones[i].remove();
              }
            }
          });

          // Luego insertar botones donde falten
          insertarBotonesNA28();
        }, 100);
      }
    });
  });

  const resultsList = document.getElementById('results');
  if (resultsList) {
    observer.observe(resultsList, { childList: true, subtree: true });
  }
});
