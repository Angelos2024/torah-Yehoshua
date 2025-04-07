function cargarComentariosCapitulo(libro, capitulo) {
  const comentariosContainer = document.getElementById('contenedorComentarios');

  // Check if the container exists
  if (!comentariosContainer) {
    console.error(
      'Error: El elemento con ID "contenedorComentarios" no existe en el DOM'
    );
    return; // Exit the function if the container doesn't exist
  }

  if (comentariosURLs[libro] && comentariosURLs[libro][capitulo]) {
    console.log('Comentarios encontrados: ', comentariosURLs[libro][capitulo]);
    fetch(comentariosURLs[libro][capitulo])
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('No hay comentarios disponibles.');
          } else {
            throw new Error(
              `Error ${response.status}: No se pudo cargar el comentario.`
            );
          }
        }
        return response.text();
      })
      .then((data) => {
        // Elimina el contenido de <style>
        const filteredData = data.replace(
          /<style[^>]*>[\s\S]*?<\/style>/gi,
          ''
        );
        comentariosContainer.scrollTop = 0;
        comentariosContainer.innerHTML = `${filteredData}`;
      })
      .catch((error) => {
        console.error('Error al cargar los comentarios:', error.message);
        comentariosContainer.innerHTML = `<p>No hay comentarios disponibles.</p>`;
      });
  } else {
    comentariosContainer.innerHTML = `<p>No hay comentarios disponibles.</p>`;
  }
}
