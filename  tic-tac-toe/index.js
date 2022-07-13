let wrapper = document.querySelector(".wrapper")


class Cell {
    constructor(value) {
        this.value = null
    }

    renderCell() {
        let div = document.createElement("div")
        div.classList.add("border")
        return div
    }
}
class Board {
    constructor(size, countWin) {
        this.size = size;
        this.countWin = countWin
    }

    initialDesk() {

    }

}

let a = new Board(10, 3)
console.log(a)
