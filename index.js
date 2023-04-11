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
function existeElNumeroJugado(numero) {
  let numeroAVerificar = numeroAleatoriosAlmacenados.find((o) => o == numero);
  return numeroAVerificar ? true : false
}
function verificarSiNumeroExiste() {
  let numeroRecibido;
  do {
    numeroRecibido = mostrarNumeroAleatorio()
  } while (existeElNumeroJugado(numeroRecibido));
}
function generarCartonJugador() {
  let section = document.getElementsByTagName("section")[0];
  let tabla = document.createElement("table");
  let tblSection = document.createElement("tsection");
  let contador = 0;
  for (let i = 0; i < 5; i++) {
    let hilera = document.createElement("tr");
    for (let j = 0; j < 5; j++) {
      let celda = document.createElement("td");
      celda.classList.add("casilla");
      celda.id = contador;
      contador++;
      hilera.appendChild(celda);
    }
    tblSection.appendChild(hilera);
  }
  tabla.appendChild(tblSection);
  section.appendChild(tabla);
  generarCartonPc()
}
function generarCartonPc() {
  let section = document.getElementsByTagName("section")[2];
  let tabla = document.createElement("table");
  let tblSection = document.createElement("tsection");
  let contador = 0;
  for (let i = 0; i < 5; i++) {
    let hilera = document.createElement("tr");
    for (let j = 0; j < 5; j++) {
      let celda = document.createElement("td");
      celda.classList.add("casilla");
      celda.id = contador;
      contador++;
      hilera.appendChild(celda);
    }
    tblSection.appendChild(hilera);
  }
  tabla.appendChild(tblSection);
  section.appendChild(tabla);
}