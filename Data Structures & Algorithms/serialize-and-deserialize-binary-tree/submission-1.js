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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const arr = [];
        const dfs = (node) => {
            if (node === null) { arr.push('N'); return; }
            arr.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);
        return arr.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const queue = data.split(',');
        function helper() {
            const val = queue.shift();
            if (val === 'N') return null;
            const node = new TreeNode(Number(val));
            node.left = helper();
            node.right = helper();
            return node;
        }
        return helper();
    }
}
