let inicio = Date.parse('27 Feb 2023 19:26:00 GMT-4')
let hoy = Date.now();
let dif = hoy - inicio;
const segundo = dif / 1000;
const minuto = segundo / 60;
const hora = minuto / 60;
const dia = hora / 24;
let pepe = document.getElementById("aca").innerHTML +=
    `Dias desde la ultima actualizacion ${Math.trunc(dia)}`;

function nowork() {
    let chau = document.getElementById("aca2").innerHTML = ` 
    <a href="https://juliflorez.github.io/Karate-Saludable/">
    <img src="img/Karate-Saludable-2023-02-24-19_25_08.png" alt="Trabajo karate Saludable"
        width="20%" height="auto" class="img-trabajos"></a>
        <a href="https://juliflorez.github.io/camping-jfu/">
        <img src="img/screencapture-juliflorez-github-io-camping-jfu-2023-02-24-19_27_10.png" alt="Trabajo Coder House" width="20%" height="auto" class="img-especial">
    </a>`;
}