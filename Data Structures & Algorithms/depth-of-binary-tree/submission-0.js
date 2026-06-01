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
    maxDepth(root) {
        if (root === null) return 0;
        const left = this.maxDepth(root.left);
        const right = this.maxDepth(root.right);
        if (left > right) return left + 1;
        return right + 1;
    }
}
