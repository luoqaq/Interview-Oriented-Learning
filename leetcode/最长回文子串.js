/**
 * @param {string} s
 * @return {string}
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了70.49%的用户
 * 内存消耗：48.1 MB, 在所有 JavaScript 提交中击败了31.76%的用户
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }
  if (s.length === 2) {
    return s[0] === s[1] ? s : s[0]
  }
  let max = ''
  for (let i = 0; i < s.length - 1; i++) {
    let max1 = expand(s, i, i)
    max = max1.length > max.length ? max1 : max
    let max2 = expand(s, i, i + 1)
    max = max2.length > max.length ? max2 : max
    if (max.length >= s.length || (max.length > s.length - i && i > Math.floor(s.length) / 2 + 1)) {
      break
    }
  }
  return max
};

function expand(s, i, j) {
  let max = '';
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    if (j - i + 1 > max.length) {
      max = s.slice(i, j + 1)
    }
    i--;
    j++;
  }
  return max;
}

console.log(longestPalindrome('aaaaa'))