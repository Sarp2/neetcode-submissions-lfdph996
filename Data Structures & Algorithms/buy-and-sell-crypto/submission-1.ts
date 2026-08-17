class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * If the price at sell day is higher than buy day, we can make profit - so we update the maximum
     * If the price at sell day is lower, then sell day becomes the the new buy day because a cheaper buying is always better.
     * 
     */
    maxProfit(prices: number[]): number {
        // Buy day
        let left = 0; 
        // Sell day
        let right = 1;

        let maxProfit = 0;

        while (right < prices.length) {
            // If sell day price is greater than buy day price, calculate the profit
            if (prices[left] < prices[right]) {
                const profit = prices[right] - prices[left]
                maxProfit = Math.max(maxProfit, profit);
            // If sell day price is lower than the buy day price, make the buy day price as sell price
            } else {
                left = right;
            }
            // Move sell day price to the next day price
            right++;
        }

        return maxProfit;
    }
}
