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


linksCertificado = document.getElementsByClassName("spanCertificado");
certificado = document.getElementById("certificado");


Array.from(linksCertificado).forEach(link => {
    link.addEventListener("click", () => {
        certificado.src = certificados[link.id];
    });
});


certificados = {
    0: 'assets/img/certificados/introducao_php.jpg',
    1: 'assets/img/certificados/poo_php.jpg',
    2: 'assets/img/certificados/avancado_php.jpg',
    3: 'assets/img/certificados/git.jpg',
    4: 'assets/img/certificados/scrum.jpg',
    5: 'assets/img/certificados/figma.jpg',
    6: 'assets/img/certificados/bootstrap.jpg'
}