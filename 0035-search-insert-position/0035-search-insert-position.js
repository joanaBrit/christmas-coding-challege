/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// set to pointers one for the start and other to the end of the array
// find where is the middle between start and end
// compare nums middle with the target


let searchInsert = function(nums, target) {
    
    let startPoint = 0
    let endPoint = nums.length - 1
    
        while (startPoint <= endPoint){
    
            let middle = startPoint + Math.floor((endPoint - startPoint) / 2)

             if (nums[middle] === target){
            // if nums middle = target return middle
                return middle
            } else if (nums[middle] < target){
            // if nums middle < target adjust the start point to be middle, and repeat process again for the new start and end points.
                startPoint = middle + 1
            // console.log('Less than middle at index ' + middle + ' new start at ' + startPoint)
            } else{
            // if nums middle > target adjust the end point to be middle, and repeat process again
             endPoint = middle - 1
            // console.log('Greater than middle at index ' + middle + ' new end at ' + startPoint)
        }
         
     }
    return startPoint
};



    