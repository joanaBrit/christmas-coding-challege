/**
 * @param {number[]} digits
 * @return {number[]}
 */

// unshift method:  
// adds new elements to the beginning of an array; overwrites the original array.


let plusOne = function(digits) {
   let len = digits.length
   // start from least significant (right) digit in the array - from rigth to left
   for (let i = len-1; i >= 0; i--){
       // if i = 9, set the digit to 0 
       if(digits[i] == 9){
           digits[i] = 0
           // if the result is !9, update the digit +1 
           if(i === 0){
               digits.unshift(1)
               return digits
           }
       }else{
           // if there is still a carry after all digits, add an extra 1 to the array
           digits[i] = digits[i] + 1
           return digits
       }
   }
   
};
