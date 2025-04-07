/**
 * Script para posicionar los botones de navegación
 * Los botones estarán a una distancia fija de los bordes del contenedor principal
 */
document.addEventListener('DOMContentLoaded', function () {
  const mainContainer = document.querySelector('.main-container');
  const prevPageButton = document.querySelector('.main-container .prev-page');
  const nextPageButton = document.querySelector('.main-container .next-page');
  const resultsContainer = document.getElementById('results');

  // Establece la distancia fija que quieres mantener desde los bordes (en píxeles)
  const MARGIN = 55;
  // Define el ancho de pantalla para considerar como pantalla pequeña
  const SMALL_SCREEN_WIDTH = 677;

  function updateButtonPositions() {
    if (!mainContainer || !prevPageButton || !nextPageButton) return;

    // Obtener la posición y dimensiones del contenedor principal
    const rect = mainContainer.getBoundingClientRect();

    // Verificar si es pantalla pequeña
    if (window.innerWidth < SMALL_SCREEN_WIDTH) {
      // En pantallas pequeñas, modificar el layout del contenedor principal
      mainContainer.style.flexDirection = 'column'; // Cambia a disposición en columna

      // Ajustar los botones de navegación
      prevPageButton.style.position = 'static'; // Quita el posicionamiento fijo
      nextPageButton.style.position = 'static';

      // Crear un nuevo contenedor para los botones si no existe
      let navButtonsRow = document.querySelector('.nav-buttons-row');
      if (!navButtonsRow) {
        navButtonsRow = document.createElement('div');
        navButtonsRow.className = 'nav-buttons-row';
        navButtonsRow.style.display = 'flex';
        navButtonsRow.style.justifyContent = 'space-between';
        navButtonsRow.style.width = '100%';
        navButtonsRow.style.marginBottom = '60px';
        // Mover el contenedor después del contenedor de resultados
        if (resultsContainer && resultsContainer.nextSibling) {
          mainContainer.insertBefore(
            navButtonsRow,
            resultsContainer.nextSibling
          );
        } else {
          mainContainer.appendChild(navButtonsRow);
        }
      }

      // Mover los botones al contenedor de fila
      navButtonsRow.appendChild(prevPageButton);
      navButtonsRow.appendChild(nextPageButton);

      // Restablecer estilos específicos que podrían interferir
      prevPageButton.style.left = 'auto';
      prevPageButton.style.top = 'auto';
      prevPageButton.style.transform = 'none';
      nextPageButton.style.right = 'auto';
      nextPageButton.style.top = 'auto';
      nextPageButton.style.transform = 'none';
    } else {
      // En pantallas grandes, restaurar el layout original
      mainContainer.style.flexDirection = 'row';

      // Eliminar el contenedor de fila si existe
      const navButtonsRow = document.querySelector('.nav-buttons-row');
      if (navButtonsRow) {
        // Mover los botones de vuelta a su posición original en el DOM
        mainContainer.appendChild(prevPageButton);
        mainContainer.appendChild(nextPageButton);

        if (navButtonsRow.parentNode) {
          navButtonsRow.parentNode.removeChild(navButtonsRow);
        }
      }

      // Restaurar el posicionamiento original
      prevPageButton.style.position = 'fixed';
      nextPageButton.style.position = 'fixed';
      prevPageButton.style.top = '50%';
      nextPageButton.style.top = '50%';
      prevPageButton.style.transform = 'translateY(-50%)';
      nextPageButton.style.transform = 'translateY(-50%)';

      // Posicionar los botones a una distancia fija de los bordes del contenedor
      prevPageButton.style.left = rect.left - MARGIN + 'px';
      nextPageButton.style.right =
        document.documentElement.clientWidth - rect.right - MARGIN + 'px';
    }
  }

  // Actualizar posiciones inicialmente
  updateButtonPositions();

  // Actualizar posiciones al cambiar el tamaño de la ventana
  window.addEventListener('resize', updateButtonPositions);

  // Actualizar posiciones al hacer scroll
  window.addEventListener('scroll', updateButtonPositions);
});
