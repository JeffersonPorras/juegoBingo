const numeroElegidoBalotera = document.getElementById('numeroElegido')
let numeroAleatoriosAlmacenados = []


function botonAleatorioOprimido() {
    let botonAletorio = document.querySelector("boton-aleatorio")
    botonAletorio.addEventListener("click",mostrarNumeroAleatorio())
    console.log(numeroAleatoriosAlmacenados);
}


function mostrarNumeroAleatorio() {
    let numeroAleatorio = generarNumeroAleatorio(1,100)
    console.log(numeroAleatorio);
    numeroAleatoriosAlmacenados.push(numeroAleatorio)
    mostrarNumeroElegido(numeroAleatorio)
}

function mostrarNumeroElegido(resultado){
    numeroElegidoBalotera.innerHTML = resultado
  }
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }