class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    
    lengthOfLongestSubstring(s: string): number {
        const state = [];
        let start = 0;
        let maxLength = 0;

        for (let end = 0; end < s.length; end++) {
            while (state.includes(s[end])) {
                start++;
                state.shift();
            }

            state.push(s[end]);
            maxLength = Math.max(maxLength, state.length);
        }
        return maxLength;
    }
}
