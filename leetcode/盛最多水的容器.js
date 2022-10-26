/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  let oldL = l;
  let oldR = r;
  for (; r > l;) {
    let area = 0;
    if (height[l] > height[r]) {
      area = height[r] * (r - l);
      do{
        oldR = r--;
      }while(height[r] < height[oldR] && r > l)
    }
    else {
      area = height[l] * (r - l);
      do{
        oldL = l++;
      }while(height[l] < height[oldL] && r > l)
    }
    max = max > area ? max : area;
  }
  return max;
};
// @lc code=end

