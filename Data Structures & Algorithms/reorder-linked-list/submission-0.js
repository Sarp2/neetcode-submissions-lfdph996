/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        // If the linked is empty, return
        if (!head) return;

        // Define a variable called nodes to collect all the nodes in the linked list
        const nodes = [];

        // Define a variable called cur and start it from head;
        let cur = head;

        // Iterate it until there is no node
        while (cur) {
            // Push each node into array
            nodes.push(cur);

            // Go to the next node
            cur = cur.next;
        }
        
        // Initialize two pointers called start and end
        let start = 0;
        let end = nodes.length - 1;

        while (start < end)  {
            // Assign start node next to end node and increase index ++;
            nodes[start].next = nodes[end];
            start++;

            if (start >= end) break;

            // Assign end node next to start node and decrease index --;
            nodes[end].next = nodes[start];
            end--;
        }

        nodes[start].next = null;
    }
}
