var elemento = document.getElementById("codigo");

var apiKey = "a905ed8c823c41f4baa20313caf86685";
var country = "br";
var category = "general";
var url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

var jornal = document.getElementById("jornal");

onload = function () {

    let blocos = "";

    fetch(url)
        .then(response => response.json())
        .then(news => {

            if (news.status == 'ok') {
                noticias = news.articles.length;
                let bloco = '';

                for (let noticia = 0; noticia < noticias; noticia++) {
                    bloco = "<div class='col-sm-12 col-md-6 col-lg-4'>";

                    // títilo?
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
                                    class="img-fluid" alt="${news.articles[noticia].source.name}" 
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

                // console.log(news.articles);

                // blocos += bloco;
                jornal.innerHTML = "<div class='row'>"+blocos+"</div>";
            }

        })

}
