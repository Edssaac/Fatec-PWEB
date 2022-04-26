// Validar entrada:
function validar(n) {
    if (isNaN(n))
        n = 0;

    return n;
}

// Entradas:
n1 = validar(parseFloat(prompt("Número #1:")));
n2 = validar(parseFloat(prompt("Número #2:")));

// a soma dos dois;
alert(`Soma ${n1+n2}`);

// a subtração do primeiro pelo segundo;
alert(`Subtração: ${n1-n2}`);

// o produto dos dois;
alert(`Produto: ${n1*n2}`);

// a divisão do primeiro pelo segundo;
alert(`Divisão: ${n1/n2}`);

// o resto da divisão do primeiro pelo segundo.
alert(`Resto da Divisão: ${n1%n2}`);

// Saídas:
confirm("Concorda com estes valores?");