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
    },
    "1Tesalonicenses":{
       1: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/1tesalonicenses/1tesa1.html",
       2: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/1tesalonicenses/1tesa2.html",
       3: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/1tesalonicenses/1tesa3.html",
       4: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/1tesalonicenses/1tesa4.html",
       5: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/1tesalonicenses/1tesa5.html"
     },
      "2Tesalonicenses":{
       1: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/2tesalonicenses/2tesa1.html",
       2: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/2tesalonicenses/2tesa2.html",
       3: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/2tesalonicenses/2tesa3.html"
     },
     "Marcos":{
       1: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs1.html",
       3: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs3.html",
       4: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs4.html",
      5: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs5.html",
      6: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs6.html",
      7: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs7.html",
      8: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs8.html",
      9: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs9.html",
      10: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs10.html",
      11: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs11.html",
      12: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs12.html",
      13: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs13.html",
      14: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs14.html",
      15: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs15.html",
      16: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs16.html"
     },
"Romanos":{
       1: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom1.html",
       2: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom2.html",
       3: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom3.html",
       4: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom4.html",
       5: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom5.html",
       6: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom6.html",
       7: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom7.html",
       8: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom8.html",
       9: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom9.html",
       10: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom10.html",
       11: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom11.html",
       12: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom12.html",
       13: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom13.html",
       14: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom14.html",
       15: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom15.html",
       16: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom16.html"
     },
     "Apocalipsis":{
       1: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc1.html",
       2: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc2.html",
       3: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc3.html",
       4: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc4.html",
       5: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc5.html",
       6: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc6.html",
       7: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc7.html",
       8: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc8.html",
       9: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc9.html",
       10: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc10.html",
       11: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc11.html",
       12: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc12.html",
       13: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc13.html",
       14: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc14.html",
       15: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc15.html",
       16: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc16.html",
       17: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc17.html",
       18: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc18.html",
       19: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc19.html",
       20: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc20.html",
       21: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc21.html",
       22: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc22.html"
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

      // 🔧 Asegurar visibilidad del contenido cargado
      contenedor.style.color = "white";
      contenedor.style.backgroundColor = "black";
      contenedor.style.display = "block";
      contenedor.style.padding = "1rem";
      contenedor.style.overflowY = "auto";  // útil si el contenido es largo
      contenedor.style.maxHeight = "calc(100vh - 100px)"; // ajustar según tu diseño
    })
    .catch(error => {
      console.error("Error en fetch:", error);
      contenedor.innerHTML = `<p style='color:white;'>Error al cargar los comentarios: ${error.message}</p>`;
    });
}

