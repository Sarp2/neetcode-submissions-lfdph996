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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        // 1. Start at the given head and try to move forward k nodes
        let cur = head;
        let group = 0;

        // Count how many nodes are available using counter group.
        while (cur && group < k) {
            cur = cur.next;
            group++;
        }

        // 2. If exactly k nodes exist
        if (group === k) {
            // Recursively call the function on the node after these k nodes cur.
            cur = this.reverseKGroup(cur, k);

            // Reverse the current group of k: nodes
            while (group-- > 0) {
                // Temporarily store head.next in tmp
                let tmp = head.next;
                
                // Point head.next to the result of the recursive call
                head.next = cur;

                // Move forward
                cur = head
                head = tmp;
            }
            // After reversing all k nodes, return the new head of this group
            return cur;
        }

        // If fewer than k, return the current head unchanged
        return head;
    }
}
