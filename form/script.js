let form = document.querySelector("form")
let formInputs = form.querySelectorAll("input")
form.addEventListener("submit", sendForm, true)
form.addEventListener("blur", checkFill, true)


function sendForm(event) {
    event.preventDefault()
    formInputs.forEach(el => {
        if (el.value === "") {
            el.classList.add("error")
        }
    })
}

function checkFill(event) {
    event.target.value === ""
        ? event.target.classList.add("error")
        : event.target.classList.remove("error")
}