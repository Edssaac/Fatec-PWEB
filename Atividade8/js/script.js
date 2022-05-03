// {
//     nome: "Foo",
//     sexo: "M",
//     opiniao: "1"
// }
var pessoas = [];

const botao     = document.getElementById("btnSalvar");
const idade     = document.getElementById("codidade");
const sexo      = document.getElementsByName("codsexo");
const opiniao   = document.getElementsByName("codopiniao");

function validarIdade() {


    return false;

}


botao.addEventListener("click", () => {

    if (validarIdade()) {

        inserirDados();

        // limpar dados.

        // atualizar dados;

    }
    else {
        alert("Por favor, insira idade válida.");
    }

});