document.addEventListener('DOMContentLoaded', function () {
  // Custom tooltip functionality
  const tooltipElements = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );

  tooltipElements.forEach((el) => {
    const title = el.getAttribute('title');
    if (!title) return;

    // Remove the title attribute to prevent default browser tooltips
    el.removeAttribute('title');
    el.setAttribute('data-tooltip', title);

    // Add event listeners for showing/hiding tooltip
    el.addEventListener('mouseenter', showTooltip);
    el.addEventListener('mouseleave', hideTooltip);
    el.addEventListener('click', hideTooltip);
  });

  // Hide tooltips on any click in the document
  document.addEventListener('click', hideAllTooltips);

  // Detectar el tamaño de pantalla inicial y configurar la UI
  checkScreenSize();

  // Manejador para Aparato Crítico (versión móvil)
  // MOVED TO sidebars-movil.js

  // Manejador para Biblia Paralela (versión móvil)
  // MOVED TO sidebars-movil.js

  /**
   *
   *
   *
   *
   *
   *
   *
   */

  // Sidebar Libros (DESKTOP)
  if (document.getElementById('buttonLibrosBiblia')) {
    document
      .getElementById('buttonLibrosBiblia')
      .addEventListener('click', function (e) {
        e.preventDefault();
        toggleLeftSidebar('sidebarLibros', 'buttonLibrosBiblia');
      });
  }

  // Sidebar Biblias Paralelas (DESKTOP)
  if (document.getElementById('buttonBibliasParalelas')) {
    document
      .getElementById('buttonBibliasParalelas')
      .addEventListener('click', function (e) {
        e.preventDefault();
        toggleLeftSidebar('sidebarBibliaParalela', 'buttonBibliasParalelas');

        // Inicializar los selectores si no se ha hecho
        if (!document.getElementById('versionSelect').options.length) {
          fillBooksForVersion('RVR1960');
        }
      });
  }

  // Sidebar Comentarios (DESKTOP)
  if (document.getElementById('buttonComentarios')) {
    document
      .getElementById('buttonComentarios')
      .addEventListener('click', function (e) {
        e.preventDefault();
        toggleRightSidebar('sidebarComentarios', 'buttonComentarios');

        // Cargar comentarios si está abierto
        let sidebarAparatoCritico =
          document.getElementById('sidebarComentarios');
        if (sidebarAparatoCritico.classList.contains('active')) {
          if (window.currentBook && window.currentChapter) {
            cargarComentariosCapitulo(
              window.currentBook,
              window.currentChapter
            );
          }
        }
      });
  }

  // Sidebar Aparato Crítico (DESKTOP)
  if (document.getElementById('buttonAparatoCritico')) {
    document
      .getElementById('buttonAparatoCritico')
      .addEventListener('click', function (e) {
        e.preventDefault();
        toggleRightSidebar('sidebarAparatoCritico', 'buttonAparatoCritico');
      });
  }

  /**
   *
   *
   *
   *
   *
   *
   *
   *
   */

  // Add touch events for sliding the sidebars
  // MOVED TO sidebars-movil.js

  // Escuchar cambios de tamaño de pantalla
  window.addEventListener('resize', checkScreenSize);

  // Add click handler to the overlay (body::after) to close sidebars
  /*  document.body.addEventListener('click', function (e) {
    const isMovile = window.innerWidth < 992;
    const resultsContainer = document.getElementById('results');

    // Si haces clic en el overlay (no en un sidebarAparatoCritico o su contenido)
    if (document.body.classList.contains('sidebar-active')) {
      // Verificar si el clic es fuera de cualquier sidebarAparatoCritico y no en elementos de navegación
      if (
        !e.target.closest('#sidebarAparatoCritico') &&
        !e.target.closest('#sidebarBibliaParalela') &&
        !e.target.closest('#sidebarComentarios') &&
        !e.target.closest('#sidebarResultadosBusqueda') &&
        !e.target.closest('.bottom-nav') &&
        !e.target.closest('#leftNav')
      ) {
        // Cerrar todos los sidebars
        const sidebars = document.querySelectorAll(
          '#sidebarAparatoCritico, #sidebarBibliaParalela, #sidebarComentarios, #sidebarResultadosBusqueda'
        );

        sidebars.forEach((el) => {
          el.classList.remove('active');
        });

        // Quitar overlay
        document.body.classList.remove('sidebar-active');

        // Resetear márgenes si estamos en desktop
        if (!isMovile && resultsContainer) {
          resultsContainer.classList.remove(
            'sidebarAparatoCritico-biblia-active'
          );
          resultsContainer.classList.remove(
            'sidebarAparatoCritico-right-active'
          );
        }
      }
    }
  }); */
});

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// Function to toggle a sidebarAparatoCritico appropriately based on screen size
function toggleLeftSidebar(sidebarId, buttonId) {
  const sidebar = document.getElementById(sidebarId);
  const button = document.getElementById(buttonId);
  const isMovile = window.innerWidth < 992;

  if (sidebar) {
    // Cerrar los otros sidebars (lado izquierdo)
    document
      .querySelectorAll('#sidebarLibros, #sidebarBibliaParalela')
      .forEach((el) => {
        if (el.id !== sidebarId) {
          el.classList.remove('active');
        }
      });

    // Mostrar/ocultar el sidebar
    sidebar.classList.toggle('active');

    document
      .querySelectorAll('#buttonLibrosBiblia, #buttonBibliasParalelas')
      .forEach((el) => {
        el.parentElement.classList.remove('active-nav-item');
        if (sidebar.classList.contains('active')) {
          button.parentElement.classList.add('active-nav-item');
        }
      });

    if (isMovile)
      if (sidebarAparatoCritico.classList.contains('active')) {
        document.body.classList.add('sidebar-active');
      } else {
        const anyActive = document.querySelector(
          '#sidebarAparatoCritico.active, #sidebarBibliaParalela.active, #sidebarComentarios.active, #sidebarResultadosBusqueda.active, #sidebarLibros.active'
        );
        if (!anyActive) {
          document.body.classList.remove('sidebar-active');
        }
      }
  }
}

