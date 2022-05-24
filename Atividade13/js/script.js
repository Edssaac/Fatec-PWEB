const textoOriginal = document.getElementById("texto");
const checkMaiuscula = document.getElementById("maiuscula");
const checkMinuscula = document.getElementById("minuscula");

checkMaiuscula.addEventListener("click", () => {
    if (checkMaiuscula.checked) {
        textoOriginal.value = textoOriginal.value.toLocaleUpperCase();
    }
});

checkMinuscula.addEventListener("click", () => {
    if (checkMinuscula.checked) {
        textoOriginal.value = textoOriginal.value.toLocaleLowerCase();
    }
});