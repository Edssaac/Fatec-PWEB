// Array de dados das pessoas que responderam a pesquisa:
var pessoas = [];

// Constantes do formulário de pesquisa:
const botao = document.getElementById("btnSalvar");
const idade = document.getElementById("codidade");
const sexo = document.getElementsByName("codsexo");
const opiniao = document.getElementsByName("codopiniao");
const form = document.getElementById("formDados");

// Constante do formumário de análise dos dados coletados:
const mediaIdade = document.getElementById("mediaIdade");
const maiorIdade = document.getElementById("maiorIdade");
const menorIdade = document.getElementById("menorIdade");
const quantidadePessimo = document.getElementById("quantidadePessimo");
const quantidadeOtimoBom = document.getElementById("quantidadeOtimoBom");
const quantidadeHomemMulher = document.getElementById("quantidadeHomemMulher");

// Função responsável por validar a idade da pessoa:
function validarIdade() {

    // Verificando se esta vazia:
    if (idade.value == "") {
        return false;
    }

    // Verificando se é um número inteiro:
    return RegExp('^[0-9]*$').test(idade.value);
}

// Função responsável por inserir os dados da pessoa no Array de pessoas:
function inserirDados() {

    let sexoEscolhido;
    sexo.forEach((op) => {
        if (op.checked) {
            sexoEscolhido = op.value;
        }
    })

    let opiniaoEscolhida;
    opiniao.forEach((op) => {
        if (op.checked) {
            opiniaoEscolhida = op.value;
        }
    })

    let pessoa = {
        idade: parseInt(idade.value),
        sexo: sexoEscolhido,
        opiniao: opiniaoEscolhida
    }

    // Adicionando:
    pessoas.push(pessoa);
}

// Função responsável por atualizar o formulário de dados coletados:
function atualizarForm() {

    let idade;

    // Média de idade:
    idade = 0;
    pessoas.forEach((pessoa) => {
        idade += pessoa.idade;
    });

    mediaIdade.value = (idade / pessoas.length);

    // Maior Idade:
    idade = 0;
    pessoas.forEach((pessoa) => {
        if (pessoa.idade > idade) {
            idade = pessoa.idade;
        }
    });

    maiorIdade.value = idade;

    // Menor Idade:
    pessoas.forEach((pessoa) => {
        if (pessoa.idade < idade) {
            idade = pessoa.idade;
        }
    });

    menorIdade.value = idade;

    // Ótimo, Bom e Péssimo:
    let otimoBom = 0;
    let pessimo = 0;
    pessoas.forEach((pessoa) => {
        switch (pessoa.opiniao) {
            case 'O':
            case 'B':
                otimoBom++;
                break;
            case 'P':
                pessimo++;
                break;
        }
    });

    quantidadeOtimoBom.value = `${((otimoBom / pessoas.length) * 100).toFixed(2)}%`;
    quantidadePessimo.value = pessimo;

    // Homens e Mulheres:
    let homens = 0;
    let mulheres = 0;
    pessoas.forEach((pessoa) => {
        switch (pessoa.sexo) {
            case 'M':
                homens++;
                break;
            case 'F':
                mulheres++;
                break;
        }
    });

    quantidadeHomemMulher.value = `Homens: ${homens} e Mulheres: ${mulheres}`;
}

// Inicializando a página com os campos zerados:
onload = () => {
    mediaIdade.value = 0;
    maiorIdade.value = 0;
    menorIdade.value = 0;
    quantidadePessimo.value = 0;
    quantidadeOtimoBom.value = '0.00%';
    quantidadeHomemMulher.value = "Homens: 0 e Mulheres: 0";
}

// Verificando o envio de dados:
botao.addEventListener("click", () => {

    if (validarIdade()) {

        // inserir os dados digitados pelo usuário:
        inserirDados();

        // limpar dados:
        form.reset();

        // atualizar dados;
        atualizarForm();
    }
    else {
        alert("Por favor, insira idade válida.");
    }

});