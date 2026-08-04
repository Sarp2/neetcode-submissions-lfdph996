class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */

    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a, b) => a - b);
        const result: number[][] = [];

        const backtrack = (index: number, path: number[], total: number) => {
            if (total === target) {
                result.push([...path]);
                return;
            }

            if (total > target || index === candidates.length) return;

            path.push(candidates[index]);
            backtrack(index + 1, path, total + candidates[index]);
            path.pop();
            
            let count = 0;
            for (let i = index; i < candidates.length; i++) {
                if (candidates[index] === candidates[i]) count++;
            }
            
            backtrack(index + count, path, total);
        }
        backtrack(0, [], 0);
        return result;
    }
}
