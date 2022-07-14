class Cell {
    constructor(value) {
        this.value = null
        this.id = Math.floor(Math.random() * (10000 - 1 + 1)) + 1; // случайное от 1 до 10000
    }

}
class Board {
    cells = []
    countWin = 3
    constructor(size) {
        this.size = size
    }

    initialDesk() {
        for (let i = 0; i < this.size; i++) {
            let row = []
            for (let j = 0; j < this.size; j++) {
                row.push(new Cell())
            }

            this.cells.push(row)
        }
    }
    checkWin(rowIdx, colIdx, currentValue) {
        let current = colIdx
        let start = +colIdx - 3 < 0 ? 0 : +colIdx - 3
        let end = +colIdx + 3 > this.size ? this.size : +colIdx + 3
        let count = 0
        // проверка по вертикали
        for (let i = start; i <= end; i++) {
            let value = this.cells[i][rowIdx].value
            console.log(true)
            if (true) {

            }
        }
        // // проверка по вертикали
        // let reshor = this.cells.map(el => {
        //     return el[rowIdx].value
        // })
        // let resdiag = this.cells.map(el => {
        //     return el[rowIdx].value
        // })
        // console.log(resvert)

    }
}

let wrapper = document.querySelector(".wrapper")
let board = new Board(10, 3)
let step = 0
board.initialDesk()

function renderBoard() {
    board.cells.forEach((rowCells,indexRow) => {
        let boardRow = document.createElement('div');
        boardRow.classList.add("board__row")
        boardRow.classList.add("flex")

        rowCells.forEach((cell,indexCol) => {
            let boardCell = document.createElement('div');
            boardCell.classList.add("border")
            boardCell.classList.add("w-14")
            boardCell.classList.add("h-14")
            boardCell.classList.add("text-3xl")
            boardCell.classList.add("text-center")
            boardCell.classList.add("pt-1.5")
            if (cell.value === "X") {
                boardCell.classList.add("text-blue-700")
                boardCell.innerText = cell.value
            }
            if (cell.value === "0") {
                boardCell.classList.add("text-red-700")
                boardCell.innerText = cell.value
            }
            if (!cell.value) {
                boardCell.classList.add(step % 2 !== 0 ? "text-red-700" : "text-blue-700" )
                boardCell.classList.add("text-opacity-0")
                boardCell.classList.add("hover:bg-gray-200")
                boardCell.classList.add("hover:text-opacity-50")
                boardCell.innerText = step % 2 !== 0 ? "0" : "X"
            }
            boardCell.setAttribute("data-idCell", cell.id)
            boardCell.setAttribute("data-rowIdx", indexRow)
            boardCell.setAttribute("data-colIdx", indexCol)
            boardRow.appendChild(boardCell)
        })
        wrapper.appendChild(boardRow)
    })
}

renderBoard()
wrapper.addEventListener("click", handleClickCell)

function handleClickCell(e) {
    let rowIdx = e.target.getAttribute("data-colIdx")
    let colIdx = e.target.getAttribute("data-rowIdx")
    let currentValue = step % 2 !== 0 ? "0" : "X"
    if (!board.cells[colIdx][rowIdx].value) {
        board.cells[colIdx][rowIdx].value = currentValue
        wrapper.innerHTML = ``
        step++
        renderBoard()
        board.checkWin(rowIdx, colIdx, currentValue)
    }

}