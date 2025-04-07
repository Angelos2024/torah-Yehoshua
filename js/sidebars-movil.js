document.addEventListener('DOMContentLoaded', function () {
  // Add resize styles
  addResizeStyles();

  // Modal de libros - abrir modal y mostrar libros
  document.getElementById('OpenMod').addEventListener('click', () => {
    let modal = document.getElementById('fullscreenModal');
    let librosContainer = document.getElementById('librosContainer');
    let capitulosContainer = document.getElementById('capitulosContainer');

    // Restaurar la vista inicial
    librosContainer.style.display = 'block'; // Mostrar la lista de libros
    capitulosContainer.style.display = 'none'; // Ocultar los capítulos previos

    // Mostrar el modal
    modal.style.display = 'flex';
  });

  // Cerrar modal al hacer clic en el botón cerrar
  document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('fullscreenModal').style.display = 'none';
  });

  // Manejador para los enlaces de libros
  document.querySelectorAll('#librosContainer a').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const libro = this.getAttribute('data-libro');
      showChaptersForBook(libro);
    });
  });

  // Manejador para Biblia Paralela (versión móvil)
  document
    .getElementById('bttBibliaParalelaMov')
    .addEventListener('click', function (e) {
      e.preventDefault();
      toggleResponsiveSidebar('sidebarBibliaParalela');
    });

  // Manejador para Comentarios (versión móvil)
  document
    .getElementById('bttComentariosMov')
    .addEventListener('click', function (e) {
      e.preventDefault();
      toggleResponsiveSidebar('sidebarComentarios');
    });

  // Manejador para Aparato Crítico (versión móvil)
  document
    .getElementById('bttAparatoCriticoMov')
    .addEventListener('click', function (e) {
      e.preventDefault();
      toggleResponsiveSidebar('sidebarAparatoCritico');
    });

  setupSwipeEvents();
});

