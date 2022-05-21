const base = document.getElementById("base");
const altura = document.getElementById("altura");
const area = document.getElementById("area");
const botaoCalcular = document.getElementById("btnCalcular");
const botaoLimpar = document.getElementById("btnLimpar");

function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calcularArea = function() {
        return (this.base * this.altura);
    }
}

botaoCalcular.addEventListener("click", () => {
    retangulo = new Retangulo(base.value, altura.value);
    area.value = retangulo.calcularArea();
})

function limpar() {
    base.value = '';
    altura.value = '';
    area.value = '';

    base.focus();
}

botaoLimpar.addEventListener("click", limpar);