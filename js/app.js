const juegaPiedra = document.getElementById("btnPiedra");
const juegaPapel = document.getElementById("btnPapel");
const juegaTijera = document.getElementById("btnTijera");
const mostrarResultado = document.getElementById("btnJugar");
juegaPiedra.addEventListener("click", piedra);
juegaPapel.addEventListener("click", papel);
juegaTijera.addEventListener("click", tijera);
mostrarResultado.addEventListener("click", jugar);

let usersChoice = "";
let computersChoice = "";
let usersScore = "0";
let computersScore = "0";

const mensajeResultado = document.getElementById("mensajeResultado");

function piedra() {
  console.log("prueba piedra");
  usersChoice = 1;
}

function papel() {
  console.log("prueba papel");
  usersChoice = 2;
}

function tijera() {
  console.log("prueba tijera");
  usersChoice = 3;
}

function jugar() {
  computersChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  console.log(computersChoice);
  switch (usersChoice) {
    case 1:
      if (computersChoice == 1) {
        mensajeResultado.className = "container alert alert-secondary text-center";
        mensajeResultado.innerHTML = `<p>Qué aburrido, empatamos. Mi elección es piedra.</p>`;
        usersScore++;
        computersScore++;
      } else if (computersChoice == 2) {
        mensajeResultado.className = "container alert alert-secondary text-center";
        mensajeResultado.innerHTML = `<p>Bazzinga! Yo elegí papel. Punto para mí.</p>`;
        computersScore++;
      } else if (computersChoice == 3) {
        mensajeResultado.className = "container alert alert-secondary text-center";
        mensajeResultado.innerHTML = `<p>Yo elegí tijeras, me ganaste a pesar de tu inteligencia inferior.</p>`;
        usersScore++;
      }
      break;

    case 2:
      if (computersChoice == 2) {
        mensajeResultado.className = "container alert alert-secondary text-center";
        mensajeResultado.innerHTML = `<p>Parece que pensamos igual, yo también elegí Papel.</p>`;
        usersScore++;
        computersScore++;
      } else if (computersChoice == 3) {
        mensajeResultado.className = "container alert alert-secondary text-center";
        mensajeResultado.innerHTML = `<p>Miserable mortal, rendite de una vez. Yo elegí tijeras, sumaré ese punto para mí.</p>`;
        computersScore++;
      } else if (computersChoice == 1) {
        mensajeResultado.className = "container alert alert-secondary text-center";
        mensajeResultado.innerHTML = `<p>Este puño cerrado significa piedra. Tenés suerte de principiante, pero no durará mucho</p>`;
        usersScore++;
      }
      break;

    case 3:
      if (computersChoice == 3) {
        mensajeResultado.className = "container alert alert-secondary text-center";
        mensajeResultado.innerHTML = `<p>Un punto para cada uno, tijera empata a tijera.</p>`;
        usersScore++;
        computersScore++;
      } else if (computersChoice == 1) {
        mensajeResultado.className = "container alert alert-secondary text-center";
        mensajeResultado.innerHTML = `<p>Le falta filo a esa tijera, la destruí muy fácil con mi piedra</p>`;
        computersScore++;
      } else if (computersChoice == 2) {
        mensajeResultado.className = "container alert alert-secondary text-center";
        mensajeResultado.innerHTML = `<p>Cuando cortes mi papel, que sea formando la V de venganza, porque me la voy a cobrar.</p>`;
        usersScore++;
      }
      break;
  }
}
