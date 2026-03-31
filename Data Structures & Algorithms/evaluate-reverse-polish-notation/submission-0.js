class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };

        for (let i = 0; i < tokens.length; i++) {
            // If it is a number
            if (!(tokens[i] in operators)) {
                // Push it into the stack
                stack.push(parseInt(tokens[i]));
            
            } else if (tokens[i] in operators) {
                const op = operators[tokens[i]];
                
                const b = stack.pop();
                const a = stack.pop();
                
                let value = op(a, b);

                // And Push the new value
                stack.push(value);

            }
        }

        return stack[0];
    }
}