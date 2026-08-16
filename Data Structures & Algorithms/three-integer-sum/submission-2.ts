class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const result: number[][] = [];
        const seen = new Set();
        
        for (let middle = 0; middle < nums.length - 2; middle++) {
            let left = middle + 1;
            let right = nums.length - 1;

            while (left < right) {
                const leftVal = nums[left];
                const middleVal = nums[middle];
                const rightVal = nums[right];

                const sum = leftVal + middleVal + rightVal;

                if (sum === 0) {
                    const key = [leftVal, middleVal, rightVal].join("");
                    if (!seen.has(key)) {
                        seen.add(key);
                        result.push([leftVal, middleVal, rightVal]);
                    }
                    left++;
                    right--;
                } else if (sum > 0) {
                    right--;
                } else if (sum < 0) {
                    left++;
                }
            }
        }

        return result;
    }
}
