class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = new Map();

        for (let i = 0; i < strs.length; i++) {
            let alphabet = new Array(26).fill(0);
            const str = strs[i];
            for (let j = 0; j < str.length; j++) {
               alphabet[str[j].charCodeAt(0) - 97]++;
            }

            const key = alphabet.join('|');

            if (!hash.has(key)) hash.set(key, [str]);
            else hash.get(key).push(str);
        }

        return [...hash.values()];
    }
}

const strs=["bdddddddddd","bbbbbbbbbbc"];

const mySol = new Solution();
console.log(mySol.groupAnagrams(strs));