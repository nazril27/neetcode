class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = new Map();

        const position = {
            a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13,
            n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26
        };

        let alphabet = new Array(26);

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            for (let j = 0; j < str.length; j++) {
                if (alphabet[position[str[j]] - 1] === undefined) {
                    alphabet[position[str[j]] - 1] = position[str[j]];
                } else {
                    alphabet[position[str[j]] - 1] += position[str[j]];
                }
                
            }

            const alpToStr = alphabet.toString();

            if (hash.has(alpToStr)) {
                hash.get(alpToStr).push(str);
            } else {
                hash.set(alpToStr, [str]);
            } 
            
            alphabet = new Array(26);
        }

        return [...hash.values()];
    }
}

const strs = [""];

const mySol = new Solution();
console.log(mySol.groupAnagrams(strs));