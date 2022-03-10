let specialities = [
    {
        discipline: '1-01 03 72 Дошкольное образование',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=419'
    },
    {
        discipline: '1-02 03 71 Иностранный язык (английский)',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=417'
    },
    {
        discipline: '1-03 03 76 Интегрированное обучение и воспитание в дошкольном образовании',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=467'
    },
    {
        discipline: '1 03 03 77 Интегрированное обучение и воспитание в школьном образовании',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=465'
    },
    {
        discipline: '1-02 05 71 Информатика',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=463'
    },
    {
        discipline: '1-02 05 72 Математика',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=469'
    },
    {
        discipline: '1-09 01 72 Менеджмент учреждений дошкольного, общего среднего образования, дополнительного образования детей и молодежи',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=457'
    },
    {
        discipline: '1-01 03 73 Начальное образование',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=451'
    },
    {
        discipline: '1-08 01 71 Педагогическая деятельность специалистов',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=461'
    },
    {
        discipline: '1-23 01 77 Психология управления',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=459'
    },
    {
        discipline: '1-03 04 71 Социальная педагогика',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=407'
    },
    {
        discipline: '1-03 02 71 Физкультурно-оздоровительная работа в учреждениях образования',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=413'
    },
    {
        discipline: '1-03 03 71 Логопедия',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=553'
    },
    {
        discipline: '1-23 01 71 Психология',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=637'
    },
    {
        discipline: '1-03 04 72 Практическая психология',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=639'
    },
    {
        discipline: '1-23 01 75 Психология семейных отношений',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=641'
    },
    {
        discipline: '1-03 03 08 Олигофренопедагогика',
        link: 'https://bspu.by/moodle/course/index.php?categoryid=1097'
    }
]

function getCourses() {
    let tempArr = []
    let categories = document.querySelectorAll(".category")
    let courses = document.querySelectorAll(".coursebox")
    if (categories.length !== 0) {
        let a = fetchCoursesFromSpecialities(categories)
        tempArr.push(...a)
    }

    if (courses.length !== 0) {
        specialities[0].courses = Array.from(courses).map(el => {
            return {
                discipline: el.children[0].innerText,
                teacher: el.children[1].innerText.replace("Преподаватель курса: ", ""),
            }
        })
    }

    // specialities[0].courses = Array.from(courses).map(el => {})

    return tempArr
}
function fetchCoursesFromSpecialities(arr) {
    return Array.from(arr).map(el => {
        return `https://bspu.by/moodle/course/index.php?categoryid=${el.getAttribute("data-categoryid")}`
    })
}

console.log(getCourses())

