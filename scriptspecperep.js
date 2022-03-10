let items = document.querySelectorAll(".speciality-item ")
let arr =  Array.from(items)
let b = arr.map(el => {

    return {
        speciality: el.children[1].innerText.slice(0, el.children[1].innerText.indexOf("\n")),
        image: el.children[1].children[0].getAttribute("src").replace("https://ipkip.bspu.by",""),
        link: el.children[1].children[2].getAttribute("href")
    }
})

console.log(b)

    // [
    // {
    //     "speciality": "Психология семейных отношений",
    //     "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/pso.jpg",
    //     "link": "/specialnosti-perepodgotovki/psihologiya-semeinyh-otnoshenii"
    // },
    //     {
    //         "speciality": "Психология",
    //         "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/psy.jpg",
    //         "link": "/specialnosti-perepodgotovki/psihologiya"
    //     },
    //     {
    //         "speciality": "Практическая психология",
    //         "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/pp.jpg",
    //         "link": "/specialnosti-perepodgotovki/prakticheskaya-psihologiya"
    //     },
    //     {
    //         "speciality": "Социальная педагогика",
    //         "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/sp.jpg",
    //         "link": "/specialnosti-perepodgotovki/socialnaya-pedagogika"
    //     },
    //     {
    //         "speciality": "Педагогическая деятельность специалистов",
    //         "image": "/admin-panel/vendor/kcfinder/upload/images/photogall/DO,PP.png",
    //         "link": "/specialnosti-perepodgotovki/pedagogicheskaya-deyatelnost-specialistov"
    //     },
    //     {
    //         "speciality": "Психология управления",
    //         "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/pu.jpg",
    //         "link": "/specialnosti-perepodgotovki/psihologiya-upravleniya"
    //     },
    //     {
    //         "speciality": "Логопедия",
    //         "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/logop.jpg",
    //         "link": "/specialnosti-perepodgotovki/logopediya"
    //     },
    //     {
    //         "speciality": "Интегрированное обучение и воспитание в дошкольном образовании",
    //         "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/ido.jpg",
    //         "link": "/specialnosti-perepodgotovki/integrirovannoe-obuchenie-i-vospitanie-v-doshkolnom-obrazovanii"
    //     },
    //     {
    //         "speciality": "Интегрированное обучение и воспитание в школьном образовании",
    //         "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/ish.jpg",
    //         "link": "/specialnosti-perepodgotovki/integrirovannoe-obuchenie-i-vospitanie-v-shkolnom-obrazovanii"
    //     },
    //     {
    //         "speciality": "Олигофренопедагогика",
    //         "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/oligo.jpg",
    //         "link": "/specialnosti-perepodgotovki/oligofrenopedagogika"
    //     },
    //     {
    //         "speciality": "Иностранный язык",
    //         "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/eng.jpg",
    //         "link": "/specialnosti-perepodgotovki/inostrannyi-yazyk"
    //     },
    //     {
    //         "speciality": "Информатика",
    //         "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/inf.jpg",
    //         "link": "/specialnosti-perepodgotovki/informatika"
    //     },
    //     {
    //         "speciality": "Математика",
    //         "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/matem.jpg",
    //         "link": "/specialnosti-perepodgotovki/matematika"
    //     },
    //     {
    //         "speciality": "Физкультурно-оздоровительная работа в учреждениях образования",
    //         "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/fo.jpg",
    //         "link": "/specialnosti-perepodgotovki/fizkulturno-ozdorovitelnaya-rabota-v-uchrezhdeniyah-obrazovaniya-kvalifikaciya-prepodavatel-fizicheskoi-kultury"
    //     },
    //     {
    //         "speciality": "Начальное образование",
    //         "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/no.jpg",
    //         "link": "/specialnosti-perepodgotovki/nachalnoe-obrazovanie"
    //     },
    //     {
    //         "speciality": "Дошкольное образование",
    //         "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/do.jpg",
    //         "link": "/specialnosti-perepodgotovki/doshkolnoe-obrazovanie"
    //     },
    //     {
    //         "speciality": "Менеджмент учреждений дошкольного, общего среднего образования, дополнительного образования детей и молодежи",
    //         "image": "/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/mo.jpg",
    //         "link": "/specialnosti-perepodgotovki/menedzhment-uchrezhdenii-doshkolnogo-obshchego-srednego-obrazovaniya-dopolnitelnogo-obrazovaniya-detei-i-molodezhi"
    //     },
    //     {
    //         "speciality": "Web-дизайн и компьютерная графика",
    //         "image": "http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/specialnosti_perepodgotovki/webdes.png",
    //         "link": "/specialnosti-perepodgotovki/web-dizain-i-kompyuternaya-grafika"
    //     }
    // ]