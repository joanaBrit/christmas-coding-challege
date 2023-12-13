/**
 * @param {number[]} nums
 * @return {number}
 */


let removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    let k = 1
    for (let i = 1; i < nums.length; i++){
        // check if the current element is not equal to the previous one.
        if (nums[i] !== nums[i - 1]){
            // in case the element is unique assign the value 
            nums[k] = nums[i]
            k++
        }
    }
    return k
};