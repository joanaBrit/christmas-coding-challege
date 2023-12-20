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
var isSymmetric = function(root) {
    // need to do a function
    let result = true
    treeNode(root, root)
    function treeNode(node1, node2){
        // If both are null.
        if (!node1 && !node2){
            return
        } 
        // If one nodes is null or the values are not equal, they're not symmetric.  
        if (!node1 || !node2 || node1.val !== node2.val){
            result = false
            return
        }  
        // check the left tree and left node with all the right side.Same for the other side.
        treeNode(node1.left, node2.right)
        treeNode(node1.right, node2.left)
            
    }
    return result
};


