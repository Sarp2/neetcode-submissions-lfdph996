/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

/**
Step 1:          Step 2:
        1                 0
      /   \             /   \
     3     2           3     1
    / \   / \         / \   / \
   7   5 6   0       7   5 6   2
   
   0 < 2, swap!       0 < 1, swap!
 */

class MiniHeap {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    insert(node) {
        this.heap.push(node);
        let i = this.heap.length - 1;
        let parentI = Math.floor((i - 1) / 2);

        while (this.heap[parentI]?.val > this.heap[i].val) {
            let temp = this.heap[i];
            this.heap[i] = this.heap[parentI];
            this.heap[parentI] = temp;

            i = parentI;
            parentI = Math.floor((i - 1) / 2);
        }
    }

    extractMin() {
        let root = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        let i = 0;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        while (left < this.heap.length) {
            let smallest = left;

            if (right < this.heap.length && this.heap[right].val < this.heap[left].val) {
                smallest = right;
            }

            if (this.heap[i].val <= this.heap[smallest].val) break;

            let temp = this.heap[i];
            this.heap[i] = this.heap[smallest];
            this.heap[smallest] = temp;

            i = smallest;
            left = 2 * i + 1;
            right = 2 * i + 2;
        }

        return root;
    }
}

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const heap = new MiniHeap();
        const dummy = new ListNode(0);
        let curr = dummy;

        // Push head of each list into heap
        for (let head of lists) {
            if (head) heap.insert(head);
        }

        while (!heap.isEmpty()) {
            const node = heap.extractMin();
            curr.next = node;
            curr = curr.next;

            if (node.next) heap.insert(node.next);
        }

        return dummy.next;
    }
}
