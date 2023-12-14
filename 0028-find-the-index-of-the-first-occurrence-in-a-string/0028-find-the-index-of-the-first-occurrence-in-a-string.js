/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

let strStr = function(haystack, needle) {
    if (haystack === needle || needle === ""){
        return 0
    }
    // go throught each character of the haystack string.  
    for (let i = 0; i < haystack.length; i++ ){
        let match = true
        // nested loop to check each character of the haystack needle. 
        for(let j = 0; j < needle.length; j++){ 
        // compare the character of haystack and needle.
            if(haystack[i + j] !== needle[j]){
            // if any characters doen't match we break the loop.
            match = false
            break
            }           
        }
        // return the index if match
        if (match) {
        return i
        }
    }
    // if there is no occurrence return -1
    return -1
};