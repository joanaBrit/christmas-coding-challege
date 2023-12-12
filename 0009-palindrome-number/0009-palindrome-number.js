/**
 * @param {number} x
 * @return {boolean}
 */

let isPalindrome = function(x) {
    // handle the negative numbers
    let negativeNum = x.toString()
    // Iterate over the string from both sides, start and end.
    let start = 0
    let end = negativeNum.length -1
    for (let i = 0; i < end; i++){
        // If any pair of characters doesn't match, the string is not a palindrome.
        if (negativeNum[start] !== negativeNum[end]){
            return false
        } 
        // Move to the next pair
        start++
        end--
        }
    return true
};