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

    isValidBST(root) {
        if (root === null) return true;
        return this.dfs(root, -Infinity, +Infinity);
    }
    dfs(node, min, max) {
        if (node === null) return;
        if (node.val > max) return false;
        if (node.val < min) return false;
        if (node.val === min) return false;
        if (node.val === max) return false;

        if (node.left !== null) {
            const result = this.dfs(node.left, min, node.val);
            if (result === false) return false;
        }
        if (node.right !== null) {
            const result = this.dfs(node.right, node.val, max);
            if (result === false) return false;
        }
        return true;
    }
}
