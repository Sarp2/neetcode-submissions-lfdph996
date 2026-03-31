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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Define dummy node
        const dummy = new ListNode(0);
        let prev = dummy;

        // Iterate two list until there is no node
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                prev.next = list1;
                list1 = list1.next;
            } else if (list2.val <= list1.val) {
                prev.next = list2;
                list2 = list2.next;
            }

            prev = prev.next;
        }

        prev.next = list1 || list2;
        return dummy.next;
    }
}
