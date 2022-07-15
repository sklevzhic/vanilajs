import {Board} from "./index";

describe("test", () => {
    it("valid 1", () => {
        const board = new Board(10,3);

        // expect(board.cells.length).toBe(10);
        expect(board.countWin).toBe(3);
        expect(board.cells).toEqual([])
        expect(board.cells).isNot()

        board.initialDesk();

        expect(board.cells.length).toBe(10);
    });
});