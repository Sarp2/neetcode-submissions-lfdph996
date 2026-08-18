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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let slow = head;
        let fast = head;
        let index = 0;

        while (fast && fast.next) {
            if (slow === fast && index !== 0) return true;
            slow = slow.next;
            fast = fast.next.next;
            index++;
        }

        return false;
    }
}
