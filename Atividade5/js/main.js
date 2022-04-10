
var apiKey = 'aenRHZrxNHd6tVSbamrLOj8A4cqyeWyTGsst2hcA';
var endpoint = 'https://api.thenewsapi.com/v1/news/top?';


// consumir a api:
// docs: https://www.thenewsapi.com/documentation#top-stories
function buscarNoticias(pais = 'br', categoria = 'general') {

    let url = `${endpoint}api_token=${apiKey}&locale=${pais}&category=${categoria}`;
    
    let blocos = "";

    fetch(url)
    .then(response => response.json())
    .then(news => {

        // console.log(news);
        
        let noticias = news.meta.returned;
        
        if ( noticias > 0) {
            let bloco = '';
            
            for (let noticia = 0; noticia < noticias; noticia++) {
                bloco = "<div class='artigo'>";

                // título?
                if (news.data[noticia].title) {
                    bloco += `<h2 class="artigo-titulo mt-3">${news.data[noticia].title}</h2><hr>`;
                }
                
                // tem descrição?
                if (news.data[noticia].description) {
                    bloco += `<p class="artigo-descricao">${news.data[noticia].description}</p>`;
                }
                
                // tem imagem?
                if (news.data[noticia].image_url) {
                    bloco +=
                    `
                    <figure class="text-center">
                        <img    src="${news.data[noticia].image_url}" 
                                alt="${news.data[noticia].title}" 
                                title="${news.data[noticia].title}">
                    </figure>
                    `;
                }

                // data de publicação?
                if (news.data[noticia].published_at) {

                    let data = new Date(news.data[noticia].published_at);

                    bloco +=
                    `
                    <p>
                        Data de Publicação:<br><b>${data.toLocaleString()}</b>
                    </p>
                    `;
                }

                // fonte
                if (news.data[noticia].url) {
                    bloco +=
                    `
                    <p>
                        Notícia Completa: <a href="${news.data[noticia].url}" target="_blank"><b>${news.data[noticia].source}</b></a>
                    </p>
                    `;
                }

                bloco += "</div>";
                blocos += bloco;

            } // for

            // blocos += bloco;
        }
        else {
            blocos = 
            `
            <div class="alert alert-warning mt-5 col-md-12" role="alert">
                Atenção, nenhuma notícia encontrada.
            </div>
            `;
        }

        jornal.innerHTML = blocos;

    })

}


// verificando a atualização de noticias:
document.addEventListener("submit", function (e) {

    let pais = document.getElementById("pais").value;
    let categoria = document.getElementById("categoria").value;

    buscarNoticias(pais, categoria);

    e.preventDefault();
})


// função responsável por carregar as options dos filtros:
function carregarOptions(id, obj, select) {

    let options = '';

    for (i in obj) {
        if (i == select)
            options += `<option value="${i}" selected>${obj[i]}</option>`;
        else
            options += `<option value="${i}">${obj[i]}</option>`;
    }

    this.document.getElementById(id).innerHTML = options;
}


// inicializando a aplicação:
onload = function () {

    carregarOptions("pais", paises, "br");
    carregarOptions("categoria", categorias, "general");

    buscarNoticias();
}
