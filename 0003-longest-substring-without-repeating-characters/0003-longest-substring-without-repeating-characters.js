/**
 * @param {string} s
 * @return {number}
 */
// "pwwkew"
//  i = 0; j=0 {p: true}, letterTrack 1

let lengthOfLongestSubstring = function(s) {
    let text = s.length
    let longestLength = 0
    
    for (let i = 0; i < s.length; i++){
        // i is the starting point of the substring
        let letterTrack = 0
        let obj = {}
        
        for (let j = i; j < s.length; j++ ){
            let currentLetter = s.charAt(j)    
            if (obj[currentLetter]) {
                break;
            } else {
                obj[currentLetter] = true
                letterTrack++
            }
        }
        
        if (letterTrack > longestLength){
            longestLength = letterTrack
        }
    }
    
    return longestLength
}
