/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// Iterate row by row.
// Each new row starts with 1.
// 
var getRow = function(rowIndex) {
    // Base - the first row is 1.
    if(rowIndex === 0) return [1]
    // Second row would be 1, 1
    if(rowIndex === 1) return [1, 1]
    
    // recursive, get the previous row and this row numbers
    let prevRow = [1,1] 

    for (let i = 2; i <= rowIndex; i++){
        const curRow = [1]
        for (let j = 1; j < i; j++){
           curRow[j] = prevRow[j-1] + prevRow[j]
        }
        curRow.push(1)
        prevRow = [...curRow]
    }
    return prevRow
};