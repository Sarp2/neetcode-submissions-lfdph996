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
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isUnbalanced;
    
    isBalanced(root) {
        if (root === null) return true;
        this.dfs(root);

        if (this.isUnbalanced === true) return false;
        return true;
    }
    dfs(node) {
        if (node === null) return 0;
        const left = this.dfs(node.left);
        const right = this.dfs(node.right);


        if (left > right) {
            const sub = left - right;
            if (sub > 1) {
                this.isUnbalanced = true;
            }
        }

        if (right > left) {
            const sub = right - left;
            if (sub > 1) {
                this.isUnbalanced = true;
            }
        }
        
        return Math.max(left, right) + 1;
    }
}
