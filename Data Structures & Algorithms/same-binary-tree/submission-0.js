/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    arrayP = [];
    arrayQ = [];
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        this.dfs(p, true);
        this.dfs(q, false);

        for (let i = 0; i < this.arrayP.length; i++) {
            if (this.arrayP[i] !== this.arrayQ[i]) return false;
        }
        return true;
    }
    dfs(root, isP) {
        if (root === null) {  
            if (isP === true) {
                this.arrayP.push(undefined);
            } else {
                this.arrayQ.push(undefined);
            }
            return;
        }

        if (isP === true) {
            this.arrayP.push(root.val);
        } else {
            this.arrayQ.push(root.val);
        }

        this.dfs(root.left, isP);
        this.dfs(root.right, isP);
    }
}
