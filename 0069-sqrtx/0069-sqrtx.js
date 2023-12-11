/**
 * @param {number} x
 * @return {number}
 */
// set two pointers, left and right
let mySqrt = function(x) {
    let left = 0
    let right = x + 1
    
    while (left < right - 1){
        // calculate the middle point
        let middle = Math.floor((left + right) / 2)
        // calculate the square
        let square = middle * middle
        
        if(square <= x){
            left = middle
        } else {
            right = middle
        }         
    }
    return left
};