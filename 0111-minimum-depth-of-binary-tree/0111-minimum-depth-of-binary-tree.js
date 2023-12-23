/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    
    if (!root) return 0
    
    // check is left and right child is null.
    if(!root.left) return minDepth(root.right) + 1
    if(!root.right) return minDepth(root.left) + 1
    
    // get the minimum of depth of the left and right subtrees.
    let leftDepth =  minDepth(root.left) 
    let rightDepth =  minDepth(root.right) 
    
    // calculate the min of both, right and left depth plus one for the current node.
    let result = Math.min(leftDepth, rightDepth) + 1
    return result
};
