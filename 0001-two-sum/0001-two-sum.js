/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // nums + nums = target
    // nums = []
    result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // console.log(i, j);
            if(nums[i] + nums[j] === target){
                
                result.push(i);
                result.push(j);
                // console.log("found")
                return result;
                
            }
        }
    }
};