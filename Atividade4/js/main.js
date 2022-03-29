window.onload = () => 
{

    let ctx = '';


    for ( let i=0; i< dados.length; i++ )
    {
        ctx += 
        `
        <div class="mb-4">
            <div>
                <h2>${i+1}. ${dados[i].titulo}</h2>
            </div>
    
            <div class="row">
                <figure class="col-md-6">
                    <img src="img/${dados[i].imagem}" alt="${dados[i].titulo}" class="img-fluid rounded">
                </figure>
    
                <p class="col-md-6">
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