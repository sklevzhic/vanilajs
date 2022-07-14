function isValidSubsequence(array, sequence) {
    let flag = sequence.length;
    let count=0;
    for (var i=0; i<sequence.length; i++){
        for (var j=count;j<array.length;j++)
            if (sequence[i]==array[j])
                count++;
    }
    if(count==flag)
        return true;
    else
        return false;
}
exports.isValidSubsequence = isValidSubsequence;

describe("test", () => {
    it("valid 1", () => {
        // в тайпскрипте есть кортежи, могут находиться разные данные в одном массиве
        // null - очень часто присутствует кстати, undefined может попасться тоже)))
        // https://metanit.com/web/typescript/2.10.php
        const result = isValidSubsequence(
            [5, 22, 25, 6, 8, 10, 10, 1],
            [6, 10, 1]
        ); // xD

        expect(result).toBeTruthy();
    });

    it("valid 2", () => {
        const result = isValidSubsequence([], []);

        expect(result).toBeTruthy();
    });

    it("valid 3", () => {
        const result = isValidSubsequence([1], [1]);

        expect(result).toBeTruthy();
    });

    it("valid 4", () => {
        const result = isValidSubsequence([1, 2, 3], [1, 2, 3]);

        expect(result).toBeTruthy();
    });

    it("valid 5", () => {
        const result = isValidSubsequence([1, 10, 100, 3242, 2, 555, 3, 999], [1, 2, 3]);

        expect(result).toBeTruthy();
    });

    it("valid 6", () => {
        const result = isValidSubsequence([99, 3], []);

        expect(result).toBeTruthy();
    });

    it("valid 7", () => {
        const result = isValidSubsequence([99, 3], [99]);

        expect(result).toBeTruthy();
    });

    it("valid 8", () => {
        const result = isValidSubsequence([99, 3], [3]);

        expect(result).toBeTruthy();
    });

    it("no valid 1", () => {
        const result = isValidSubsequence([1, 10, 100, 3242, 2, 555, 3, 999], [1, 22, 3]);

        expect(result).toBeFalsy();
    });

    it("no valid 2", () => {
        const result = isValidSubsequence([1, 10, 100, 3242, 2, 555, 3, 999], [99, 3]);

        expect(result).toBeFalsy();
    });

    it("no valid 3", () => {
        const result = isValidSubsequence([], [99, 3]);

        expect(result).toBeFalsy();
    });

    it("no valid 4", () => {
        const result = isValidSubsequence([ 5,  1, 22, 25,  6, -1,  8, 10], [ 5, 1, 22, 25, 6,-1, 8, 10, 10 ]);

        expect(result).toBeFalsy();
    });

    it("no valid 4", () => {
        const result = isValidSubsequence([ 5,  1, 22, 25,  6, -1,  8, 10],  [ 5,  1, 22, 22,  6, -1,  8, 10]);

        expect(result).toBeFalsy();
    });

    it("no valid 4", () => {
        const array = [5, 1, 22, 25, 6, -1, 8, 10];
        const subArray = [5, 1, 22, 22, 6, -1, 8, 10]

        const copyArray = [...array];
        const result = isValidSubsequence(array, subArray);

        expect(result).toBeFalsy();
        expect(array).toEqual(copyArray); // проверил, что твоя функция не нарушила принцип иммутабельности
    });
});