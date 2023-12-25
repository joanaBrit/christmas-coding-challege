/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // converte all the letters to lowercase.
    // replace all non-alphanumeric characters.
    // check if it's a palindrome, value that reads the same from backward or forward.
    
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    // Check if this string is equal to its reverse.
    return cleanedString === cleanedString.split('').reverse().join('')
};