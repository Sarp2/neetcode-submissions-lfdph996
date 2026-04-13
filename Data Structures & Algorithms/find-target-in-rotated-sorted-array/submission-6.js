class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const midI = Math.floor((left + right) / 2);
            const middle = nums[midI];

            if (middle === target) {
                return midI;
            }

            if (nums[left] === target) {
                return left;
            }

            if (nums[right] === target) {
                return right;
            }

            if (nums[left] <= middle) {
                // left half is sorted
                if (nums[left] <= target && target < middle) {
                    right = midI - 1; // target in left half
                } else {
                    left = midI + 1;  // target in right half
                }
            } else {
                // right half is sorted
                if (middle < target && target <= nums[right]) {
                    left = midI + 1;  // target in right half
                } else {
                    right = midI - 1; // target in left half
                }
            }
        }

        return -1;
    }
}
