class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const result: string[] = [];
        const backtrack = (path: string[], open: number, close: number) => {
            if (path.length === n * 2) {
                result.push([...path].join(""));
                return;
            }

            if (open < n) {
                path.push("(")
                backtrack(path, open + 1, close);
                path.pop();

            }
            
            if (close < open) {
                path.push(")");
                backtrack(path, open, close + 1);
                path.pop();
            }
        }

        backtrack([], 0, 0)
        return result;
    }
}
