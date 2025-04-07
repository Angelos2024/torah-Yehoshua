//--------------------------------------------------------
//   Función para llenar el dropdown de capítulos
//--------------------------------------------------------
async function fillChaptersForBook(version, libro) {
  if (!urlsLibros[version] || !urlsLibros[version][libro]) {
    console.error(
      `❌ El libro "${libro}" no está disponible en la versión ${version}`
    );
    alert(`El libro "${libro}" no está disponible en la versión ${version}.`);
    return false;
  }

  if (!cacheLibros[version][libro]) {
    try {
      const urlJson = urlsLibros[version][libro];
      console.log(`📥 Cargando libro desde JSON: ${urlJson}`);

      const resp = await fetch(urlJson);
      if (!resp.ok)
        throw new Error(`❌ Error al cargar ${libro}: ${resp.status}`);

      cacheLibros[version][libro] = await resp.json();
    } catch (error) {
      console.error('🚨 Error al obtener los capítulos:', error);
      alert(`No se pudo cargar el libro "${libro}" en la versión ${version}.`);
      return false;
    }
  }

  capituloSelect.innerHTML = '';
  const totalCaps = cacheLibros[version][libro].length;

  for (let i = 1; i <= totalCaps; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    capituloSelect.appendChild(opt);
  }

  return true;
}

// Función para sincronizar versiones (requerida por el botón Sync)
function sincronizarVersion() {
  if (!window.currentBook || !window.currentChapter) {
    return;
  }

  const versionParalela = document.getElementById('versionSelect').value;
  let libroParalelo = window.currentBook;

  // Mapear los libros según la versión
  if (versionParalela === 'BTX4') {
    // Mapa de conversión para nombres especiales en BTX4
    const mapaNombres = {
      Gálatas: 'Galatas',
      Santiago: 'Jacobo',
      // Añadir más mapeos según sea necesario
    };

    if (mapaNombres[window.currentBook]) {
      libroParalelo = mapaNombres[window.currentBook];
    }
  }

  // Actualizar los selectores
  document.getElementById('versionSelect').value = versionParalela;
  fillBooksForVersion(versionParalela);

  setTimeout(() => {
    const libroSelect = document.getElementById('libroSelect');

    // Intentar encontrar el libro en la lista
    for (let i = 0; i < libroSelect.options.length; i++) {
      if (libroSelect.options[i].value === libroParalelo) {
        libroSelect.selectedIndex = i;
        libroSelect.value = libroParalelo;
        break;
      }
    }

    // Cargar capítulos para el libro seleccionado
    fillChaptersForBook(versionParalela, libroParalelo).then(() => {
      setTimeout(() => {
        // Seleccionar el capítulo
        document.getElementById('capituloSelect').value = window.currentChapter;

        // Cargar el contenido
        document.getElementById('btnCargar').click();
      }, 300);
    });
  }, 300);
}

//--------------------------------------------------------
// 9) "Sincronizar" para alinear con la versión hebrea
//--------------------------------------------------------
document.getElementById('btnSync').addEventListener('click', async () => {
  if (!currentBook || !currentChapter) {
    alert('No hay un libro/capítulo activo en la versión principal.');
    return;
  }

  const versionParalela = document.getElementById('versionSelect').value;

  // 🔹 Convertir el nombre del libro si es BTX4
  let libroParalelo = currentBook;

  if (versionParalela === 'BTX4') {
    const libroSinTildes = currentBook
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Quitar tildes
    const libroEncontrado = Object.keys(urlsLibros['BTX4']).find(
      (key) => key.toLowerCase() === libroSinTildes.toLowerCase()
    );

    if (libroEncontrado) {
      libroParalelo = libroEncontrado; // Usar el nombre correcto de BTX4
    } else {
      alert(`No se encontró el libro "${currentBook}" en la versión BTX4.`);
      return;
    }
  }

  fillBooksForVersion(versionParalela);

  setTimeout(async () => {
    document.getElementById('libroSelect').value = libroParalelo;
    const success = await fillChaptersForBook(versionParalela, libroParalelo);

    if (success) {
      document.getElementById('capituloSelect').value = currentChapter;
      document.getElementById('btnCargar').click();
    } else {
      alert(
        `No se pudo sincronizar ${currentBook} en la versión ${versionParalela}.`
      );
    }
  }, 300);
});

document.addEventListener('DOMContentLoaded', async () => {
  const versionPorDefecto = 'RVR1960'; // 📌 Define la versión por defecto
  versionSelect.value = versionPorDefecto; // 📌 Selecciona automáticamente RVR1960
  fillBooksForVersion(versionPorDefecto); // 📌 Llena la lista de libros

  setTimeout(async () => {
    // 📌 Si hay un libro predeterminado (por ejemplo, Mateo), carga sus capítulos
    let primerLibro = Object.keys(urlsLibros[versionPorDefecto])[0];
    if (primerLibro) {
      libroSelect.value = primerLibro;
      await fillChaptersForBook(versionPorDefecto, primerLibro);

      // 📌 Seleccionar automáticamente el primer capítulo si existe
      if (capituloSelect.options.length > 1) {
        capituloSelect.selectedIndex = 1; // Selecciona el primer capítulo
      }
    }
  }, 500); // 🔥 Pequeño retraso para asegurar que la lista de libros cargue primero
});

//--------------------------------------------------------
// Función para llenar el dropdown de libros
//--------------------------------------------------------
function fillBooksForVersion(version) {
  libroSelect.innerHTML = '';
  capituloSelect.innerHTML = `<option value="">-- Elige libro primero --</option>`;

  Object.keys(urlsLibros[version]).forEach((libro) => {
    let opt = document.createElement('option');
    opt.value = libro;
    opt.textContent = libro;
    libroSelect.appendChild(opt);
  });

  libroSelect.insertAdjacentHTML(
    'afterbegin',
    `<option value="" disabled selected>-- Elige libro --</option>`
  );
}

//--------------------------------------------------------
// Eventos para cambiar la versión y el libro
//--------------------------------------------------------
versionSelect.addEventListener('change', () =>
  fillBooksForVersion(versionSelect.value)
);
libroSelect.addEventListener('change', async () => {
  await fillChaptersForBook(versionSelect.value, libroSelect.value);
});

//--------------------------------------------------------
// Botón "Buscar" para cargar el capítulo
//--------------------------------------------------------
btnCargar.addEventListener('click', () => {
  const version = versionSelect.value;
  const libro = libroSelect.value;
  const capitulo = parseInt(capituloSelect.value, 10);

  if (!version || !libro || !capitulo) {
    resultadoBibliaParalela.innerHTML = `<p style="color:red;">Selecciona versión, libro y capítulo.</p>`;
    return;
  }

  const versos = cacheLibros[version][libro][capitulo - 1];
  let html = `<h5>${libro} ${capitulo} - ${version}</h5><ul>`;
  versos.forEach(
    (texto, idx) => (html += `<li><strong>${idx + 1}.</strong> ${texto}</li>`)
  );
  html += '</ul>';

  resultadoBibliaParalela.innerHTML = html;
});


