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
        let count = 0;
        const queue = [root];

        while (queue.length > 0) {
            const levelSize = queue.length;
            count++;
            for (let i = 0; i < levelSize; i++) {
                const curr = queue.shift();
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
        }
        return count;
    }
}