function setupSwipeEvents() {
  const sidebars = document.querySelectorAll(
    '#sidebarAparatoCritico, #sidebarBibliaParalela, #sidebarComentarios, #sidebarResultadosBusqueda'
  );

  sidebars.forEach((sidebar) => {
    let startY, startHeight, startTop;
    let isDragging = false;

    // Add touch/mouse events directly to the sidebar
    sidebar.addEventListener('touchstart', handleStart);
    sidebar.addEventListener('mousedown', handleStart);

    // Global events for move and end
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchend', handleEnd);
    document.addEventListener('mouseup', handleEnd);

    function handleStart(e) {
      // Check if we're clicking/touching in the handle area (top 30px)
      const touchY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
      const rect = sidebar.getBoundingClientRect();
      const isInHandleArea = touchY <= rect.top + 30;

      if (!isInHandleArea) return;

      // Prevent default to avoid text selection
      e.preventDefault();

      // Mark the time for click detection
      sidebar.setAttribute('data-touch-start', Date.now());

      // Prepare for drag
      startY = touchY;
      startHeight = sidebar.offsetHeight;
      startTop =
        sidebar.offsetTop || parseInt(getComputedStyle(sidebar).top) || 0;

      // Add class to indicate potential drag (only affects transitions)
      sidebar.classList.add('sidebar-resizing');
    }

    function handleMove(e) {
      // Only handle if we started in the handle area
      if (!sidebar.classList.contains('sidebar-resizing')) return;

      const touchY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
      const deltaY = touchY - startY;

      // If we've moved a significant amount, it's a drag
      if (Math.abs(deltaY) > 5) {
        isDragging = true;
      }

      // Only proceed with drag logic if we're actually dragging
      if (isDragging) {
        const isMovile = window.innerWidth < 992;

        if (isMovile) {
          // Manejo especial para el sidebar de resultados en estado semi-hidden
          if (
            sidebar.id === 'sidebarResultadosBusqueda' &&
            sidebar.classList.contains('semi-hidden')
          ) {
            // Si se arrastra hacia arriba, cambiarlo a activo
            if (deltaY < -20) {
              sidebar.classList.remove('semi-hidden');
              sidebar.classList.add('active');
              isDragging = false;
              return;
            }
          }

          // Calculate new top position and height
          let newTop = Math.max(0, startTop + deltaY);
          // Don't allow the sidebar to go below 150px from the bottom
          const maxTop = window.innerHeight - 150;
          newTop = Math.min(newTop, maxTop);

          // Set the new size and position
          sidebar.style.top = `${newTop}px`;
          sidebar.style.height = `calc(100% - ${newTop}px - 60px)`;

          // For all sidebars, close when dragged very low
          if (newTop > window.innerHeight - 200) {
            if (sidebar.id === 'sidebarResultadosBusqueda') {
              // Para el sidebar de resultados, cambiarlo a semi-hidden
              sidebar.classList.remove('active');
              // Clear any custom styles when adding semi-hidden class
              sidebar.style.top = '';
              sidebar.style.height = '';
              sidebar.classList.add('semi-hidden');
            } else {
              // Para otros sidebars, cerrarlos completamente
              sidebar.classList.remove('active');
              sidebar.style.top = '';
              sidebar.style.height = '';
            }
            isDragging = false;
          }

          e.preventDefault();
        }
      }
    }

    function handleEnd(e) {
      // Only process if we started in the handle area
      if (!sidebar.classList.contains('sidebar-resizing')) return;

      // Check if this was a quick tap (click) or a drag
      const touchEndTime = Date.now();
      const touchStartTime = parseInt(
        sidebar.getAttribute('data-touch-start') || '0'
      );
      const touchDuration = touchEndTime - touchStartTime;

      // If it was a short tap and we didn't drag, treat as a click
      if (touchDuration < 300 && !isDragging) {
        // Para el sidebar de resultados, manejar el estado semi-hidden
        if (sidebar.id === 'sidebarResultadosBusqueda') {
          if (sidebar.classList.contains('active')) {
            // Si está activo, cambiarlo a semi-hidden
            sidebar.classList.remove('active');
            // Use transform to move to semi-hidden smoothly
            sidebar.style.transform = 'translateY(calc(100% - 110px))';
            // Clear custom styles
            sidebar.style.top = '';
            sidebar.style.height = '';
            sidebar.classList.add('semi-hidden');
          } else if (sidebar.classList.contains('semi-hidden')) {
            // Si está semi-hidden, activarlo completamente
            sidebar.classList.remove('semi-hidden');
            sidebar.classList.add('active');
            sidebar.style.transform = 'translateY(0)';
          } else {
            // Si no está ni activo ni semi-hidden, activarlo
            sidebar.classList.add('active');
            sidebar.style.top = '';
            sidebar.style.height = '';
            sidebar.style.transform = 'translateY(0)';
          }
        } else {
          // Para otros sidebars - comportamiento normal
          if (sidebar.classList.contains('active')) {
            // If currently active, close it with smooth transition
            sidebar.classList.remove('active');
            // Clear custom positions after transition completes
            setTimeout(() => {
              sidebar.style.top = '';
              sidebar.style.height = '';
            }, 300); // Match transition duration
          } else {
            // If inactive, open it
            sidebar.classList.add('active');
            sidebar.style.top = '';
            sidebar.style.height = '';
          }
        }
      }

      // Reset drag state
      isDragging = false;
      sidebar.classList.remove('sidebar-resizing');
    }
  });
}

