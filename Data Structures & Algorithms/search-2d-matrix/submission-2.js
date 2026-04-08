class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let list of matrix) {
            let left = 0;
            let right = list.length - 1;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                console.log("Mid: ", list[mid]);
                if (list[mid] === target) return true;
                if (list[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return false;
    }
}
