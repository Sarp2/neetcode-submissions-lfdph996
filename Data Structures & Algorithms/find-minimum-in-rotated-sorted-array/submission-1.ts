class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     */
    findMin(nums: number[]): number {
        let half = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] > nums[i]) {
                console.log("Hello: ")
                half = i;
                break;
            }
        }
        
        // If array rotated same as its length, it is already sorted
        if (half === 0) return nums[0];

        // Build the sorted array
        const array = [];
        for (let i = half; i < nums.length; i++) array.push(nums[i]);
        for (let i = 0; i < half; i++) array.push(nums[i]);
        return array[0];
    }
}

/**
 * start = [3]
 * end = [4,5,6]
 * 
 */