document.addEventListener("DOMContentLoaded", function () {
    const comentarios = {
        "verso2": "na28/2ts1/verso2.html",
        "verso4": "na28/2ts1/verso4.html",
        "verso8": "na28/2ts1/verso8.html",
        "verso9": "na28/2ts1/verso9.html",
        "verso10": "na28/2ts1/verso10.html",
        "verso11": "na28/2ts1/verso11.html",
        "verso12": "na28/2ts1/verso12.html",
        "hebreos1_1": "na28/2ts1/hebreos1_1.html",
        "hebreos1_2": "na28/2ts1/hebreos1_2.html",
        "hebreos1_3": "na28/2ts1/hebreos1_3.html",
        "hebreos1_4": "na28/2ts1/hebreos1_4.html",
        "hebreos1_7": "na28/2ts1/hebreos1_7.html",
       
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
