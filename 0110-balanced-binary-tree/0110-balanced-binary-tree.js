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
 * @return {boolean}
 */
// To calculate the height of a node, we need to find the height of its left and right subtrees, and then add one to it.

var isBalanced = function(root) {
    if (root === null) return true
    
    let height = function(node) {
        // If not node, the height is zero.
        if(!node) return 0
        
        // return the maxium height of the left and right, plus one.
        return Math.max(height(node.left), height(node.right)) + 1
        
    }
    // get the height of left and right.
    let leftHeight = height(root.left)
    let rightHeight = height(root.right)
    
    // check if the current subtree is balance.
    if (Math.abs(leftHeight - rightHeight) > 1){
        return false
    }
    // ckeck if both are balanced.
    return isBalanced(root.left) && isBalanced(root.right)
};

