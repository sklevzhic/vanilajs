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


        // if (count === this.countWin) {
        //     alert("win")
        // }
        // if (value === currentValue) {
        //     count++
        // } else {
        //     count = 0
        // }

        let startRow = +rowIdx - this.countWin < 0 ? 0 : +rowIdx - this.countWin
        let endRow = +rowIdx + this.countWin > this.size ? this.size - 1 : +rowIdx + this.countWin
        let rowArray = []
        let collArray = []
        let diagonalLRArray = []
        let diagonalRLArray = []

        let count = 0


        // Парсинг строки
        let horizontalArray = this.cells[colIdx]
        rowArray = horizontalArray.map(el => el.value)

        // Парсинг столбца
        this.cells[colIdx].forEach((el, i) => {
            collArray.push(this.cells[i][rowIdx].value)
        })

        // Парсинг диагонали л-р
        let cellsLength = this.cells.length - 1

        let startIndex = rowIdx - colIdx
        let x
        let y

        if (startIndex > 0) {
            x = startIndex
            y = 0

            let aa = cellsLength - x
            console.log(aa)
            for (let i = 0; i <= aa; i++) {
                console.log(i)
                x++
                y++
            }

        }
        if (startIndex < 0) {
            x = 0, y = Math.abs(startIndex)
        }


    }
}

let wrapper = document.querySelector(".wrapper")
let board = new Board(10, 3)
let step = 0
board.initialDesk()

function renderBoard() {
    board.cells.forEach((rowCells, indexRow) => {
        let boardRow = document.createElement('div');
        boardRow.classList.add("board__row")
        boardRow.classList.add("flex")

        rowCells.forEach((cell, indexCol) => {
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
            // if (!cell.value) {
            //     boardCell.classList.add(step % 2 !== 0 ? "text-red-700" : "text-blue-700" )
            //     boardCell.classList.add("text-opacity-0")
            //     boardCell.classList.add("hover:bg-gray-200")
            //     boardCell.classList.add("hover:text-opacity-50")
            //     boardCell.innerText = step % 2 !== 0 ? "0" : "X"
            // }
            boardCell.innerText = indexCol + " " + indexRow
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


