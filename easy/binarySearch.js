class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
      let left = 0;
      let right = nums.length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
          return mid;
        } else if (target < nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }

      return -1;
    }
}

const mySol = new Solution();

const nums = [-1,0,2,4,6,8], target = 3;
console.log(mySol.search(nums, target));