function toggleRightSidebar(sidebarId, buttonId) {
  const sidebar = document.getElementById(sidebarId);
  const button = document.getElementById(buttonId);
  const isMovile = window.innerWidth < 992;

  if (sidebar) {
    // Cerrar todos los otros sidebars
    document
      .querySelectorAll('#sidebarAparatoCritico, #sidebarComentarios')
      .forEach((el) => {
        if (el.id !== sidebarId) {
          el.classList.remove('active');
        }
      });

    // Mostrar/ocultar el sidebar
    sidebar.classList.toggle('active');

    // Limpiar todas las clases de navegación activas
    document
      .querySelectorAll(
        '.nav-item:has(#buttonAparatoCritico), .nav-item:has(#buttonComentarios)'
      )
      .forEach((el) => {
        el.classList.remove('active-nav-item');
      });

    // Agregar la clase active-nav-item solo al botón correspondiente si el sidebar está activo
    if (sidebar.classList.contains('active')) {
      const navItem = document.querySelector(`.nav-item:has(#${buttonId})`);
      if (navItem) {
        navItem.classList.add('active-nav-item');
      }
    }

    // Gestionar específicamente el aparato crítico - IMPORTANTE: después de manejar las clases
    if (sidebarId === 'sidebarAparatoCritico') {
      if (sidebar.classList.contains('active')) {
        // Si está abriendo el aparato crítico, sincronizar el botón del versículo
        setTimeout(() => {
          if (typeof sincronizarBotonActivo === 'function') {
            sincronizarBotonActivo();

            // Llamar nuevamente después de un breve momento para asegurar que se mantiene
            setTimeout(() => {
              sincronizarBotonActivo();

              // Asegurar que el botón de navegación permanece activo
              const navItem = document.querySelector(
                `.nav-item:has(#${buttonId})`
              );
              if (navItem) {
                navItem.classList.add('active-nav-item');
              }
            }, 100);
          }
        }, 50);
      } else {
        // Si está cerrando el aparato crítico, desactivar todos los botones de versículos
        document.querySelectorAll('.btn-na28.active').forEach((btn) => {
          btn.classList.remove('active');
        });
      }
    }

    if (isMovile) {
      if (sidebar.classList.contains('active')) {
        document.body.classList.add('sidebar-active');
      } else {
        const anyActive = document.querySelector(
          '#sidebarAparatoCritico.active, #sidebarBibliaParalela.active, #sidebarComentarios.active, #sidebarResultadosBusqueda.active, #sidebarLibros.active'
        );
        if (!anyActive) {
          document.body.classList.remove('sidebar-active');
        }
      }
    }
  }
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 * Custom Tooltip Functions
 */
function showTooltip(e) {
  // Remove any existing tooltips
  hideAllTooltips();

  const text = this.getAttribute('data-tooltip');
  if (!text) return;

  // Create tooltip element
  const tooltip = document.createElement('div');
  tooltip.className = 'custom-tooltip';
  tooltip.textContent = text;
  document.body.appendChild(tooltip);

  // Position the tooltip
  const rect = this.getBoundingClientRect();
  const placement = this.getAttribute('data-bs-placement') || 'right';

  // Set the placement attribute for CSS arrows
  tooltip.setAttribute('data-placement', placement);

  if (placement === 'right') {
    tooltip.style.left = rect.right + 5 + 'px';
    tooltip.style.top =
      (rect.top + rect.bottom) / 2 - tooltip.offsetHeight / 2 + 'px';
  } else {
    // Default to top placement
    tooltip.style.left =
      rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
  }

  // Show with fade-in effect
  setTimeout(() => {
    tooltip.classList.add('visible');
  }, 10);
}

function hideTooltip() {
  hideAllTooltips();
}

function hideAllTooltips() {
  const tooltips = document.querySelectorAll('.custom-tooltip');
  tooltips.forEach((tooltip) => {
    tooltip.classList.remove('visible');
    setTimeout(() => {
      if (tooltip.parentNode) {
        tooltip.parentNode.removeChild(tooltip);
      }
    }, 200);
  });
}

function toggleResultsSidebarNotch() {
  const sidebar = document.getElementById('sidebarResultadosBusqueda');

  if (!sidebar) return;
}

// Add event listener for the notch when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebarResultadosBusqueda');

  if (sidebar) {
    // Create a click handler specifically for the notch
    const handleNotchClick = function (event) {
      // Check if the click is on the notch (::after pseudo-element)
      // We can't directly access pseudo-elements, so we check the click position
      const rect = sidebar.getBoundingClientRect();
      const clickY = event.clientY;
      const notchArea = rect.top + 20; // Notch is at top ~8px + some margin

      if (clickY <= notchArea) {
        toggleResultsSidebarNotch();
        event.stopPropagation();
      }
    };

    sidebar.addEventListener('click', handleNotchClick);
  }
});
