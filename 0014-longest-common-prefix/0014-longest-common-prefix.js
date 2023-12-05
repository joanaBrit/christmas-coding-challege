/**
 * @param {string[]} strs
 * @return {string}
 */

// For each word, start with the first letter. 
// If the first letter for every word in the array is the same, 
// Then this is now a part of the common prefix. (e.g "f")
// Then we move onto the next letter (letter 2) for all of the word in the strs array
// If all letter 2 in all the words are the same, then this is also part of prefix (e.g. "fl")
// If it's not all the same, then longest prefix ends here (e.g. "f")
// Repeat the same logic as for letter 2 to letter n.

// i=0; currentLetter = "f", commonPrefix = "f"
// i=1; currentLetter = "l", commonPrefix = "fl"
// i=2; currentLetter = "o", commonPrefix = "fl"

var longestCommonPrefix = function(strs) {
    const firstWord = strs[0]
    let commonPrefix = ""
    
    for (let i = 0; i < strs[0].length; i++){// Repeats for # of characters in first word
        const currentLetter = firstWord[i]
        
        const everyLetterInAllWordsIsSame = strs.every(word => {
            const letter = word[i]
            return letter == currentLetter
        })
        
        if (everyLetterInAllWordsIsSame) {
            commonPrefix = commonPrefix + currentLetter
        } else {
            break;
        }
        
    }
    
    return commonPrefix

};
