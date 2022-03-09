let textarea = document.querySelector("#values")
function handleClickButton() {
    let arrTextArr = textarea.value.split("•").filter(n => n)
    let result = []
    arrTextArr.forEach(el => {
        if (el.length > 8) {
            result.push(el.trim().replace("\t"," "))
        }

    })
    console.log(result)
}

document.querySelector("button").addEventListener("click", handleClickButton)