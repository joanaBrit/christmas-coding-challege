/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// find the middle element for the left and right side.
var sortedArrayToBST = function(nums) {
    if (nums.length === 0){
        return null
    }
    // find the middle element of the array.
    let middle = Math.floor(nums.length / 2) 
    let value = nums[middle]
    
    // Create a new tree node with the middle element as the value
    let root = new TreeNode(value)
    
    // Recursively convert the left and right halves of the array to BSTs
    root.left = sortedArrayToBST(nums.slice(0, middle))
    root.right = sortedArrayToBST(nums.slice(middle + 1))
    
    return root
};
    
 