function cargarComentariosCapitulo(libro, capitulo) {
  console.log(`Intentando cargar: Libro=${libro}, Capítulo=${capitulo}`);

  const comentariosURLs = {
    "Gálatas": {
      1: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas1.html",
      2: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas2.html",
       3: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas3.html",
        4: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas4.html",
         5: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas5.html",
          6: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas6.html"
    },
    "Hebreos": {
      1: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos1.html",
      2: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos2.html",
      3: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos3.html",
      4: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos4.html",
      5: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos5.html",
      6: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos6.html",
      7: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos7.html",
      8: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos8.html",
      9: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos9.html",
      10: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos10.html",
      11: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos11.html",
      12: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos12.html",
      13: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos13.html"
    }
  };

  const url = comentariosURLs[libro]?.[capitulo];
  console.log(`URL obtenida: ${url}`);

  const contenedor = document.getElementById("contenidoComentarios");
  if (!contenedor) {
    console.error("Error: No se encontró el contenedor con ID 'contenidoComentarios'");
    return;
  }

  if (!url) {
    contenedor.innerHTML = "<p>Comentarios no disponibles para este capítulo.</p>";
    return;
  }

  contenedor.innerHTML = "Cargando comentarios...";
  fetch(url)
    .then(response => {
      console.log(`Respuesta HTTP: ${response.status}`);
      if (!response.ok) {
        throw new Error(`Error al cargar el archivo: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      contenedor.innerHTML = data;
    })
    .catch(error => {
      console.error("Error en fetch:", error);
      contenedor.innerHTML = `<p>Error al cargar los comentarios: ${error.message}</p>`;
    });
}
