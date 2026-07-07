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
     * @return {number}
     */
    max = -Infinity;
    
    maxPathSum(root) {
        this.dfs(root);
        return this.max;
    }
    
    dfs(node) {
        if (node === null) return null;
        const left = Math.max(0, this.dfs(node.left) ?? 0);
        const right = Math.max(0, this.dfs(node.right) ?? 0);

        const turn = node.val + left + right;
        this.max = Math.max(this.max, turn)

        return node.val + Math.max(0, left, right);
    }
}
