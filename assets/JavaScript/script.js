alert("Piensa en un número del 1 al 100.");
let min = 1;
let max = 100;

function adivinarNumero() {
  let valorMedio = Math.floor((min + max) / 2);
  let respuesta = 
  confirm(`¿Tu número es ${valorMedio}?`);
  let resultado = document.getElementById("resultado");
  resultado.textContent = `¿Tu número es ${valorMedio} ?`;
  if (respuesta === true) {
    resultado.textContent = `Tu número es ${valorMedio}, excelente desición`;
  } else {
    let esMayoQue = confirm(`¿Tu número mayor que ${valorMedio}?` );
    if (esMayoQue === true) {
      min = valorMedio + 1;
    } else {
      max = valorMedio - 1;
    }
    adivinarNumero();
  }
}
adivinarNumero();
