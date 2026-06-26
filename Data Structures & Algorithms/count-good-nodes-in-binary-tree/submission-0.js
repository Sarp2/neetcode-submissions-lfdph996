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
    count = 1;
    goodNodes(root) {
        if (root === null) return null;
        this.dfs(root.left, root.val);
        this.dfs(root.right, root.val);
        return this.count;
    }
    dfs(node, max) {
        if (node === null) return;
        if (node.val >= max) this.count++;
        this.dfs(node.left, Math.max(max, node.val));
        this.dfs(node.right, Math.max(max, node.val));
    }
}
