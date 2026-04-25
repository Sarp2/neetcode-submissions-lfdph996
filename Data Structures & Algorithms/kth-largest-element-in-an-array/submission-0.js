class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const q = new MinPriorityQueue();
        for (const num of nums) {
            if (q.size() < k) {
                q.enqueue(num);
            } else if (num > q.front()) {
                q.dequeue();
                q.enqueue(num);
            }
        }

        return q.front();
    }
}
