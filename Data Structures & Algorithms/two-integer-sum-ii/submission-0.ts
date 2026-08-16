class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const leftVal = numbers[left];
            const rightVal = numbers[right];

            if (leftVal + rightVal === target) {
                return [left + 1, right + 1]
            } else if (leftVal + rightVal < target) {
                left++;
            } else if (leftVal + rightVal > target) {
                --right;
            }
        }
    }
}
