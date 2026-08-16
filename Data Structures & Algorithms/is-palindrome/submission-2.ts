class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const lowerLetters = "qwertyuopasdfghjklizxcvbnm";
        const upperLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
        const numberLetters = "0123456789"
        let word = "";
        
        for (const string of s) {
            if (lowerLetters.includes(string)) {
                word += string;
            }

            if (upperLetters.includes(string)) {
                word += string.toLowerCase();
            }

            if (numberLetters.includes(string)) {
                word += string;
            }
        }

        let left = 0;
        let right = word.length - 1;

        while (left < right) {
            if (word[left] !== word[right]) {
                return false;
            } else {
                left++;
                right--;
            }
        }

        return true;
    }
}
