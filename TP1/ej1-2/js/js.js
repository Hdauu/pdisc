const btn = document.querySelector("#btn");
const form = document.querySelector("#form")
const body = document.querySelector("body")

form.addEventListener("submit", haceAlgo);

function haceAlgo(e){
    e.preventDefault();

    for(let i = 0; i<100; i++){
const parrafo = document.createElement("p")

        parrafo.textContent = "Aaa"
        form.insertBefore(parrafo, document.querySelector("fieldset"))
        setInterval(() => {
            parrafo.remove();
        }, 3000);
    }
}
