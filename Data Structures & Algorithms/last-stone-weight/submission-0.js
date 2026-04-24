class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {     
        const maxQ = new MaxPriorityQueue();
        for (const s of stones) maxQ.enqueue(s);

        while (maxQ.size() > 1) {
            const y = maxQ.dequeue();
            const x = maxQ.dequeue();
            if (y !== x) maxQ.enqueue(y - x);
        }
        
        return maxQ.size() ? maxQ.dequeue() : 0;
    }
}
