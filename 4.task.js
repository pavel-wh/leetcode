/*
3. Longest Substring Without Repeating Characters
https://leetcode.com/submissions/detail/576572101/
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a, b) => a - b);
  let mid = Math.floor(arr.length / 2);

  return Number(
    (arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2).toFixed(5)
  );
};
