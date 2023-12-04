/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
let findKthPositive = function(arr, k) {
    let numberLen = arr.length
    let expected = 1
    let missingPositiveNum = 0
    
    while (missingPositiveNum < k){
        
        if (!arr.includes(expected)) { 
        missingPositiveNum++
        }
        if (missingPositiveNum < k){
            expected++
        }  
    }
    return expected
};
  