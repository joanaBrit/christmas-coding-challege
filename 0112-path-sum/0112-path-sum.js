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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    // if the root is null return false.
    if(!root) return false
    
    function isLeaf(node){
    // check if the node is a leaf.
    return root.left === null && root.right === null
    }
    // If the root is a leaf, check if its value equals the target.
    if (isLeaf(root)) return root.val === targetSum

    // Recursively check the both subtrees with the remaining sum.
    let remaining = targetSum - root.val
        
    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining)
};