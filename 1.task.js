/*
1. Two Sum
https://leetcode.com/problems/two-sum/
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = function (nums, target) {
  let result = [];
  nums.forEach((value, key) => {
    nums.forEach((el, id) => {
      if (key !== id) {
        if (value + el == target) {
          result = [key, id];
        }
      }
    });
  });
  return result;
};

console.log(twoSum(nums, target));

console.log([1, 2].length);
