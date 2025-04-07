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
  'Gálatas 3:1': 'galatas3_1',
  'Gálatas 3:7': 'galatas3_7',
  'Gálatas 3:10': 'galatas3_10',
  'Gálatas 3:12': 'galatas3_12',
  'Gálatas 3:14': 'galatas3_14',
  'Gálatas 3:16': 'galatas3_16',
  'Gálatas 3:17': 'galatas3_17',
  'Gálatas 3:18': 'galatas3_18',
  'Gálatas 3:19': 'galatas3_19',
  'Gálatas 3:21': 'galatas3_21',
  'Gálatas 3:23': 'galatas3_23',
  'Gálatas 3:24': 'galatas3_24',
  'Gálatas 3:26': 'galatas3_26',
  'Gálatas 4:3': 'galatas4_3',
  'Gálatas 4:6': 'galatas4_6',
};

function cargarNA28(libro, capitulo, versiculo) {
  let sidebar = document.getElementById('sidebar');
  let claveVerso = `${libro} ${capitulo}:${versiculo}`;
  let archivoNA28 = na28Map[claveVerso];

  // Si el sidebar está abierto CON el mismo libro/capítulo/versículo...
  if (
    sidebar.classList.contains('active') &&
    sidebar.getAttribute('data-libro') === libro &&
    sidebar.getAttribute('data-capitulo') === capitulo &&
    sidebar.getAttribute('data-versiculo') === versiculo
  ) {
    // ...lo cerramos PERO conservamos el contenido
    sidebar.classList.remove('active');
    return; // Importante salir aquí
  }

  // Actualizar atributos para el nuevo verso
  sidebar.setAttribute('data-libro', libro);
  sidebar.setAttribute('data-capitulo', capitulo);
  sidebar.setAttribute('data-versiculo', versiculo);

  // Si no existe el archivo, mostrar mensaje
  if (!archivoNA28) {
    sidebar.innerHTML = `<h5>NA28</h5><p>No hay aparato crítico para ${libro} ${capitulo}:${versiculo}.</p>`;
    sidebar.classList.add('active');
    return;
  }

  // Construir la URL y fetch
  let url = `https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/na28/2ts1/${archivoNA28}.html`;
  console.log('📂 Cargando NA28 desde:', url);

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error('Archivo no encontrado');
      return response.text();
    })
    .then((data) => {
      sidebar.innerHTML = `${data}`;
      sidebar.classList.add('active'); // Mostrar el sidebar
    })
    .catch((error) => {
      console.error('❌ Error al cargar el aparato crítico:', error);
      sidebar.innerHTML = `<h5>NA28</h5><p>No hay comentarios disponibles.</p>`;
      sidebar.classList.add('active');
    });
}

function generarBotonNA28(libro, capitulo, versiculo) {
  return `<button class='na28-btn' onclick="cargarNA28('${libro}', '${capitulo}', '${versiculo}')">📖</button>`;
}

function insertarBotonesNA28() {
  document.querySelectorAll('#results li').forEach((verso) => {
    let libro = verso.getAttribute('data-libro');
    let capitulo = verso.getAttribute('data-capitulo');
    let versiculo = verso.getAttribute('data-versiculo');

    if (libro && capitulo && versiculo) {
      let botonNA28 = generarBotonNA28(libro, capitulo, versiculo);
      verso.innerHTML += botonNA28;
    }
  });
}

// 🔥 Asegurar que se ejecuta después de cargar los versículos
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(insertarBotonesNA28, 500); // Esperar medio segundo antes de ejecutarlo
});
