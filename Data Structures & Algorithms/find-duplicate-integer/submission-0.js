class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const mapper = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (mapper.get(nums[i]) === undefined) {
                mapper.set(nums[i], 1);
            } else {
                return nums[i];
            }
        }
    }
}
