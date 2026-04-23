class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.nums = this.initializeMinPriorityQueue(nums);
    }

    initializeMinPriorityQueue(nums) {
        const minQ = new MinPriorityQueue();
        for (const num of nums) {
            if (minQ.size() < this.k) {
                minQ.enqueue(num);
            } else if (minQ.front() < num) {
                minQ.dequeue();
                minQ.enqueue(num);
            }
        }
        console.log('MinQ:', minQ);
        return minQ;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.nums.size() < this.k) {
            this.nums.enqueue(val);
        } else if (val > this.nums.front()) {
            this.nums.dequeue();
            this.nums.enqueue(val);
        }

        return this.nums.front();
    }
}