class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */

    /** 
     * Input: temperatures = [30,38,30,36,35,40,28]
     * Output: [1,4,1,2,1,0,0]
    */
    dailyTemperatures(temperatures) {
        // Create a result list filled with zeros.
        const res = new Array(temperatures.length).fill(0);

        // Use a stack to store pairs of (temperature, index) for days that haven't found a warmer day yet.
        const stack = []; // // pair: [temp, index]

        // Iterate through the temperature list
        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];

            // While the stack is not empty and the current temperature is warmer than the top of the stack:
            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                // Pop the top element.
                const [stackTemp, stackIndex] = stack.pop();

                // Compute how many days passed and update the result.
                res[stackIndex]  = i - stackIndex;
            }

            // Push the current day onto the stack.
            stack.push([t, i]);
        }

        return res;
    }
}
