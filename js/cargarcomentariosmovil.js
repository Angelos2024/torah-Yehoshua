function cargarComentariosCapitulo(libro, capitulo) {
    console.log(`Intentando cargar comentarios: Libro=${libro}, Capítulo=${capitulo}`);

    const comentariosURLs = {
    "Gálatas": {
      1: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas1.html",
      2: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas2.html",
       3: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas3.html",
        4: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas4.html",
         5: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas5.html",
          6: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas6.html"
    },
         "Efesios": {
         1: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/efesios/efesios1.html",
        2: "https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/efesios/efesios2.html"
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
    const comentariosContainer = document.getElementById("sidebarcomentarios");

    if (comentariosURLs[libro] && comentariosURLs[libro][capitulo]) {
        fetch(comentariosURLs[libro][capitulo])
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("No hay comentarios disponibles.");
                    } else {
                        throw new Error(`Error ${response.status}: No se pudo cargar el comentario.`);
                    }
                }
                return response.text();
            })
            .then(data => {
                comentariosContainer.innerHTML = `<h5>Comentarios</h5>${data} <div style="height: 100px;"></div> <!-- 🔥 Espacio extra agregado aquí -->`;
            })
            .catch(error => {
                console.error("Error al cargar los comentarios:", error.message);
                comentariosContainer.innerHTML = `<h5>Comentarios</h5><p>No hay comentarios disponibles.</p> <div style="height: 100px;"></div> <!-- 🔥 Espacio extra agregado aquí -->`;
            });
    } else {
        comentariosContainer.innerHTML = `<h5>Comentarios</h5><p>No hay comentarios disponibles.</p> <div style="height: 100px;"></div> <!-- 🔥 Espacio extra agregado aquí -->`;
    }
}


document.getElementById("toggleComentarios").addEventListener("click", function (e) {
    e.preventDefault(); // ⛔ evita el salto hacia arriba

    let sidebar = document.getElementById("sidebarcomentarios");
    sidebar.classList.toggle("active");

    // 🔥 Cargar comentarios solo si está visible
    if (sidebar.classList.contains("active")) {
        if (currentBook && currentChapter) {
            cargarComentariosCapitulo(currentBook, currentChapter);
        } else {
            sidebar.innerHTML = "<h5>Comentarios</h5><p>No hay comentarios disponibles.</p>";
        }
    }
});

function showFullChapter(libro, capitulo) {
    fetchAllJsonData().then(datos => {
        if (!datos[libro] || !datos[libro][capitulo]) return;

        // Actualizar las variables globales
        currentBook = libro;
        currentChapter = parseInt(capitulo, 10);

        const versiculos = Object.entries(datos[libro][capitulo])
            .map(([versiculo, texto]) => `<li>${libro} ${capitulo}:${versiculo} - ${texto}</li>`)
            .join("");

        resultsContainer.innerHTML = `<div class="chapter-list">${versiculos}</div>`;

        // Cargar comentarios automáticamente cuando se cambia de capítulo
        cargarComentariosCapitulo(libro, capitulo);
    });
}



