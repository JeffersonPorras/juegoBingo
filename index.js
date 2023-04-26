const botonAletorio = document.querySelector("boton-aleatorio")
const numeroElegidoBalotera = document.getElementById('numeroElegido')
const letraCorrespondienteAlNumero = document.getElementById('resultadoDeLetraYNumero')
let sectionCartonJugador = document.getElementById("section-carton__jugador")
let sectionCartonPc = document.getElementById('section-carton__pc')
let numeroAleatoriosAlmacenados = []
let cantidadDeNumerosPorColumna = 5

let numerosAlmacenadosDelCarton = {
  b:[],
  i:[],
  n:[],
  g:[],
  o:[],
}

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

function verificarSiNumeroExiste(numeroAVerificar) {
  do {
    numeroAVerificar = generarNumeroAleatorio(1,99)
  } while (existeElNumeroJugado(numeroAVerificar));
  mostrarNumeroElegido(numeroAVerificar)
  MostrarLetraCorrespondienteANumero(numeroAVerificar)
  numeroAleatoriosAlmacenados.push(numeroAVerificar)
}

function generarCartonDeJuego() {
  let cartonJugador = document.createElement("table")
  //let cartonPc = document.createElement("table")

  sectionCartonJugador.appendChild(cartonJugador)
  //sectionCartonPc.appendChild(cartonPc)

  cartonJugador.appendChild(generarCabezeraDeCartonDeJuego())
  cartonJugador.appendChild(GenerarBodyDeCartonDeJuego())

  //cartonPc.appendChild(generarCabezeraDeCartonDeJuego())
  //cartonPc.appendChild(GenerarBodyDeCartonDeJuego())

  //console.log(cartonPc);
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
  let arrayFilas = []
  let body = document.createElement("tbody")
   arrayFilas = generarfilasCartonJuego()
   arrayFilas.forEach((fila) => {
    body.appendChild(fila)
   })
  return body
}
function generarfilasCartonJuego() {
  let arrayFilas = []
  for (let index = 0; index < cantidadDeNumerosPorColumna; index++) {
    let fila = document.createElement("tr")
    let arrayColumnas = generarColumnas(index + 1)
    arrayColumnas.forEach((colum) => {
      fila.appendChild(colum)
    })
    arrayFilas.push(fila)
  }
  return arrayFilas;
  //fila.appendChild(generarNumerosDeLasLetras())
  /* fila.appendChild(generarValorDeCasillasI(generarNumeroAleatorio(21,40)))
  fila.appendChild(generarValorDeCasillasN(generarNumeroAleatorio(41,60)))
  fila.appendChild(generarValorDeCasillasG(generarNumeroAleatorio(61,80)))
  fila.appendChild(generarValorDeCasillasO(generarNumeroAleatorio(81,99))) */
}
function generarColumnas(idFila) {
 let arrayLetras = ['b','i','n','g','o'];
 let arrayCasillas = []
 for (let index = 0; index < arrayLetras.length; index++) {
  let casilla = document.createElement('td');
  casilla.id = `${arrayLetras[index]}-${idFila}`
  arrayCasillas.push(casilla)
 }
 return arrayCasillas;
}

function generarNumerosDeLasLetras(cantidadNumeros,numeroMinimo,numeroMaximo) {
  let contador = 0;
  let arrayCasillas = []
  let numeroAleatorio = 0;
  do {
    numeroAleatorio = generarNumeroAleatorio(numeroMinimo, numeroMaximo)
    if(!existeElNumeroDentroDelArray(numeroAleatorio,arrayCasillas)) {
      arrayCasillas.push(numeroAleatorio)
      contador ++;
    }
  } while (contador < cantidadNumeros);
  arrayCasillas = ordenarNumeroDelArray(arrayCasillas)
  return arrayCasillas;
}
function existeElNumeroDentroDelArray(numero,array) {
  let numeroAVerificar = array.find((o) => o == numero)
  return numeroAVerificar? true : false;
}
function ordenarNumeroDelArray(array) {
  return array.sort((a,b) => a - b)
}

















function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}