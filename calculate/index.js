let a = document.querySelector("#value1")
let b = document.querySelector("#value2")
let res = document.querySelector("#res")
let button = document.querySelector("button")
let oper = document.querySelector("#oper")

function f1() {
    let res1 = calc(a.value,b.value, oper.value)
    res.innerText =  res1
    a.value = ""
    b.value = ""
}

button.addEventListener("click", f1)


function calc(v1,v2, oper) {
    return `${v1} ${oper} ${v2} = ${eval(`${v1} ${oper} ${v2}`)}`
}