class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // If the array was rotated same times as length
        if (nums[0] < nums[nums.length - 1]) return nums[0];

        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const midI = Math.floor((left + right) / 2);
            const middle = nums[midI];
            
            let rightVal = nums[right];

            if (middle > rightVal) {
                left = midI + 1;
            } else {
                right = midI;
            }
        }

        return nums[left];
    }
}
