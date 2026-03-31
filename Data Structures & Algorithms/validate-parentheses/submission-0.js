class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const mapping = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for (const char of s) {
            // Check if character is closed brackets
            if (char in mapping) {
                // If stack.length is zero, you cannot start with closed brackets
                if (stack.length === 0) return false;
                
                // If last brackets in the stack is not equal to its open brackets
                if (stack[stack.length - 1] !== mapping[char]) return false;
                
                stack.pop();


            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
