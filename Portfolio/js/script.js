const scroll = document.getElementById("scrollTop");

scroll.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})

function scrollTop() {

    if (this.scrollY >= 120)
        scroll.style.visibility = "visible";
    else
        scroll.style.visibility = "hidden";
}

window.addEventListener('scroll', scrollTop);


linksCertificado = document.getElementsByClassName("certificado");
certificado = document.getElementById("certificado");


Array.from(linksCertificado).forEach(link => {
    link.addEventListener("click", () => {
        certificado.src = certificados[link.id];
    });
});


certificados = {
    0: 'assets/img/cursos/introducao_php.png',
    1: 'assets/img/cursos/poo_php.png',
    2: 'assets/img/cursos/avancado_php.png',
    3: 'assets/img/cursos/git.png',
    4: 'assets/img/cursos/scrum.png',
    5: 'assets/img/cursos/figma.png',
    6: 'assets/img/cursos/bootstrap.png'
}