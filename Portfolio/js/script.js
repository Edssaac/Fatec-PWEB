const scroll = document.getElementById("scrollTop");

function scrollTop() {

    if (this.scrollY >= 120)
        scroll.style.visibility = "visible";
    else
        scroll.style.visibility = "hidden";
}

window.addEventListener('scroll', scrollTop);

scroll.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});








const linksCertificado = document.getElementsByClassName("spanCertificado");
const certificado = document.getElementById("certificado");

certificados = {
    0: 'assets/img/certificados/introducao_php.jpg',
    1: 'assets/img/certificados/poo_php.jpg',
    2: 'assets/img/certificados/avancado_php.jpg',
    3: 'assets/img/certificados/git.jpg',
    4: 'assets/img/certificados/scrum.jpg',
    5: 'assets/img/certificados/figma.jpg',
    6: 'assets/img/certificados/bootstrap.jpg'
}

Array.from(linksCertificado).forEach(link => {
    link.addEventListener("click", () => {
        certificado.src = certificados[link.id];
    });
});








const idade = document.getElementById("idade");

function calcIdade(data) {
    var
        d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),
        split = data.split('/'),
        novadata = split[1] + "/" + split[0] + "/" + split[2],
        data_americana = new Date(novadata),
        vAno = data_americana.getFullYear(),
        vMes = data_americana.getMonth() + 1,
        vDia = data_americana.getDate(),
        ano_aniversario = +vAno,
        mes_aniversario = +vMes,
        dia_aniversario = +vDia,
        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}

function updateAge() {
    idade.innerHTML = calcIdade('24/03/2002');
}

onload = () => {

    updateAge();
}