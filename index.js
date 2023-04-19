const botonAletorio = document.querySelector("boton-aleatorio")
const numeroElegidoBalotera = document.getElementById('numeroElegido')
const letraCorrespondienteAlNumero = document.getElementById('resultadoDeLetraYNumero')
let sectionCartonJugador = document.getElementById("section-carton__jugador")
let numeroAleatoriosAlmacenados = []

function botonAleatorioOprimido() {
    botonAletorio.addEventListener("click",mostrarNumeroAleatorio())
    console.log(numeroAleatoriosAlmacenados);
}

function mostrarNumeroAleatorio() {
  let numeroAleatorio = generarNumeroAleatorio(1,99)
  mostrarAnimacion()
  mostrarNumeroElegido(numeroAleatorio)
}

function mostrarAnimacion() {
  let contadorAnimacion = 0
  let intervaloAnimcacion = setInterval(() => {
    contadorAnimacion++
    let numeroAleatorio = generarNumeroAleatorio(1,99)
    mostrarNumeroElegido(numeroAleatorio)
    console.log(numeroAleatorio);
    if (contadorAnimacion == 5) {
      clearInterval(intervaloAnimcacion)
      numeroAleatorio = generarNumeroAleatorio(1,99)
      verificarSiNumeroExiste(numeroAleatorio)
    }
  }, 100);
}

function mostrarNumeroElegido(resultado){
    numeroElegidoBalotera.innerHTML = resultado
  }

function mostrarLetraConNumero(resultado){
    letraCorrespondienteAlNumero.innerHTML = resultado
  }

/* function mostrarNumerosAlmacenados(resultado){
    const sectionNumeros = document.getElementById('contenedorNumerosAlmacenados')
    sectionNumeros.innerText = resultado
} */
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
function existeElNumeroJugado(numero) {
  let numeroAVerificar = numeroAleatoriosAlmacenados.find((o) => o == numero);
  return numeroAVerificar ? true : false
}

function verificarSiNumeroExiste(numero) {
  let numeroAVerificar = existeElNumeroJugado(numero)
  console.log(numeroAVerificar);
  if(numeroAVerificar) {
    numeroAVerificar = generarNumeroAleatorio(1,99)
    mostrarNumeroElegido(numeroAVerificar)
    MostrarLetraCorrespondienteANumero(numeroAVerificar)
    numeroAleatoriosAlmacenados.push(numeroAVerificar)
    mostrarNumerosAlmacenados(numeroAVerificar)
  }else{
    mostrarNumeroElegido(numero)
    MostrarLetraCorrespondienteANumero(numero)
    numeroAleatoriosAlmacenados.push(numero)
    mostrarNumerosAlmacenados(numero)
  }
}
function generarCartonDeJuego() {
  let cartonJugador = document.createElement("table")
  let cartonPc = document.createElement("table")
  sectionCartonJugador.appendChild(cartonJugador)
  cartonJugador.appendChild(generarCabezeraDeCartonDeJuego())
  cartonJugador.appendChild(GenerarBodyDeCartonDeJuego())
  cartonPc.appendChild(generarCabezeraDeCartonDeJuego())
  console.log(cartonPc);
  console.log(cartonJugador);
}

function generarCabezeraDeCartonDeJuego() {
  let cabezera = document.createElement("thead")
  let fila = document.createElement("tr")
  fila.appendChild(crearEncabezado("B"))
  fila.appendChild(crearEncabezado("I"))
  fila.appendChild(crearEncabezado("N"))
  fila.appendChild(crearEncabezado("G"))
  fila.appendChild(crearEncabezado("O"))
  cabezera.appendChild(fila)
  return cabezera
}

function crearEncabezado(valor) {
  let encabezado = document.createElement("th")
  encabezado.innerText = valor
  return encabezado
}

function GenerarBodyDeCartonDeJuego() {
  let body = document.createElement("tbody")
  for (let b = 0; b < 4; b++) {
    let fila = generarfilasCartonJuego()
    body.appendChild(fila)
  }
  return body
}
function generarfilasCartonJuego() {
  let fila = document.createElement("tr")
  let columna = generarValorDeCasillasB(generarNumeroAleatorio(1,20))
  fila.appendChild(columna)
  return fila
}

function generarValorDeCasillasB(numero) {
  let valorCasilla = document.createElement("td")
  valorCasilla.classList.add("casilla-b")
  valorCasilla.innerText = numero
  return valorCasilla
}















function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}