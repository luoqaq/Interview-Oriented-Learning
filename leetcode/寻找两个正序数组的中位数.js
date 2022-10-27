// 题目链接：https://leetcode.cn/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * start-2022.10.27 22:44
 * end-22:59
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了86.39%的用户
 * 内存消耗：45.9 MB, 在所有 JavaScript 提交中击败了70.03%的用户
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 关键在于将两个数组合并为一个数组，然后再取得中位数
  let i = 0;
  let j = 0;
  let nums = []
  while(i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      nums.push(nums1[i])
      i++
    } else {
      nums.push(nums2[j])
      j++
    }
  }
  if (i < nums1.length) {
    nums = nums.concat(nums1.slice(i))
  } else if (j < nums2.length) {
    nums = nums.concat(nums2.slice(j))
  }
  console.log('nums', nums)
  if (!nums.length) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }
  if (nums.length % 2) {
    return nums[Math.floor(nums.length / 2)]
  } else {
    return (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2
  }
};

// console.log(findMedianSortedArrays([1,3], [2]))
// console.log(findMedianSortedArrays([1,3], [2,4]))
// console.log(findMedianSortedArrays([], [2,4]))
// console.log(findMedianSortedArrays([], [2]))
// console.log(findMedianSortedArrays([], []))
console.log(findMedianSortedArrays([3], [-2, -1]))
console.log(findMedianSortedArrays([1, 3], [2]))