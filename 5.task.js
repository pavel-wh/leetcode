/*
4. Median of Two Sorted Arrays
https://leetcode.com/problems/median-of-two-sorted-arrays/
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
