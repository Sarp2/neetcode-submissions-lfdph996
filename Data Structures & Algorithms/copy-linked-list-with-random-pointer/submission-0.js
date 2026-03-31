
class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        // Create the hash map with <Node, Node>
        const mapper = new Map();
        let curr = head;

        // Iterate every node
        while (curr !== null) {
            // Set just node value for each node
            mapper.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        // Reset the curr
        curr = head;

        // Iterate every node
        while (curr !== null) {
            // if the node value is random, assign null for node.random
            if (curr.random === null) {
                mapper.get(curr).random = null;
            } else {
                // Copy the random value and assign it to copy node
                const copyRandom = mapper.get(curr.random);
                mapper.get(curr).random = copyRandom; 
            }
            // Check null value for curr.next
            const copyNext = curr.next ? mapper.get(curr.next) : null;
            mapper.get(curr).next = copyNext;

            curr = curr.next;
        }

        return mapper.get(head);
    }
}
