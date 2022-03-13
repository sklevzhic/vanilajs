let coursesElements = document.querySelectorAll(".aalink")

// let courses = Array.from(coursesElements).map(el => el.getAttribute("href"))
let courses = [
    "https://bspu.by/moodle/course/view.php?id=3431",
    "https://bspu.by/moodle/course/view.php?id=4105",

]

const delay = (n) => {
    return new Promise (res => {
        let tm = setTimeout (() => res(tm), n);
    })
}

const fd = async () => {

    for (let i = 0; i <= courses.length; i++) {
        window.location.href = "/courses[]" + i

        await delay(9000);
        let a = document.querySelector("h1").innerText
        console.log(a)

    }
}
fd()