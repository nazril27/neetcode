class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (hash.has(nums[i])) return true;

            hash.add(nums[i]);
        }
        
        return false;
    }
}

const nums = [1,2,3,4];
const mySol = new Solution();

console.log(mySol.hasDuplicate(nums));
