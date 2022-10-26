// 题目链接：https://leetcode.cn/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 * 执行用时：572 ms, 在所有 JavaScript 提交中击败了5.00%的用户
 * 内存消耗：58.9 MB, 在所有 JavaScript 提交中击败了5.00%的用户
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) {
    return s.length
  }
  let start = 0;
  let max = 0;
  let subSO = {};

  while (start < s.length) {
    console.log('start', start, subSO)
    if (subSO[s[start]]) {
      // 如果obj中存在则重复了，需要解掉包含index的之前数据，然后从已保存数据中的最大的索引+1开始重新计算
      const index = subSO[s[start]]
      subSO = Object.keys(subSO).reduce((pre, key) => {
        if (subSO[key] > index) {
          pre[key] = subSO[key]
        }
        return pre
      }, {})
    } else {
      // 记录当前元素以及索引，并刷新最大值
      subSO[s[start]] = start
      if (Object.keys(subSO).length > max) {
        max = Object.keys(subSO).length
      }
      start++;
    }
  }
  return max
};

/**
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了81.42%的用户
 * 内存消耗：46.2 MB, 在所有 JavaScript 提交中击败了36.10%的用户
 * @param {*} s 
 */
var lengthOfLongestSubstring2 = function(s) {
  if (s.length <= 1) {
    return s.length
  }
  let start = 0;
  let max = 0;
  let sub = '';

  while (start < s.length) {
    console.log('start', start, subSO)
    const index = sub.indexOf(s[start])
    if (index > -1) {
      // 如果obj中存在则重复了，需要解掉包含index的之前数据，然后从已保存数据中的最大的索引+1开始重新计算
      sub = sub.slice(index + 1)
    } else {
      // 记录当前元素以及索引，并刷新最大值
      sub = sub + s[start]
      if (sub.length > max) {
        max = sub.length
      }
      start++;
    }
  }
  return max
};
// console.log(lengthOfLongestSubstring('bbbbbb'))
console.log(lengthOfLongestSubstring("tmmzuxt"))
