const btnMaior = document.getElementById("btnMaior");
const btnOrdenar = document.getElementById("btnOrdenar");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");

btnMaior.addEventListener('click', () => {
    alert("Maior Número: " + retornaMaior(n1.value, n2.value, n3.value));
});

btnOrdenar.addEventListener('click', () => {
    let ordenados = ordenaNumeros(n1.value, n2.value, n3.value);

    n1.value = ordenados[0];
    n2.value = ordenados[1];
    n3.value = ordenados[2];
});

// Função responsável por ordenar os números em ordem crescente:
function ordenaNumeros(a, b, c) {

    let ordenados = [a, b, c];

    ordenados.sort((x, y) => {
        return (x - y);
    });

    return ordenados;
}

// Função responsável por retornar o maior número:
function retornaMaior(a, b, c) {

    return ordenaNumeros(a, b, c)[2];
}