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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (root === null) return false;
        if (this.dfs(root, subRoot)) return true;
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
    dfs(node, subNode) {
        if (node === null && subNode === null) return true;
        if (node !== null && subNode === null) return false;
        if (node === null && subNode !== null) return false;
        if (node.val !== subNode.val) return false;
        return this.dfs(node.left, subNode.left) && this.dfs(node.right, subNode.right);
    }
}
