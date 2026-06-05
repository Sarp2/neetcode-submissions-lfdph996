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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSame = true;
    
    isSameTree(p, q) {
        this.dfs(p, q);
        return this.isSame;
    }
    dfs(nodeP, nodeQ) {
        if (nodeP === null && nodeQ === null) return;
        if (nodeP === null && nodeQ !== null) {
            this.isSame = false;
            this.dfs(null, nodeQ.left);
            this.dfs(null, nodeQ.right);
        }
        
        if (nodeP !== null && nodeQ === null) {
            this.isSame = false; 
            this.dfs(nodeP.left, null);
            this.dfs(nodeP.right, null);
        }
        
        if (nodeP !== null && nodeQ !== null) {
            if (nodeP.val !== nodeQ.val) this.isSame = false;
            this.dfs(nodeP.left, nodeQ.left);
            this.dfs(nodeP.right, nodeQ.right);
        }
    }
}
