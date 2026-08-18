class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const array = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                array.push(matrix[i][j]);
            }
        }

        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);
            if (array[middle] === target) {
                return true;
            }

            if (array[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return false;
    }
}
