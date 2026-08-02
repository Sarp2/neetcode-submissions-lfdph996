class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const result: number[][] = [];
        const backtrack = (index: number, path: number[], total: number) => {
            // Check if the total is equal to target
            if (total === target) {
                // If it is, push the copy of path to the result and return early
                result.push([...path]);
                return;
            }
            // If index and total are larger than nums.length and target, return early
            if (index >= nums.length || total > target) return;

            // Take the current number
            path.push(nums[index]);
            backtrack(index, path, total + nums[index]);
            path.pop();
            
            // Skip the current number
            backtrack(index + 1, path, total);
        }

        backtrack(0, [], 0);
        return result;
    }
}
