class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let count = new Map();
        for (let task of tasks) {
            count.set(task, (count.get(task) || 0) + 1);
        }

        let maxHeap = new MaxPriorityQueue();
        for (let freq of count.values()) {
            maxHeap.push(freq);
        }

        let time = 0;
        let q = new Queue();

        while (maxHeap.size() > 0 || q.size() > 0) {
            time++;

            if (maxHeap.size() > 0) {
                let cnt = maxHeap.pop() - 1;
                if (cnt !== 0) {
                    q.push([cnt, time + n]);
                }
            }

            if (q.size() > 0 && q.front()[1] === time) {
                maxHeap.push(q.pop()[0]);
            }
        }

        return time;
    }
}