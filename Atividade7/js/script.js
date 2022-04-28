// Constantes:
const jogador_a = document.querySelectorAll("#jogador_a .carta");   // Obtém as cartas do jogador
const jogador_b = document.querySelectorAll("#jogador_b .carta");   // Obtém as cartas da máquina
const resultado = document.querySelector("#resultado span");        // Obtém o span de resultado
const placar_jogador = document.getElementById("placar_jogador");       // Obtém o placar do jogador
const placar_maquina = document.getElementById("placar_maquina");       // Obtém o placar da máquina

// Variáveis:
var escolha_j1 = 0;     // Opção do Jogador
var escolha_j2 = 0;     // Opção da Máquina
var cartaMaquina = 0;   // Carta da Máquina
var ponto_jogador = 0;  // Ponto do Jogador
var ponto_maquina = 0;  // Ponto da Máquina


// Função responsável por realizar o monitoramento da partida:
function monitoraPartida(carta) {

    // Verifica cada uma das cartas do jogador:
    jogador_a.forEach((c) => {
        if (c == carta) { // Se for a carta escolhida...
            if (c.classList.toggle('selected')) { // Se for para adicionar a classe .selected
                escolha_j1 = c.attributes[1].value; // Então guardamos o número da carta do jogador
                escolha_j2 = jogadaMaquina(); // A máquina faz sua jogada e guardamos o número de sua carta escolhida
            }
            else { // Se a carta for desselecionada:
                escolha_j1 = 0; // Removemos a referência da última carta escolhida
                escolha_j2 = jogadaMaquina(false); // E para a máquina também
            }
        }
        else {
            c.classList.remove('selected'); // Removendo a classe .selected de outras cartas que não foram escolhidas
        }
    });


    // Se houverem cartas escolhidas pelo jogador e pela máquina:
    if ((escolha_j1 != 0) && (escolha_j2 != 0)) {
        aplicarRegra(escolha_j1, escolha_j2); // Aplicamos a regra para obtermos o retorno do ganhador
    }

}

// Função responsável por realizar a jogada da máquina:
function jogadaMaquina(jogar = true) {

    // Se não for pra escolher uma carta:
    if (!jogar) {
        jogador_b[cartaMaquina].classList.remove("selected"); // Removemos a última carta selecionada pela máquina
        resultado.innerHTML = '-'; // Limpamos o texto de resultado
        return 0; // Retornamos 0 como a carta escolhida
    }

    cartaMaquina = Math.floor(Math.random() * 3); // Escolhendo um número aleatório entre 0 e 3 (3 não incluso)

    // Verificando cada uma das cartas da máquina:
    jogador_b.forEach((c) => {
        if (c == jogador_b[cartaMaquina]) { // Se for a carta escolhida
            jogador_b[cartaMaquina].classList.add("selected"); // Então passamos a classe .selected
        }
        else {
            c.classList.remove('selected'); // Removemos a classe das que não foram escolhidas
        }
    });

    return (cartaMaquina + 1); // Retornando a carta escolhida pela máquina (entre 1 e 3)
}

// Regra:
// Iguais = Empate
// Papel -> 1
// Pedra -> 2
// Tesoura -> 3

// Função responsável por aplicar a regra do jogo e retornar o resultado:
function aplicarRegra(j1, j2) {

    // Se as cartas forem iguais
    if (j1 == j2) {
        resultado.innerHTML = 'Empate!';
        return;
    }

    // Verificando as cartas escolhidas
    switch (j1) {

        case '1': // Papel:
            if (j2 == 2) { // Papel e Pedra
                resultado.innerHTML = 'Papel Ganha!';
                    ponto_jogador++;
                break;
            }

            if (j2 == 3) { // Papel e Tesoura
                resultado.innerHTML = 'Tesoura Ganha!';
                    ponto_maquina++;
                break;
            }
            break;

        case '2': // Pedra:
            if (j2 == 1) { // Pedra e Papel
                resultado.innerHTML = 'Papel Ganha!';
                    ponto_maquina++;
                break;
            }

            if (j2 == 3) { // Pedra e Tesoura
                resultado.innerHTML = 'Pedra Ganha!';
                    ponto_jogador++;
                break;
            }
            break;

        case '3': // Tesoura:
            if (j2 == 1) { // Tesoura e Papel
                resultado.innerHTML = 'Tesoura Ganha!';
                    ponto_jogador++;
                break;
            }

            if (j2 == 2) { // Tesoura e Pedra
                resultado.innerHTML = 'Pedra Ganha!';
                    ponto_maquina++;
                break;
            }
            break;

        default:
            resultado.innerHTML = '-';
            return;
    }

    // Atualizando o placar:
    atualizaPlacar();
}

// Função responsável por atualizar o placar do jogador e da máquina:
function atualizaPlacar() {
    placar_jogador.innerHTML = ponto_jogador;
    placar_maquina.innerHTML = ponto_maquina;
}