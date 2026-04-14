class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const totalLength = nums1.length + nums2.length;
        const isEven = totalLength % 2 === 0;

        let i = 0, j = 0;
        const array = [];

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                array.push(nums1[i++]);
            } else {
                array.push(nums2[j++]);
            }
        }

        // Push all the left numbers 
        while (i < nums1.length) array.push(nums1[i++]);
        while (j < nums2.length) array.push(nums2[j++]);

        const mid = Math.floor(array.length / 2);

        if (isEven) {
            return (array[mid - 1] + array[mid]) / 2;
        } else {
            return array[mid];
        }
    }
}
