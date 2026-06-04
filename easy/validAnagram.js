class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hash = {};

        for (let i = 0; i < s.length; i++) {
            if (hash[s[i]] === undefined) hash[s[i]] = 1;
            else hash[s[i]]++;
        }

        for (let i = 0; i < t.length; i++) {
            if (hash[t[i]] === undefined) return false;
            else hash[t[i]]--; if (hash[t[i]] < 0) return false;
        }

        const result = Object.values(hash).reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0);

        return result === 0 ? true : false;
    }
}

const s = "bbcc", t = "ccbc";

const mySol = new Solution();
console.log(mySol.isAnagram(s, t));