const cursos = document.getElementById("cursos");

cursos.addEventListener("change", () => {

    let idCurso = cursos.selectedIndex;
    let nomeCurso = cursos.options[idCurso].innerText;

    let confirma = confirm(`Deseja realmente abrir uma nova guia com os conteúdos do curso de ${nomeCurso}?`);

    if (confirma) {
        let form = document.createElement("form");
        form.classList.add("d-none");
        form.action = "curso.html";
        form.target = "_blank";

        let input = document.createElement("input");
        input.value = idCurso;
        input.type = "text";
        input.name = "curso";

        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
    }

});
