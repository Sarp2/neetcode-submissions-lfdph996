class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res: number[][] = [];
        this.dfs(nums, 0, [], res);
        return res;
    }

    dfs(nums: number[], i: number, subset: number[], res: number[][]) {
        // Index cannot be greater than length of the numbers. If it's, it is gonna becomes out of bounds.
        if (i >= nums.length) {
            // Copy the current subset and push the result array
            res.push([...subset]);
            return;
        }

        // decision to include nums[i]
        subset.push(nums[i]);
        this.dfs(nums, i + 1, subset, res);

        // decision to not include nums[i]
        subset.pop();
        this.dfs(nums, i + 1, subset, res);
    }
}

