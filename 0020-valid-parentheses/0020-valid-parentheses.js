/**
 * @param {string} s
 * @return {boolean}
 */
// Have an empty place for the elements that you checked
// check if the first element on a string is an open parenthese
// If yes push to the sharacters
// If is a close parentheses check with the charactersSorted 
// check if they're the same - if yes: true push if not false
// We need to equal the sorted.length to zero to check if there are other open parentheses in sorted if !0 = false if 0 = true


let isValid = function(s) {
    const sorted = []
    const characters = {')': '(', '}': '{', ']': '['}
  for (const char of s){
      if (!characters[char]){
          sorted.push(char)
      } else if (sorted.pop() !== characters[char]) {
          return false
      }
  }
    return sorted.length == 0
};