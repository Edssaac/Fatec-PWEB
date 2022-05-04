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