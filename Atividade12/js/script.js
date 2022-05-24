const imagem = document.getElementById("imagem");

onload = () => {
    imagem.src = "img/janelafechada.png";
}

imagem.addEventListener("mouseenter", () => {
    imagem.src = "img/janelaaberta.png";
});

imagem.addEventListener("mouseleave", () => {
    imagem.src = "img/janelafechada.png";
});

imagem.addEventListener("click", () => {
    imagem.src = "img/janelaquebra.png";
});