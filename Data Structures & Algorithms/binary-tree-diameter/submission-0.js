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

    diameter = 0;
    
    diameterOfBinaryTree(root) {
        if (root === null) return null;
        this.dfs(root);
        return this.diameter;
    }
    
    dfs(node) {
        if (node === null) return 0;
        const left = this.dfs(node.left);
        const right = this.dfs(node.right);
        const sum = left + right;
        if (sum > this.diameter) {
            this.diameter = sum;
        }
        return Math.max(left, right) + 1;
    }
}
