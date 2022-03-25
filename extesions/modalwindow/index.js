window.addEventListener("load", () => {

    let items = document.querySelectorAll(".speciality-item ")
    let arr = Array.from(items)
    let b = arr.map(el => {
        return {
            speciality: el.children[1].innerText.slice(0, el.children[1].innerText.indexOf("\n")),
            image: el.children[1].children[0].getAttribute("src").replace("https://ipkip.bspu.by", ""),
            link: el.children[1].children[2].getAttribute("href"),
            date: getMinDate(el.children[0].textContent.replace(new RegExp("\\r?\\n", "g"), "")
            )
        }
    })

    function getMinDate(str) {
        let dates = str.match(/[0-9]{2}.[0-9]{2}.[0-9]{4}/g)

        if (dates == null) {
            return {dateNum: 9999999999998}
        } else {
            let arr = Array.from(dates)
            let newArr = arr.map(el => formatDate(el))
            newArr.sort((a, b) => a.dateNum - b.dateNum)
            let dateNow = Date.now() + 518400000;

            let currentDate = (newArr[0].dateNum > dateNow) ? newArr[0] : newArr[1] || {dateNum: 9999999999998}
            return currentDate
        }

    }

    function formatDate(date) {
        let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
        let a = date.split(".")
        let newDate = new Date(`${a[2]}/${a[1]}/${a[0]}`).getTime();

        let dateNow = Date.now();
        if (dateNow > newDate) {
            return {dateNum: 9999999999999}
        }

        let datetext = months[a[1].replace("0", "") - 1]

        return {
            dateNum: newDate,
            dateText: a[0].replace(/^0/, "") + " " + datetext
        }
    }

    let rees = ''

    let sortSpecialities = b.sort((a, b) => a.date.dateNum - b.date.dateNum)
    const deleteItem = (e) => {
        e.preventDefault()
        sortSpecialities = sortSpecialities.filter(el => !e.currentTarget.innerText.includes(el.speciality))
        rerender()
        document.querySelector("textarea").value = rees
    }


    rerender()


    function rerender() {
        rees = ''

        for (let i = 0; i <= 2; i++) {
            rees += ` <div class="modal-body item">
        <div class="dimming_effect">
            <figure class="picture_caption">
            <a class="modal_link" href=${sortSpecialities[i].link}>
            <img alt="1" class="modal_picture" src=${sortSpecialities[i].image}>
            </a>
                <figcaption class="start_date">
                <a class="modal_link modal_span" href=${sortSpecialities[i].link}>
                начало обучения:<br/>
                    ${sortSpecialities[i].date.dateText}</a>
                    </figcaption>
            </figure>


            <div class="flx_cont">
                <p class="speciality_name"><a class="modal_link"
                                                  href=${sortSpecialities[i].link}>${sortSpecialities[i].speciality}</a></p>
            </div>
        </div>
    </div>`
        }


        let modal = document.createElement("div")
        modal.innerHTML = "dsfdf"

        modal.style.position = "absolute";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.left = "0";
        modal.style.top = "0";
        modal.style.background = "#ffffffa3";
        modal.style.padding = "100px"


        document.body.append(modal)

        modal.innerHTML = `<div class="modal-content" id="modal-content-id">
<div class="modal_wrapper">
<div class="modals" style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
${rees}
</div>

</div>
<button id="btnsend" onclick="getCode()">sfsd</button>
</div>`


        document.querySelectorAll(".item").forEach((el, i) => {
            el.addEventListener("click", (e) => deleteItem(e, i))
        })


    }

    document.querySelector("#btnsend").addEventListener("click", getCode)

    function getCode() {
        let textarea = document.createElement("textarea")
        document.querySelector(".modal_wrapper").append(textarea)
        textarea.value = document.querySelector(".modals").outerHTML
    }

})


