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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (root === null) return null;
        if (p === null || q === null) return null;
        return this.dfs(root, p ,q);
    }

    dfs(node, p, q) {
        if (node === null) return;
        if (p.val > node.val && q.val > node.val) return this.dfs(node.right, p, q);  
        if (p.val < node.val && q.val < node.val) return this.dfs(node.left, p, q);
        return node;
    }
}
