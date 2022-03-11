let specialities = [
    {
        "speciality": "Психология семейных отношений",
        "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/pso.jpg",
        "link": "/specialnosti-perepodgotovki/psihologiya-semeinyh-otnoshenii"
    },
    {
        "speciality": "Психология",
        "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/psy.jpg",
        "link": "/specialnosti-perepodgotovki/psihologiya"
    },
    {
        "speciality": "Практическая психология",
        "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/pp.jpg",
        "link": "/specialnosti-perepodgotovki/prakticheskaya-psihologiya"
    },
    {
        "speciality": "Социальная педагогика",
        "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/sp.jpg",
        "link": "/specialnosti-perepodgotovki/socialnaya-pedagogika"
    },
    {
        "speciality": "Педагогическая деятельность специалистов",
        "image": "/admin-panel/vendor/kcfinder/upload/images/photogall/DO,PP.png",
        "link": "/specialnosti-perepodgotovki/pedagogicheskaya-deyatelnost-specialistov"
    },
    {
        "speciality": "Психология управления",
        "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/pu.jpg",
        "link": "/specialnosti-perepodgotovki/psihologiya-upravleniya"
    },
    {
        "speciality": "Логопедия",
        "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/logop.jpg",
        "link": "/specialnosti-perepodgotovki/logopediya"
    },
    {
        "speciality": "Интегрированное обучение и воспитание в дошкольном образовании",
        "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/ido.jpg",
        "link": "/specialnosti-perepodgotovki/integrirovannoe-obuchenie-i-vospitanie-v-doshkolnom-obrazovanii"
    },
    {
        "speciality": "Интегрированное обучение и воспитание в школьном образовании",
        "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/ish.jpg",
        "link": "/specialnosti-perepodgotovki/integrirovannoe-obuchenie-i-vospitanie-v-shkolnom-obrazovanii"
    },
    {
        "speciality": "Олигофренопедагогика",
        "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/oligo.jpg",
        "link": "/specialnosti-perepodgotovki/oligofrenopedagogika"
    },
    {
        "speciality": "Иностранный язык",
        "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/eng.jpg",
        "link": "/specialnosti-perepodgotovki/inostrannyi-yazyk"
    },
    {
        "speciality": "Информатика",
        "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/inf.jpg",
        "link": "/specialnosti-perepodgotovki/informatika"
    },
    {
        "speciality": "Математика",
        "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/matem.jpg",
        "link": "/specialnosti-perepodgotovki/matematika"
    },
    {
        "speciality": "Физкультурно-оздоровительная работа в учреждениях образования",
        "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/fo.jpg",
        "link": "/specialnosti-perepodgotovki/fizkulturno-ozdorovitelnaya-rabota-v-uchrezhdeniyah-obrazovaniya-kvalifikaciya-prepodavatel-fizicheskoi-kultury"
    },
    {
        "speciality": "Начальное образование",
        "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/no.jpg",
        "link": "/specialnosti-perepodgotovki/nachalnoe-obrazovanie"
    },
    {
        "speciality": "Дошкольное образование",
        "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/do.jpg",
        "link": "/specialnosti-perepodgotovki/doshkolnoe-obrazovanie"
    },
    {
        "speciality": "Менеджмент учреждений дошкольного, общего среднего образования, дополнительного образования детей и молодежи",
        "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/mo.jpg",
        "link": "/specialnosti-perepodgotovki/menedzhment-uchrezhdenii-doshkolnogo-obshchego-srednego-obrazovaniya-dopolnitelnogo-obrazovaniya-detei-i-molodezhi"
    },
    {
        "speciality": "Web-дизайн и компьютерная графика",
        "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/webdes.png",
        "link": "/specialnosti-perepodgotovki/web-dizain-i-kompyuternaya-grafika"
    }
]
let textarea = document.querySelector("textarea")
let spec1 = document.querySelector("#spec1")
let select1 = document.querySelector("#select1")
let arr = []
specialities.forEach(el => {
    arr.push(`<option value=${el.link}>${el.speciality}</option>`)
})

select1.innerHTML = arr

let button = document.querySelector("button")

button.addEventListener("click", addItem)


function addItem() {
    console.log("dfsd")
}


console.log()


let arr1 = [

    {
        "dateNum": 1653426000000,
        "dateText": "25 мая"
    },
    {
        "dateNum": 1649883600000,
        "dateText": "14 апреля"
    },
]


console.log(arr1.sort((a,b) => a.dateNum - b.dateNum))

// let images = {
//     "Психология семейных отношений": "po.jpg",
//     "Дошкольное образование": "do.jpg",
//     "Начальное образование": "no.jpg",
//     "Физкультурно-оздоровительная работа в учреждениях образования": "fo.jpg",
//     "Интегрированное обучение и воспитание в дошкольном образовании": "ido.jpg",
//     "Психология семейных отношений": "pso.jpg",
//     "Логопедия": "logop.jpg",
//     "Информатика": "inf.jpg",
// }
//
// function addItem() {
//     result = result + ` <div class="modal-body">
//         <div class="dimming_effect">
//             <figure class="picture_caption">
//             <a class="modal_link" href="/specialnosti-perepodgotovki/${select1.options[select1.selectedIndex].value}">
//             <img alt="1" class="modal_picture" src="https://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/${images[select1.options[select1.selectedIndex].text]}"/>
//             </a>
//                 <figcaption class="start_date">
//                 <a class="modal_link modal_span" href="/specialnosti-perepodgotovki/${select1.options[select1.selectedIndex].value}">
//                 начало обучения:<br/>
//                     ${"марта"}</a>
//                     </figcaption>
//             </figure>
//
//
//             <div class="flx_cont">
//                 <p class="speciality_name"><a class="modal_link"
//                                                   href="/specialnosti-perepodgotovki/${select1.options[select1.selectedIndex].value}">${select1.options[select1.selectedIndex].text}</a></p>
//             </div>
//         </div>
//     </div>`
//
//     textarea.value = result
//
// }
//
// textarea.value = result



