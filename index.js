let numeroAleatoriosAlmacenados = []
console.log(numeroAleatoriosAlmacenados);

function botonAleatorioOprimido() {
    let botonAletorio = document.querySelector("boton-aleatorio")
    botonAletorio.addEventListener("click",mostrarNumeroAleatorio)
}
function mostrarNumeroAleatorio() {
    let generarNumeroAleatorio = aleatorio(1,100)
    console.log(generarNumeroAleatorio);
    numeroAleatoriosAlmacenados.push(generarNumeroAleatorio)
}
console.log(mostrarNumeroAleatorio());



function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }