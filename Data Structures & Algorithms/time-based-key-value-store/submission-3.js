class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
        this.keyStore.set(key, []);
        }
        
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";
        
        let left = 0;
        let right = this.keyStore.get(key).length - 1;

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            if (this.keyStore.get(key)[middle][0] === timestamp) {
                return this.keyStore.get(key)[middle][1];
            }

            if (this.keyStore.get(key)[middle][0] < timestamp) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        // If there is no match, return the closest timestamp.
        return right >= 0 ? this.keyStore.get(key)[right][1] : "";
    }
}
