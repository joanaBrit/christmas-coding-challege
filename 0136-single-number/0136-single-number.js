/**
 * @param {number[]} nums
 * @return {number}
 */

// Non-empty array called nums
// elements in nums apears twice less one
// Find the one unique element in nums

var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++){
        let singleNumber = true
        for (let j = 0; j < nums.length; j++){
            if(i !== j && nums[i] === nums[j]){
                console.log(j)
                singleNumber = false
            }  
        }
        if(singleNumber){
            return nums[i]
        }
    }
    return null
};