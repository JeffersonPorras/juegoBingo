const botonAletorio = document.querySelector("boton-aleatorio")
const numeroElegidoBalotera = document.getElementById('numeroElegido')
const letraCorrespondienteAlNumero = document.getElementById('resultadoDeLetraYNumero')
let sectionCartones = document.getElementById("section-cartones")
//let casillaAModificar = document.getElementById('idCasillas')
let numeroAleatoriosAlmacenados = []
let cantidadDeNumerosPorColumna = 5
let cantidadDeCartones = 2
let numerosAlmacenadosDelCarton = {
  b:[],
  i:[],
  n:[],
  g:[],
  o:[],
}
let tablasGeneradas = []
/**
 *Esta Funcion se encarga de escuchar el evento click , asi cuando el usuario de click en el
 boton de sacar numero esta llamara la funcion mostrarNumeroAleatorio
 */
function botonAleatorioOprimido() {
    botonAletorio.addEventListener("click",mostrarAnimacion())
}
/**
 * Esta Funcion me muestra el numero aleatorio que genera la funcion generarNumeroAletorio
 * y al tiempo me va a llamar la funcion mostrar animacion que se va a ejecutar antes
 * de mostrar el numero que sera elejido
 */
/* function mostrarNumeroAleatorio() {
  let numeroAleatorio = generarNumeroAleatorio(1,99)
  let letraCorrespondiente = ''
  //mostrarAnimacion()
  mostrarNumeroElegido(numeroAleatorio)
  if (numeroAleatorio <= 20) {
    letraCorrespondiente = 'b'
  }else if(numeroAleatorio > 21 && numeroAleatorio <= 40){
    letraCorrespondiente = 'i'
  }else if(numeroAleatorio > 41 && numeroAleatorio <= 60){
    letraCorrespondiente = 'n'
  }else if(numeroAleatorio > 61 && numeroAleatorio <= 80){
    letraCorrespondiente = 'g'
  }else{
    letraCorrespondiente = 'o'
  }
  
} */
/**
 *Esta Funcion me va a generar una x cantidad de numeros que se mostraran
 rapidamente que lo hara ver como una animacion
 */
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
/**
 *Esta Funcion me escribira en el html el numero ya elegido para mostrar en el boton
 * @param {*el resultado es el numero elegido } resultado
 */
function mostrarNumeroElegido(resultado){
    numeroElegidoBalotera.innerHTML = resultado
  }

function mostrarLetraConNumero(resultado){
    letraCorrespondienteAlNumero.innerHTML = resultado
  }
function MostrarLetraCorrespondienteANumero(numero) {
  if (numero <= 20) {
    mostrarLetraConNumero(`B ${numero}`)
    verificarNumeroExistentes(numero,'b')
  }else if(numero > 21 && numero <= 40){
    mostrarLetraConNumero(`I ${numero}`)
    verificarNumeroExistentes(numero,'i')
  }else if(numero > 41 && numero <= 60){
    mostrarLetraConNumero(`N ${numero}`)
    verificarNumeroExistentes(numero,'n')
  }else if(numero > 61 && numero <= 80){
    mostrarLetraConNumero(`G ${numero}`)
    verificarNumeroExistentes(numero,'g')
  }else{
    mostrarLetraConNumero(`O ${numero}`)
    verificarNumeroExistentes(numero,'o')
  }
 /*  let letraConNumero = ''
  switch (numero) {
    case (numero <= 20):
        letraConNumero = mostrarLetraConNumero(`B ${numero}`)
      break;
    case (numero > 21 && numero <= 40):
        letraConNumero = mostrarLetraConNumero(`I ${numero}`)
      break;
      case (numero > 41 && numero <= 60):
        letraConNumero = mostrarLetraConNumero(`N ${numero}`)
        break;
      case (numero > 61 && numero <= 80):
        letraConNumero = mostrarLetraConNumero(`G ${numero}`)
        break;
      case (numero > 80):
        letraConNumero = mostrarLetraConNumero(`O ${numero}`)
        break;
    default:
      break;
  }
  return letraConNumero; */
}
/**Esta Funcion se encarga de verificar si el numero generado se encuentra ya alamcenado
 * dentro del array de numeroAleatoriosAlmacenados y me retorna un true o un false
 */
function existeElNumeroJugado(numero) {
  let numeroAVerificar = numeroAleatoriosAlmacenados.find((o) => o == numero);
  return numeroAVerificar ? true : false
}
/**Esta funcion se encarga de generar un numero aleatorio como primera medida luego valida si
 * el numero generado  existe, en caso de que exista este vuleve a generar un ciclo para poder 
 * generar otro numero aleatorio hasta que el numero no exista dentro del array, al no existir
 * esta funcion procede a mostrar el numero que fue elejido y su letra correspondiente y tambien
 * lo almacena dentro del array de numerosAleatoriosAlmcenados.
 */
function verificarSiNumeroExiste(numeroAVerificar) {
  do {
    numeroAVerificar = generarNumeroAleatorio(1,99)
  } while (existeElNumeroJugado(numeroAVerificar));
  mostrarNumeroElegido(numeroAVerificar)
  MostrarLetraCorrespondienteANumero(numeroAVerificar)
  numeroAleatoriosAlmacenados.push(numeroAVerificar)
}


