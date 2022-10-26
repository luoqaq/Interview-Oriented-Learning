
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 执行用时：132 ms, 在所有 JavaScript 提交中击败了5.99%的用户
 * 内存消耗：46.2 MB, 在所有 JavaScript 提交中击败了43.59%的用户
 */
var addTwoNumbers = function(l1, l2, m = 0) {
  let l = new ListNode(0)
  const total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + m
  if (total === 0 && !l1 && !l2) {
    return l
  }
  l = new ListNode(total % 10)
  const j = total > 9 ? 1 : 0
  if (!l1?.next && !l2?.next && !j) {
    return l
  }
  if (l1?.next && l2?.next) {
    l.next = addTwoNumbers(l1.next, l2.next, j)
  } else if (l1?.next || l2?.next) {
    l.next = addTwoNumbers(l1?.next || l2?.next, null, j)
  } else if (j) {
    l.next = new ListNode(j)
  }
  return l
};

// var addTwoNumbers = function(l1, l2) {
//   let de = 0;
//   const l = new ListNode()
//   while (l1 || l2) {
//     const total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + de
//     de = total > 9 ? 1 : 0
//     l.val = total % 10
//     l.next = 
//   }
// }

// const l1 = {
//   val: 2,
//   next: {
//     val: 4,
//     next: {
//       val: 3
//     }
//   }
// }
// const l2 = {
//   val: 5,
//   next: {
//     val: 6,
//   }
// }

// const l1 = {
//   val: 1,
//   next: {
//     val: 8
//   }
// }
// const l2 = {
//   val: 0
// }

const l1 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9
    }
  }
}
const l2 = {
  val: 9
}


console.log(addTwoNumbers(l1, l2))