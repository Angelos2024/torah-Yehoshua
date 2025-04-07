// Funciones auxiliares para la web
document.addEventListener('DOMContentLoaded', checkScreenSize);
// Función para mostrar/ocultar elementos según el tamaño de pantalla
function checkScreenSize() {
  const width = window.innerWidth;
  isMovileView = width < 992;

  // Elementos específicos de móvil
  const MovileElements = [
    document.getElementById('fixedHeaderContainer'),
    document.querySelector('.bottom-nav'),
  ];

  // Elementos específicos de desktop
  const desktopElements = [
    document.getElementById('leftNav'),
    document.getElementById('sidebarLibros'),
  ];

  // Elementos adicionales de desktop
  const desktopFontElements = [
    document.getElementById('fuentess'),
    document.getElementById('opcionesContainer'),
  ];

  // Mostrar/ocultar elementos según vista
  MovileElements.forEach((el) => {
    if (el) el.style.display = isMovileView ? 'block' : 'none';
  });

  // Menú inferior es flex, no block
  if (document.querySelector('.bottom-nav')) {
    document.querySelector('.bottom-nav').style.display = isMovileView
      ? 'flex'
      : 'none';
  }

  desktopElements.forEach((el) => {
    if (el) el.style.display = isMovileView ? 'none' : 'block';
  });

  // Manejar elementos de fuente de desktop
  desktopFontElements.forEach((el) => {
    if (el) {
      if (el.id === 'fuentess') {
        el.style.display = isMovileView ? 'none' : 'inline-block';
      } else {
        if (el.id === 'opcionesContainer' && el.style.display !== 'block') {
          el.style.display = 'none'; // Mantener oculto a menos que se haga clic
        }
      }
    }
  });
}

/**
 * Copia el contenido seleccionado al portapapeles
 */
function copiarContenido() {
  const seleccionados = document.querySelectorAll('#results li.selected');

  if (seleccionados.length === 0) {
    alert('No hay versículos seleccionados para copiar.');
    return;
  }

  let texto = '';
  seleccionados.forEach((li) => {
    texto += li.textContent.trim() + '\n\n';
  });

  // Crear un elemento de texto temporal
  const elemento = document.createElement('textarea');
  elemento.value = texto;
  document.body.appendChild(elemento);
  elemento.select();
  document.execCommand('copy');
  document.body.removeChild(elemento);

  // Mostrar mensaje
  mostrarMensajeCopia('Versículos copiados al portapapeles');
}

/**
 * Muestra un mensaje flotante en la página
 * @param {string} mensaje - El mensaje a mostrar
 */
function mostrarMensajeCopia(mensaje) {
  const mensajeDiv = document.createElement('div');
  mensajeDiv.className = 'copy-message';
  mensajeDiv.textContent = mensaje;
  document.body.appendChild(mensajeDiv);

  setTimeout(() => {
    mensajeDiv.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(mensajeDiv);
    }, 300);
  }, 1500);
}

function abrirModal(imageUrl) {
  modal.style.display = 'block';
  modalImg.src = imageUrl; // Establece la imagen del modal con la URL proporcionada
}

function cerrarModal() {
  modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  const buscarLink = document.getElementById('buscarLink');
  const searchInput = document.getElementById('searchInput');
  const searchBar = document.querySelector('.search-bar');
  const clearSearchButton = document.getElementById('clearSearchButton');

  // Handle clear button functionality
  if (clearSearchButton && searchInput) {
    // Show/hide the clear button based on input content
    searchInput.addEventListener('input', function () {
      clearSearchButton.style.display = this.value ? 'flex' : 'none';
    });

    // Clear the input when the button is clicked
    clearSearchButton.addEventListener('click', function () {
      searchInput.value = '';
      this.style.display = 'none';
      searchInput.focus();
    });

    // Check if input already has content when page loads
    if (searchInput.value) {
      clearSearchButton.style.display = 'flex';
    }
  }

  if (buscarLink && searchInput && searchBar) {
    buscarLink.addEventListener('click', function (e) {
      e.preventDefault();
      searchInput.focus();

      // Apply the glowing effect when buscarLink is clicked
      searchBar.classList.add('glowing');

      // Remove the animation class after it completes 2 iterations
      const handleAnimationEnd = function () {
        searchBar.classList.remove('glowing');
        searchBar.removeEventListener('animationend', handleAnimationEnd);
      };

      searchBar.addEventListener('animationend', handleAnimationEnd);
    });
  }
});

function hideWelcomeMessage() {
  welcomeMessage.style.display = 'none';
}
