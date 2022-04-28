const jogador_a = document.querySelectorAll("#jogador_a .carta");
const jogador_b = document.querySelectorAll("#jogador_b .carta");
const resultado = document.querySelector("#resultado span");


var escolha_j1 = 0;
var escolha_j2 = 0;
var cartaMaquina = 0;

function partida(carta) {

    jogador_a.forEach((c) => {
        if (c == carta) {
            if (c.classList.toggle('selected')) {
                escolha_j1 = c.attributes[1].value;
                escolha_j2 = jogadaMaquina();
            }
            else {
                escolha_j1 = 0;
                escolha_j2 = jogadaMaquina(false);
            }
        }
        else {
            c.classList.remove('selected');
        }
    });


    if ((escolha_j1 != 0) && (escolha_j2 != 0)) {
        aplicarRegra(escolha_j1, escolha_j2);
    }

}

function jogadaMaquina(jogar = true) {

    if (!jogar) {

        jogador_b[cartaMaquina].classList.remove("selected");
        return 0;
    }

    cartaMaquina = Math.floor(Math.random() * 3);

    jogador_b.forEach((c) => {
        if (c == jogador_b[cartaMaquina]) {
            jogador_b[cartaMaquina].classList.add("selected");
        }
        else {
            c.classList.remove('selected');
        }
    });



    return (cartaMaquina + 1);
}

// Regra:
// Iguais = Empate
// Papel -> 1
// Pedra -> 2
// Tesoura -> 3

function aplicarRegra(j1, j2) {

    if (j1 == j2) {
        resultado.innerHTML = 'Empate!';
        return;
    }

    switch (j1) {

        case '1': // Papel:
            if (j2 == 2) { // Papel e Pedra
                resultado.innerHTML = 'Papel Ganha!';
                return;
            }

            if (j2 == 3) { // Papel e Tesoura
                resultado.innerHTML = 'Tesoura Ganha!';
                return;
            }
            break;

        case '2': // Pedra:
            if (j2 == 1) { // Pedra e Papel
                resultado.innerHTML = 'Papel Ganha!';
                return;
            }

            if (j2 == 3) { // Pedra e Tesoura
                resultado.innerHTML = 'Pedra Ganha!';
                return;
            }
            break;

        case '3': // Tesoura:
            if (j2 == 1) { // Tesoura e Papel
                resultado.innerHTML = 'Tesoura Ganha!';
                return;
            }

            if (j2 == 2) { // Tesoura e Pedra
                resultado.innerHTML = 'Pedra Ganha!';
                return;
            }
            break;
    }

    resultado.innerHTML = '-';
}