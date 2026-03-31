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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let prev = dummy;
        let carry = 0;

        while (l1 !== null || l2 !== null || carry !== 0) {
            const l1Val = l1 !== null ? l1.val : 0;
            const l2Val = l2 !== null ? l2.val : 0;

            let sum = l1Val + l2Val + carry;

            if (sum >= 10) {
                const value = Math.floor(sum % 10);
                carry = Math.floor(sum / 10);
                prev.next = new ListNode(value);

            } else if (sum < 10) {
                carry = 0;
                prev.next = new ListNode(sum);
            }
            
            l1 = l1 !== null ? l1.next : null;
            l2 = l2 !== null ? l2.next : null;
            prev = prev.next;
        }

        prev.next = null;
        return dummy.next;
    }
}