// Add resize styles
function addResizeStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .sidebar-resizing {
      transition: none !important;
    }
    
    /* Ensure transitions work during dragging */
    @media (max-width: 991px) {
      #sidebarAparatoCritico,
      #sidebarBibliaParalela,
      #sidebarComentarios,
      #sidebarResultadosBusqueda {
        position: fixed;
        bottom: 0;
        transform: translateY(100%); /* Off-screen initially */
        height: 50%;
        transition: transform 0.3s ease, top 0s, height 0s; /* Ensure immediate reset for top/height */
      }
      
      #sidebarAparatoCritico.active,
      #sidebarBibliaParalela.active,
      #sidebarComentarios.active,
      #sidebarResultadosBusqueda.active {
        transform: translateY(0); /* On-screen when active */
      }
      
      /* Estado semi-hidden solo para el sidebar de resultados */
      #sidebarResultadosBusqueda.semi-hidden {
        transform: translateY(calc(100% - 110px)); /* Solo mostrar parte superior */
      }
    }
  `;
  document.head.appendChild(style);
}

function toggleResponsiveSidebar(sidebar) {
  const sidebarBibliaParalela = document.getElementById(
    'sidebarBibliaParalela'
  );
  const sidebarComentarios = document.getElementById('sidebarComentarios');
  const sidebarAparatoCritico = document.getElementById(
    'sidebarAparatoCritico'
  );
  const sidebarResultadosBusqueda = document.getElementById(
    'sidebarResultadosBusqueda'
  );

  const bibliaParalelaMov = document.getElementById('bttBibliaParalelaMov');
  const comentariosMov = document.getElementById('bttComentariosMov');
  const aparatoCriticoMov = document.getElementById('bttAparatoCriticoMov');

  // First remove active class from all buttons
  bibliaParalelaMov.classList.remove('active-nav-item');
  comentariosMov.classList.remove('active-nav-item');
  aparatoCriticoMov.classList.remove('active-nav-item');

  if (sidebar === 'sidebarBibliaParalela') {
    // Check current state
    const isCurrentlyActive =
      sidebarBibliaParalela.classList.contains('active');

    // Close other sidebars first
    closeSidebar(sidebarComentarios);
    closeSidebar(sidebarAparatoCritico);

    // Para sidebarResultadosBusqueda, asegurarnos de que solo está semi-oculto
    if (sidebarResultadosBusqueda.classList.contains('active')) {
      sidebarResultadosBusqueda.classList.remove('active');
      // Clear any custom styles to ensure proper semi-hidden behavior
      sidebarResultadosBusqueda.style.top = '';
      sidebarResultadosBusqueda.style.height = '';
      sidebarResultadosBusqueda.classList.add('semi-hidden');
    }

    if (isCurrentlyActive) {
      // If it's active, we're closing it
      // Simply remove the active class to let CSS transitions handle the animation
      sidebarBibliaParalela.classList.remove('active');
      // Clear custom positions after a small delay to ensure smooth transition
      setTimeout(() => {
        sidebarBibliaParalela.style.top = '';
        sidebarBibliaParalela.style.height = '';
      }, 300); // Match transition duration
    } else {
      // If it's not active, we're opening it
      sidebarBibliaParalela.classList.add('active');
      sidebarBibliaParalela.style.top = '';
      sidebarBibliaParalela.style.height = '';
      bibliaParalelaMov.classList.add('active-nav-item');
    }
  } else if (sidebar === 'sidebarComentarios') {
    // Check current state
    const isCurrentlyActive = sidebarComentarios.classList.contains('active');

    // Close other sidebars first
    closeSidebar(sidebarBibliaParalela);
    closeSidebar(sidebarAparatoCritico);

    // Para sidebarResultadosBusqueda, asegurarnos de que solo está semi-oculto
    if (sidebarResultadosBusqueda.classList.contains('active')) {
      sidebarResultadosBusqueda.classList.remove('active');
      // Clear any custom styles to ensure proper semi-hidden behavior
      sidebarResultadosBusqueda.style.top = '';
      sidebarResultadosBusqueda.style.height = '';
      sidebarResultadosBusqueda.classList.add('semi-hidden');
    }

    if (isCurrentlyActive) {
      // If it's active, we're closing it
      // Simply remove the active class to let CSS transitions handle the animation
      sidebarComentarios.classList.remove('active');
      // Clear custom positions after a small delay to ensure smooth transition
      setTimeout(() => {
        sidebarComentarios.style.top = '';
        sidebarComentarios.style.height = '';
      }, 300); // Match transition duration
    } else {
      // If it's not active, we're opening it
      sidebarComentarios.classList.add('active');
      sidebarComentarios.style.top = '';
      sidebarComentarios.style.height = '';
      comentariosMov.classList.add('active-nav-item');
    }
  } else if (sidebar === 'sidebarAparatoCritico') {
    // Check current state
    const isCurrentlyActive =
      sidebarAparatoCritico.classList.contains('active');

    // Close other sidebars first
    closeSidebar(sidebarBibliaParalela);
    closeSidebar(sidebarComentarios);

    // Para sidebarResultadosBusqueda, asegurarnos de que solo está semi-oculto
    if (sidebarResultadosBusqueda.classList.contains('active')) {
      sidebarResultadosBusqueda.classList.remove('active');
      // Clear any custom styles to ensure proper semi-hidden behavior
      sidebarResultadosBusqueda.style.top = '';
      sidebarResultadosBusqueda.style.height = '';
      sidebarResultadosBusqueda.classList.add('semi-hidden');
    }

    if (isCurrentlyActive) {
      // If it's active, we're closing it
      // Simply remove the active class to let CSS transitions handle the animation
      sidebarAparatoCritico.classList.remove('active');
      // Clear custom positions after a small delay to ensure smooth transition
      setTimeout(() => {
        sidebarAparatoCritico.style.top = '';
        sidebarAparatoCritico.style.height = '';
      }, 300); // Match transition duration
    } else {
      // If it's not active, we're opening it
      sidebarAparatoCritico.classList.add('active');
      sidebarAparatoCritico.style.top = '';
      sidebarAparatoCritico.style.height = '';
      aparatoCriticoMov.classList.add('active-nav-item');
    }
  }
}

// Helper function to close a sidebar and clear its inline styles
function closeSidebar(sidebar) {
  // Tratar de manera especial el sidebar de resultados de búsqueda
  if (sidebar.id === 'sidebarResultadosBusqueda') {
    // Clear any custom styles first
    sidebar.style.top = '';
    sidebar.style.height = '';

    // Si ya tiene la clase semi-hidden, quitarla para mostrar completamente
    if (sidebar.classList.contains('semi-hidden')) {
      sidebar.classList.remove('semi-hidden');
      sidebar.classList.add('active');
    } else {
      // Si no, cambiar a estado semi-oculto en vez de cerrar completamente
      sidebar.classList.remove('active');
      sidebar.classList.add('semi-hidden');
    }
  } else {
    // Comportamiento normal para los otros sidebars
    sidebar.classList.remove('active');
    sidebar.style.top = '';
    sidebar.style.height = '';
  }
}

/**
 * Muestra los capítulos disponibles para un libro seleccionado
 * @param {string} libro - El nombre del libro seleccionado
 */
function showChaptersForBook(libro) {
  const librosContainer = document.getElementById('librosContainer');
  const capitulosContainer = document.getElementById('capitulosContainer');

  // Ocultar la lista de libros
  librosContainer.style.display = 'none';

  // Limpiar y mostrar el contenedor de capítulos
  capitulosContainer.innerHTML = '';
  capitulosContainer.style.display = 'block';

  // Crear un contenedor para la cabecera
  const headerContainer = document.createElement('div');
  headerContainer.className = 'chapters-header';

  // Botón para volver a la lista de libros (solo ícono)
  const backButton = document.createElement('button');
  backButton.innerHTML = '<i class="fas fa-arrow-left"></i>';
  backButton.className = 'back-icon-button';
  backButton.addEventListener('click', function () {
    capitulosContainer.style.display = 'none';
    librosContainer.style.display = 'block';
  });
  headerContainer.appendChild(backButton);

  // Título del libro en el medio
  const bookTitle = document.createElement('h3');
  bookTitle.textContent = libro;
  headerContainer.appendChild(bookTitle);

  capitulosContainer.appendChild(headerContainer);

  // Contenedor de los capítulos
  const chaptersGrid = document.createElement('div');
  chaptersGrid.className = 'chapters-grid';

  // Determinar el número de capítulos según el libro
  let numCapitulos = 0;
  switch (libro) {
    case 'Marcos':
      numCapitulos = 16;
      break;
    case 'Romanos':
      numCapitulos = 16;
      break;
    case 'Gálatas':
      numCapitulos = 6;
      break;
    case '1Tesalonicenses':
      numCapitulos = 5;
      break;
    case '2Tesalonicenses':
      numCapitulos = 3;
      break;
    case 'Hebreos':
      numCapitulos = 13;
      break;
    case 'Apocalipsis':
      numCapitulos = 22;
      break;
    default:
      numCapitulos = 1;
  }

  // Crear un botón para cada capítulo
  for (let i = 1; i <= numCapitulos; i++) {
    const chapButton = document.createElement('a');
    chapButton.textContent = i;
    chapButton.href = '#';
    chapButton.setAttribute('data-capitulo', i);
    chapButton.addEventListener('click', function (e) {
      e.preventDefault();
      // Cerrar el modal
      document.getElementById('fullscreenModal').style.display = 'none';
      // Cargar el capítulo seleccionado
      showChapter(libro, i);
    });
    chaptersGrid.appendChild(chapButton);
  }

  capitulosContainer.appendChild(chaptersGrid);
}

/**
 * Carga y muestra el capítulo seleccionado
 * @param {string} libro - El nombre del libro
 * @param {number} capitulo - El número de capítulo
 */
function showChapter(libro, capitulo) {
  // Usar la función showFullChapter que ya existe en content-loader.js
  // Esta función carga y muestra el capítulo completo
  showFullChapter(libro, capitulo);

  // Ocultar el mensaje de bienvenida si todavía está visible
  hideWelcomeMessage();
}
