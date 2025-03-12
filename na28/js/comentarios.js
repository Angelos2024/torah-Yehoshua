document.addEventListener("DOMContentLoaded", function () {
    const comentarios = {
        "hebreos1_1": "na28/2ts1/hebreos1_1.html",
        "hebreos1_2": "na28/2ts1/hebreos1_2.html",
        "hebreos1_3": "na28/2ts1/hebreos1_3.html",
        "hebreos1_4": "na28/2ts1/hebreos1_4.html",
        "hebreos1_7": "na28/2ts1/hebreos1_7.html",
        "hebreos1_8": "na28/2ts1/hebreos1_8.html",
        "hebreos1_9": "na28/2ts1/hebreos1_9.html",
        "hebreos1_11": "na28/2ts1/hebreos1_11.html",
        "hebreos1_12": "na28/2ts1/hebreos1_12.html",
        "hebreos1_14": "na28/2ts1/hebreos1_14.html",


        // Agrega más comentarios aquí
    };

    const contenedorComentarios = document.getElementById("contenidoSidebar");

    Object.entries(comentarios).forEach(([id, url]) => {
        let div = document.createElement("div");
        div.id = id;
        div.classList.add("seccionSidebar");
        div.style.display = "none";
        div.innerHTML = `<object type="text/html" data="${url}" width="100%" height="300px"></object>`;
        
        contenedorComentarios.appendChild(div);
    });

});
