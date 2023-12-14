/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// “in-place” means that you have to change the original array, not a copy of it.
// create two pointers, one to iterate over the array and one to keep track of the position

let removeElement = function(nums, val) {
    // start with the second pointer to zero
    let k = 0
    for (let i = 0; i < nums.length; i++){
        // if the current element is not equal to the value.
        if (nums[i] !== val){
        // swap numbers.
        nums[k] = nums[i]
        // increment the new pointer
        k++ 
        }
    }
    return k
};