class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const filter = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let l = 0;
        let r = filter.length - 1;

        while(l < r) {
            if (filter[l] !== filter[r]) return false;
            l++;r--;
        }

        return true;
    }
}

const mySol = new Solution();
const s = "Was it a car or a cat I saw?";
console.log(mySol.isPalindrome(s));