let a = document.querySelector("#value1")
let b = document.querySelector("#value2")
let res = document.querySelector("#res")
let button = document.querySelector("button")
let oper = document.querySelector("#oper")
let inputs = Array.from(document.querySelectorAll("input"))
button.disabled = true


inputs.map(el => {
    el.addEventListener('input', handlerInput)
})


button.addEventListener("click", sendToCalc)


function total(v1, v2, oper) {
    return `${v1} ${oper} ${v2} = ${eval(`${v1}
    ${oper}
    ${v2}`)}`
}

function sendToCalc() {
    let res1 = total(a.value, b.value, oper.value)
    res.innerText = res1
    a.value = ""
    b.value = ""
    button.disabled = true
}

function handlerInput(e) {
    if (inputs.every(el => !!el.value)) {
        button.disabled = false
    }
    this.value = e.target.value.replace(/\D+/g, "")
}

