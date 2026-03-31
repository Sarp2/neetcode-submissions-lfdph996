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
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head;
        let prev = null;
        
        while (curr !== null) {
            // Save the next node
            const next = curr.next;

            // Assign curr.next to prev;
            curr.next = prev;

            // Assign prev to current node
            prev = curr;
        
            // Assign current node to next node
            curr = next;
        }

        return prev;
    }
}
