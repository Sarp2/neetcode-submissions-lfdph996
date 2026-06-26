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
     * @return {number[]}
     */
    result = [];
    rightSideView(root) {
        if (root === null) return [];
        this.dfs(root, 0);
        return this.result;
    }
    dfs(node, depth) {
        if (node === null) return;
        if (depth === this.result.length) this.result.push(node.val);
        this.dfs(node.right, depth + 1);
        this.dfs(node.left, depth + 1);
    }
}
