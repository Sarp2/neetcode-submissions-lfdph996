class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    isMultiple: boolean;
    array;
    encode(strs: string[]): string {
        this.array = strs;
        return strs.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        return this.array;
    }
}
