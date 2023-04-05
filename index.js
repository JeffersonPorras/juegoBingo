const botonAletorio = document.querySelector("boton-aleatorio")
const numeroElegidoBalotera = document.getElementById('numeroElegido')
const letraCorrespondienteAlNumero = document.getElementById('resultadoDeLetraYNumero')
let numeroAleatoriosAlmacenados = []

function botonAleatorioOprimido() {
    botonAletorio.addEventListener("click",mostrarNumeroAleatorio())
    console.log(numeroAleatoriosAlmacenados);
}

function mostrarNumeroAleatorio() {
  let numeroAleatorio = generarNumeroAleatorio(1,100)
  mostrarAnimacion()
  numeroAleatoriosAlmacenados.push(numeroAleatorio)
  mostrarNumeroElegido(numeroAleatorio)
}


function mostrarAnimacion() {
  let contadorAnimacion = 0
  let intervaloAnimcacion = setInterval(() => {
    contadorAnimacion++
    let numeroAleatorio = generarNumeroAleatorio(1,100)
    mostrarNumeroElegido(numeroAleatorio)
    console.log(numeroAleatorio);
    if (contadorAnimacion == 5) {
      clearInterval(intervaloAnimcacion)
      numeroAleatorio = generarNumeroAleatorio(1,100)
      mostrarNumeroElegido(numeroAleatorio)
      MostrarLetraCorrespondienteANumero(numeroAleatorio)
    }
  }, 100);
}

function mostrarNumeroElegido(resultado){
    numeroElegidoBalotera.innerHTML = resultado
  }
  function mostrarLetraConNumero(resultado){
    letraCorrespondienteAlNumero.innerHTML = resultado
  }
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function MostrarLetraCorrespondienteANumero(numero) {
  if (numero <= 20) {
    mostrarLetraConNumero(`B ${numero}`)
  }else if(numero > 21 && numero <= 40){
    mostrarLetraConNumero(`I ${numero}`)
  }else if(numero > 41 && numero <= 60){
    mostrarLetraConNumero(`N ${numero}`)
  }else if(numero > 61 && numero <= 80){
    mostrarLetraConNumero(`G ${numero}`)
  }else{
    mostrarLetraConNumero(`O ${numero}`)
  }
}
