window.onload = popularPagina;

function popularPagina() 
{
    let ctx = '';

    for ( let i=0; i< dados.length; i++ )
    {
        let imagem = dados[i].imagem;
        if (i<6)
            imagem = "img/"+imagem;

        ctx += 
        `
        <div class="mb-4">
            <div>
                <h2>${i+1}. ${dados[i].titulo}</h2>
            </div>
    
            <div class="row">
                <figure class="col-xs-12 col-md-6">
                    <img src="${imagem}" alt="${dados[i].titulo}" class="img-fluid rounded">
                </figure>
    
                <p class="col-xs-12 col-md-6">
                    ${dados[i].descricao}
                    <br><br>
                    <span>Disponível em: <a href="${dados[i].link}" target="_blank">${dados[i].titulo}</a></span>
                </p>
            </div>
        </div>
        `
    }

    document.querySelector("article").innerHTML = ctx;
};


var form = document.getElementById("form");

var botao = document.getElementById("botao");
botao.addEventListener("click", botaoFlutuante);

function botaoFlutuante()
{
    if ( botao.children[0].className == 'uil uil-plus-circle' )
    {
        botao.innerHTML = '<i class="uil uil-minus-circle"></i>';

        form.classList.remove("ocultar");
        window.scrollTo(0, document.body.scrollHeight);
    }
    else
    {
        botao.innerHTML = '<i class="uil uil-plus-circle"></i>';

        form.classList.add("ocultar");
    }
}

form.addEventListener("submit", function(e) {

    let campo_titulo      = document.getElementById("titulo").value;
    let campo_descricao   = document.getElementById("descricao").value;
    let campo_imagem      = document.getElementById("imagem").value;
    let campo_link        = document.getElementById("link").value;

    // criar objeto:
    dado = {
        titulo: campo_titulo,
        descricao: campo_descricao,
        imagem: campo_imagem,
        link: campo_link,
    }

    dados.push(dado); //adicionar objeto ao array;
    popularPagina(); //atualizar conteudo;

    form.reset();

    //cancelar envio do formulário:
    e.preventDefault()
})