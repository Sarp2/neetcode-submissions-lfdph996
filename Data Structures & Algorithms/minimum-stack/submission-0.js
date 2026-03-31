class MinStack {
    #stack;
    #minStack = [];
    
    constructor() {
        this.#stack = [];
    }
    
    push(val) {
        // Push the value to stack
        this.#stack.push(val);
        
        // If minStack length is zero, use currentValue. 
        // If it is not, compare currentValue minStack last value.
        const currentMin = this.#minStack.length === 0 
            ? val
            : Math.min(val, this.#minStack.at(-1));
        
        // push the value to minStack
        this.#minStack.push(currentMin);
    }

    pop() {
        // Remove the last value in both array
        this.#stack.pop();
        this.#minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        // Return the last value using at() method
        return this.#stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        // return the last value using at() method from minStack
        return this.#minStack.at(-1);
    }
}
