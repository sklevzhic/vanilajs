let result = ``
// select3.options[select3.selectedIndex].text
let textarea = document.querySelector("textarea")
let spec1 = document.querySelector("#spec1")
let select1 = document.querySelector("#select1")

let button = document.querySelector("button")

button.addEventListener("click", addItem)


let images = {
    "Психология семейных отношений": "po.jpg",
    "Дошкольное образование": "do.jpg",
    "Начальное образование": "no.jpg",
    "Физкультурно-оздоровительная работа в учреждениях образования": "fo.jpg",
    "Интегрированное обучение и воспитание в дошкольном образовании": "ido.jpg",
}

function addItem() {
    result = result + ` <div class="modal-body">
        <div class="dimming_effect">
            <figure class="picture_caption">
            <a class="modal_link" href="/specialnosti-perepodgotovki/${select1.options[select1.selectedIndex].value}">
            <img alt="1" class="modal_picture" src="https://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/${images[select1.options[select1.selectedIndex].text]}"/>
            </a>
                <figcaption class="start_date">
                <a class="modal_link modal_span" href="/specialnosti-perepodgotovki/${select1.options[select1.selectedIndex].value}"> 
                начало обучения:<br/>
                    28 февраля</a>
                    </figcaption>
            </figure>
            <div class="flx_cont">
                <p class="speciality_name"><a class="modal_link"
                                                  href="/specialnosti-perepodgotovki/${select1.options[select1.selectedIndex].value}">${select1.options[select1.selectedIndex].text}</a></p>
            </div>
        </div>
    </div>`

    textarea.value = result

}

textarea.value = result



