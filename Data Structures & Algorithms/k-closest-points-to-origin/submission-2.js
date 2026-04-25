class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const result = [];
        const q = new PriorityQueue((cor1, cor2) => 
            (cor2[0] * cor2[0] + cor2[1] * cor2[1]) -
            (cor1[0] * cor1[0] + cor1[1] * cor1[1]) 
        );
        
        for (const point of points) {
            if (q.size() < k) {
                q.enqueue(point);
            } else if (
                    (point[0] * point[0] + point[1] * point[1]) <
                    (q.front()[0] * q.front()[0] + q.front()[1] * q.front()[1])
                ) {
                    q.dequeue();
                    q.enqueue(point);
                }
        }
        for (let i = 0; i < k; i++) result.push(q.dequeue());
        return result;
    }
}


/** sqrt(0 * 0 + 2 * 2) */