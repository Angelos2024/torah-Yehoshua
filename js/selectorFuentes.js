// Funciones para selector de fuente personalizado
function customSelect(id) {
  const selectBox = document.getElementById(id);
  if (!selectBox) return;

  const selectedDiv = selectBox.querySelector('.select-selected');
  const optionsDiv = selectBox.querySelector('.select-items');

  if (!selectedDiv || !optionsDiv) return;

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
  let fuenteSelect = document.getElementById('fuenteSelect');
  let tamanoSelect = document.getElementById('tamanoSelect');

  if (!fuenteSelect || !tamanoSelect) return;

  let fuente = fuenteSelect
    .querySelector('.select-selected')
    .getAttribute('data-value');
  let tamano = tamanoSelect
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

// Inicializar selectores de fuente si existen
try {
  if (document.getElementById('fuenteSelect')) customSelect('fuenteSelect');
  if (document.getElementById('tamanoSelect')) customSelect('tamanoSelect');
} catch (e) {
  console.error('Error al inicializar selectores de fuente:', e);
}

// Aplicar fuente guardada a los nuevos elementos
function aplicarFuenteGuardada() {
  const fuente = localStorage.getItem('fuenteSeleccionada') || 'Arial';
  const tamano = localStorage.getItem('tamanoSeleccionado') || '14px';
  aplicarEstilo(fuente, tamano);
}
