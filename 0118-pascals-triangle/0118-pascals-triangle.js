/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 
var generate = function(numRows) {
    // empty array to store the result.
 let result = []  
 // loop through each row from 0 to n-1.
 for (let row = 0; row < numRows; row++){
     let currentRow = []
     // loop throught each j from 0 to row.
     for (let col = 0; col <= row; col++){
        // If the col = 0 or equal to row, the value is 1
         if (col === 0 || col === row){
             currentRow.push(1)
         } else {
           // Otherwise, the value is the sum of the two values above it.  
             currentRow.push(result[row - 1][col - 1] + result[row - 1][col])
         }
     }
     // push the currentRow into the result array
     result.push(currentRow)
 }
    return result
};