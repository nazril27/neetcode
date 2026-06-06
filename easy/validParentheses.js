class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const curr = s[i];

            if (curr === '(' || curr === '[' || curr === '{') {
                stack.push(curr); continue;
            }

            const top = stack.pop();
            if (!top) return false;

            if (
                (top === '(' && curr !== ')') ||
                (top === '[' && curr !== ']') ||
                (top === '{' && curr !== '}')
            ) return false;
        }

        return stack.length === 0;
    }
}

const mySol = new Solution();

const s = "([{}])";
console.log(mySol.isValid(s));