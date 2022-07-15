class Cell {
    constructor(value) {
        this.value = null
        this.id = Math.floor(Math.random() * (10000 - 1 + 1)) + 1; // случайное от 1 до 10000
    }

}

export class Board {
    countWin = 3
    constructor(size, cells) {
        this.cells = cells
        this.size = size
    }

    initialDesk() {
        this.cells = getDesk(this.size);
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

        // Парсинг диагонали л-п
        let cellsLength = this.cells.length - 1
        let startIndex = rowIdx - colIdx
        let x
        let y

        if (startIndex >= 0) {
            x = startIndex
            y = 0
            let endIndex = cellsLength - startIndex

            for (let i=0; i<=endIndex; i++) {
                diagonalLRArray.push(this.cells[y][x].value)
                x++
                y++
            }
        }
        if (startIndex < 0) {
            x = 0
            y = Math.abs(startIndex)
            let endIndex = cellsLength + startIndex
            for (let i=0; i<=endIndex; i++) {
                diagonalLRArray.push(this.cells[y][x].value)
                x++
                y++
            }
        }

        // Парсинг диагонали п-л
        let startIndex1 = +rowIdx + +colIdx
        let x1
        let y1
        if (startIndex1 < 10) {
            x1 = startIndex1
            y1 = 0

            for (let i=0; i<=startIndex1; i++) {
                diagonalRLArray.push(this.cells[y1][x1].value)
                x1--
                y1++
            }

        }
        if (startIndex1 >= 10) {
            x1 = startIndex1
            y1 = 0
            console.log(x1)
            console.log(y1)
            // for (let i=0; i<=startIndex1; i++) {
            //     diagonalRLArray.push(this.cells[y1][x1].value)
            //     x1--
            //     y1++
            // }
        }
        console.log(diagonalRLArray)

    }
}

function getDesk(size) {
    let currentCells = []
    for (let i = 0; i < size; i++) {
        let row = []
        for (let j = 0; j < size; j++) {
            row.push(new Cell())
        }

        this.cells.push(row)
    }
    return currentCells
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


