const btnNome = document.getElementById('btnNome');
const btnN1 = document.getElementById('btnN1');
const btnN2 = document.getElementById('btnN2');
const btnN3 = document.getElementById('btnN3');
const btnMedia = document.getElementById('btnMedia');

var nome;
var n1;
var n2;
var n3;


alert("Inserção de Notas e Cálculo de Média");


btnNome.addEventListener('click', () => {
    nome = prompt("Nome:");
    document.getElementById("nomeAluno").value = nome;
});

btnN1.addEventListener('click', () => {
    n1 = parseFloat(prompt("Nota #1"));
    document.getElementById("n1").value = n1.toFixed(2);
});

btnN2.addEventListener('click', () => {
    n2 = parseFloat(prompt("Nota #2"));
    document.getElementById("n2").value = n2.toFixed(2);
});

btnN3.addEventListener('click', () => {
    n3 = parseFloat(prompt("Nota #3"));
    document.getElementById("n3").value = n3.toFixed(2);
});

btnMedia.addEventListener('click', () => {
    let media = ((n1 + n2 + n3) / 3);
    confirm(`Aluno: ${document.getElementById("nomeAluno").value}\nMédia: ${ (isNaN(media)) ? '' : media.toFixed(2)}`);
});