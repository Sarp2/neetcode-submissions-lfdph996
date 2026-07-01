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
     * @param {number} k
     * @return {number}
     */
    count = 0;
    array = [];
    increaseCount() {
        ++this.count;
    }

    pushNodeToArray(node) {
        this.array.push(node);
    }

    getLastValueFromArray() {
        return this.array[this.array.length - 1];
    }

    isKthSmallest(k) {
        if (this.count === k) return true;
        return false;
    }

    kthSmallest(root, k) {
        if (root === null) return null;
        this.dfs(root, k);
        return this.getLastValueFromArray();
    }
    
    dfs(node, k) {
        if (node === null) return;
        
        if (this.dfs(node.left, k) === true) return true;
        
        this.increaseCount();
        this.pushNodeToArray(node.val);
        if (this.isKthSmallest(k) === true) return true;
        
        if (this.dfs(node.right, k) === true) return true;

        return false;
    }
}
