class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // Define two pointers
        let left = 1;
        let right = Math.max(...piles);

        while (left < right) {
            // Calculate the mid value
            let mid = Math.floor((left + right) / 2);

            // Calculate the hour rate for mid value
            let hours = 0;
            for (const pile of piles) {
                hours += Math.ceil(pile / mid);
            }

            // If the hour rate for mid value is lower than h
            if (hours <= h) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}
