/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
    
    let sum = 0
    const dictionary = {
        I: 1,
        V: 5,
        X: 10, 
        L: 50, 
        C: 100, 
        D: 500,
        M: 1000
    }
    // We know that if a letter appears before something that has a bigger value, 
    // It means minus that letter's value from the letter that has the bigger value. 
    
    for (let i = 0; i<s.length; i++){
        const currentLetter = s[i] 
        const nextLetter = s[i+1]
        const thisValue = dictionary[currentLetter]
        const nextValue = dictionary[nextLetter]
        
        if(nextValue > thisValue){
           sum -= thisValue
        } else {
            sum += thisValue
        }
        
    }
    return sum
};