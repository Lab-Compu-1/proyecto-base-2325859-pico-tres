function validar() {
   let usuario = document.getElementById("Usuario").value;
   let clave = document.getElementById("Clave").value;

   if (usuario == "batman" && clave == "777") {
       window.location.href = "principal.html";
   } else {
       alert("USUARIO O CLAVE INCORRECTOS");
   }
}

function recomendar(estado) {
    let canciones = {
        feliz: [
            "Walking on Sunshine – Katrina and the Waves",
            "Happy – Pharrell Williams",
            "Vivir Mi Vida – Marc Anthony",
            "Estoy Enamorado – Wisin & Yandel",
            "Can’t Stop the Feeling! – Justin Timberlake"
        ],
        triste: [
            "Fix You – Coldplay",
            "Someone Like You – Adele",
            "Té Para Tres – Soda Stereo",
            "Trátame Suavemente – Gustavo Cerati",
            "Creep – Radiohead"
        ],
        motivado: [
            "Eye of the Tiger – Survivor",
            "Hall of Fame – The Script",
            "Color Esperanza – Diego Torres",
            "Don't Stop Me Now – Queen",
            "Believer – Imagine Dragons"
        ],
        relajado: [
            "Weightless – Marconi Union",
            "Somewhere Over the Rainbow – Israel Kamakawiwo’ole",
            "Let Her Go – Passenger",
            "Imagine – John Lennon",
            "Budapest – George Ezra"
        ]
    };

    let resultadoHTML = "<h3>Canciones recomendadas:</h3><ul>";
    canciones[estado].forEach(c => {
        resultadoHTML += `<li>${c}</li>`;
    });
    resultadoHTML += "</ul>";

    document.getElementById("recomendaciones").innerHTML = resultadoHTML;
}

   
 