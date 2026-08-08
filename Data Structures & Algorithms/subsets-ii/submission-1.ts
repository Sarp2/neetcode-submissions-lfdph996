class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const result: number[][] = [];
        const backtrack = (index: number, path: number[]) => {
            if (index >= nums.length) {
                result.push([...path]);
                return;
            }
            
            path.push(nums[index]);
            backtrack(index + 1, path);
            path.pop();

            let count = 0;
            for (let i = index; i < nums.length; i++) {
                if (nums[i] === nums[index]) count++;
            }
            console.log('count', count);

            backtrack(index + count, path);
        }
        backtrack(0, []);
        return result;
    }
}
