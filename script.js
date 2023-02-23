let inicio = Date.parse('23 Feb 2023 17:34:00 GMT-4')
let hoy = Date.now();
let dif = hoy - inicio;
const segundo = dif / 1000;
const minuto = segundo / 60;
const hora = minuto / 60;
const dia = hora / 24;
let pepe = document.getElementById("aca").innerHTML +=
    `Dias desde la ultima actualizacion ${Math.trunc(dia)}`;

function nowork(){
    let chau = document.getElementById("aca2").innerHTML = `<p class="nohay"> No hay mas trabajos ;) </p>`;
}