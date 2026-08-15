class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const mapper = new Map<number, { key: number, count: number}>();
        const result = [];

        for (const num of nums) {
            if (!mapper.has(num)) {
                mapper.set(num, { key: num, count: 1 });
                continue;
            }
            mapper.get(num).count += 1;
        }

        let count = 0;
        for (const value of [...mapper.values()].sort((a, b) => b.count - a.count)) {
            if (count === k) break;
            result.push(value.key)
            count++;
        }
        return result;
    }
}
