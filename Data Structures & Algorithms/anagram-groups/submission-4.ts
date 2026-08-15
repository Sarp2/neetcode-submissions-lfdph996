class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hash = new Map<string, string[]>();
        const result: string[][] = [];
        for (const string of strs) {
            const key = [...string].sort().join("");
            if (!hash.has(key)) {
                hash.set(key, [string]);
                continue;
            }

            hash.get(key).push(string);
        }

        for (const value of hash.values()) {
            result.push(value);
        }

        return result;
    }
}
