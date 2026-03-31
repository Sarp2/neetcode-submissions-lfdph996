class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */

    /** time = (target - position) / speed */
    carFleet(target, position, speed) {
        // Sort the indices based on their position
        const sorted = [...Array(position.length).keys()].sort((a, b) => position[b] - position[a]);
        const stack = [];
        for (let i = 0; i < sorted.length; i++) {
            const time = (target - position[sorted[i]]) / speed[sorted[i]];
            
            if (i === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }
        return stack.length;
    }
}
