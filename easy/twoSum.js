class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = new Map();

        for (let i = 0; i < nums.length; i++) {
            let remain = target - nums[i];
            if (hash.has(remain)) return [hash.get(remain), i];
            else hash.set(nums[i], i);
        }

        return -1;
    }
}

const nums = [5,5], target = 10

const mySol = new Solution();
console.log(mySol.twoSum(nums,target));