/**
 * Esta funcion se encarga de generarme las tablas de juego segun la cantidad que se le indique
 * tambien se encarga de generarles un id a cada tabla creada
 */
function crearCartonDeJuego() {
  let idTabla = ''
  for (let index = 0; index < cantidadDeCartones; index++) {
    idTabla = `tabla-${index+1}`
    let cartonCreado =  document.createElement("table")
    sectionCartones.appendChild(cartonCreado)
    cartonCreado.appendChild(generarCabezeraDeCartonDeJuego())
    cartonCreado.appendChild(generarBodyDeCartonDeJuego(idTabla))
  }
  pintarCartones()
  //asignarNumerosACarton(2,generarNumeroParaCadaCarton())
}

function pintarCartones() {
  for (let tabla = 1; tabla <= cantidadDeCartones; tabla++) {
    let numerosDeTabla = generarNumeroParaCadaCarton()
    asignarNumerosACarton(tabla,numerosDeTabla)
    almacenarNumerosPorTablas(numerosDeTabla,tabla)
    //pintarNumerosSeleccionados()
  }
}
function almacenarNumerosPorTablas(numerosAAlmacenar,idTabla) {
  tablasGeneradas.push(numerosAAlmacenar)
  console.log(tablasGeneradas);
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

function generarTablaDeJuego() {
  let arrayTablas = [];
  let tablaJuego = document.createElement("table");
    arrayTablas = generarBodyDeCartonDeJuego()
    arrayTablas.forEach((body) => {
      tablaJuego.appendChild(body)
    })
    return tablaJuego
}
function generarBodyDeCartonDeJuego(idTabla) {
  let arrayFilas = []
  let body = document.createElement("tbody")
   arrayFilas = generarfilasCartonJuego(idTabla)
   arrayFilas.forEach((fila) => {
    body.appendChild(fila)
   })
  return body
}
function generarfilasCartonJuego(idTabla) {
  let arrayFilas = []
  for (let index = 0; index < cantidadDeNumerosPorColumna; index++) {
    let fila = document.createElement("tr")
    let arrayColumnas = generarColumnas(idTabla,index + 1)
    arrayColumnas.forEach((colum) => {
      fila.appendChild(colum)
    })
    arrayFilas.push(fila)
  }
  return arrayFilas;
}

function generarColumnas(idTabla, idFila) {
 let arrayLetras = ['b','i','n','g','o'];
 let arrayCasillas = []
 for (let index = 0; index < arrayLetras.length; index++) {
  let casilla = document.createElement('td');
  casilla.id = `${idTabla}-${arrayLetras[index]}-${idFila}`
  arrayCasillas.push(casilla)
 }
 return arrayCasillas;
}


function generarNumeroParaCadaCarton() {
  let numerosAsigandos = {
    b:generarNumerosDeLasLetras(cantidadDeNumerosPorColumna,1,20),
    i:generarNumerosDeLasLetras(cantidadDeNumerosPorColumna,21,40),
    n:generarNumerosDeLasLetras(cantidadDeNumerosPorColumna,41,60),
    g:generarNumerosDeLasLetras(cantidadDeNumerosPorColumna,61,80),
    o:generarNumerosDeLasLetras(cantidadDeNumerosPorColumna,81,99),
  }
  return numerosAsigandos
}
/** */
function asignarNumerosACarton(idTabla,numerosAsigandos) {
  let columnas = Object.keys(numerosAsigandos)
  let numerosPorColumna = Object.values(numerosAsigandos)
debugger;
  for (let index = 0; index < columnas.length; index++) {
    for (let indexColumna = 0; indexColumna < numerosPorColumna[index].length; indexColumna++){
      let idCasillas = `tabla-${idTabla}-${columnas[index]}-${indexColumna+1}`
      let casillaAModificar = document.getElementById(idCasillas)
      casillaAModificar.innerText = numerosPorColumna[index][indexColumna]

    }
  }
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
function pintarNumerosSeleccionados(letra,numero) {
  numeroAPintar = existeElNumeroDentroDelArray(numero,letra)
}


function verificarNumeroExistentes(numero,letra){
  for (let index = 0; index < tablasGeneradas.length; index++) {
    let existeNumero = false
    switch (letra) {
      case 'b':
        existeNumero = existeElNumeroDentroDelArray(numero,tablasGeneradas[index].b)
        break;
        case 'i':
          existeNumero = existeElNumeroDentroDelArray(numero,tablasGeneradas[index].i)
          break;
        case 'n':
          existeNumero = existeElNumeroDentroDelArray(numero,tablasGeneradas[index].n)
          break;
        case 'g':
          existeNumero = existeElNumeroDentroDelArray(numero,tablasGeneradas[index].g)
          break;
        case 'o':
        existeNumero = existeElNumeroDentroDelArray(numero,tablasGeneradas[index].o)
        break;
      default:
        break;
    }
    console.log(`existeNumero: ${existeNumero}`);
  }
}

















function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}