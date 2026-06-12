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
     * @return {number[][]}
     */
    mapper = new Map();
    levelOrder(root) {
        if (root === null) return [];
        this.mapper.set(0, [root.val]);
        
        this.dfs(root.left, 1);
        this.dfs(root.right, 1);
        
        const result = [];
        for (let i = 0; i < this.mapper.size; i++) result.push(this.mapper.get(i));
        return result;
    }
    dfs(node, level) {
        if (node === null) return;
        const rest = this.mapper.get(level);
        if (!rest) {
            this.mapper.set(level ,[node.val]);
        } else {
            this.mapper.set(level ,[...rest, node.val]);
        }
        this.dfs(node.left, level + 1);
        this.dfs(node.right, level + 1);
    }
}
