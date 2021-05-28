var kmInput = prompt("Quanti km vuoi percorrere?");
var ageInput = prompt("Qual è la tua età?");

var km = parseInt(kmInput);
var age = parseInt(ageInput);

var fullPrice = km * 0.21;
var discount18 = fullPrice / 100 * 20;
var discount65 = fullPrice / 100 * 40;

var outputElement = document.getElementById('ticket-price');

outputElement.innerHTML = "Il prezzo del biglietto è pari a: € ";

if (age < 18) {
    outputElement.innerHTML += (fullPrice - discount18).toFixed(2);
} else if (age > 65) {
    outputElement.innerHTML += (fullPrice - discount65).toFixed(2);
} else {
    outputElement.innerHTML += (fullPrice).toFixed(2);
}