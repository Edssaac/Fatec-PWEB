
var apiKey = 'a905ed8c823c41f4baa20313caf86685';
var endpoint = 'https://newsapi.org/v2/top-headlines?';


// consumir a api:
function buscarNoticias(pais = 'br', categoria = 'general') {

    let url = `${endpoint}country=${pais}&category=${categoria}&apiKey=${apiKey}`;

    let blocos = "";

    fetch(url)
    .then(response => response.json())
    .then(news => {

        if (news.status == 'ok') {
            let noticias = news.articles.length;
            let bloco = '';
            
            // noticias = 0;
            if (noticias == 0) {
                blocos = 
                `
                <div class="alert alert-warning mt-5 col-md-12" role="alert">
                    Atenção, nenhuma notícia encontrada.
                </div>
                `;
            }

            for (let noticia = 0; noticia < noticias; noticia++) {
                bloco = "<div class='artigo'>";

                // título?
                if (news.articles[noticia].title) {
                    bloco += `<h2>${news.articles[noticia].title}</h2><hr>`;
                }

                // tem descrição?
                if (news.articles[noticia].description) {
                    bloco += `<p>${news.articles[noticia].description}</p>`;
                }

                // tem imagem?
                if (news.articles[noticia].urlToImage) {
                    bloco +=
                    `
                    <figure class="text-center">
                        <img    src="${news.articles[noticia].urlToImage}" 
                                alt="${news.articles[noticia].source.name}" 
                                title="${news.articles[noticia].title}">
                    </figure>
                    `;
                }

                // conteudo?
                if (news.articles[noticia].content) {
                    bloco +=
                    `
                    <p>
                        ${news.articles[noticia].content.replace(/\[.*?\]/g, "")}
                    </p>
                    `;
                }

                // data de publicação?
                if (news.articles[noticia].publishedAt) {

                    let data = new Date(news.articles[noticia].publishedAt);

                    bloco +=
                    `
                    <p>
                        Data de Publicação: <b>${data.toLocaleString()}</b>
                    </p>
                    `;
                }

                // fonte
                if (news.articles[noticia].url) {
                    bloco +=
                    `
                    <p>
                        Fonte: <a href="${news.articles[noticia].url}" target="_blank"><b>${news.articles[noticia].source.name}</b></a>
                    </p>
                    `;
                }

                bloco += "</div>";
                blocos += bloco;

            } // for

            // blocos += bloco;
            jornal.innerHTML = blocos;
        }

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
