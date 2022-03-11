let items = document.querySelectorAll(".speciality-item ")
let arr =  Array.from(items)
let b = arr.map(el => {

    return {
        speciality: el.children[1].innerText.slice(0, el.children[1].innerText.indexOf("\n")),
        image: el.children[1].children[0].getAttribute("src").replace("https://ipkip.bspu.by",""),
        link: el.children[1].children[2].getAttribute("href"),
        date: el.children[0].innerText.match(/[0-9]{2}.[0-9]{2}.[0-9]{4}/g)
    }
})

console.log(b)