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
    isPalindrome(head) {
        let middle = head;
        let fast = head;

        // Find the middle
        while (fast !== null && fast.next !== null) {
            middle = middle.next;
            fast = fast.next.next;
        }

        let prev = null;
        
        // Reverse the second half
        while (middle !== null) {
            const next = middle.next;
            middle.next = prev;

            prev = middle;
            middle = next;
        }

        let start = head;

        // Compare both halves
        while (prev !== null) {
            if (prev.val !== start.val) {
                return false;
            }

            prev = prev.next;
            start = start.next;
        }

        return true;
    }
}
