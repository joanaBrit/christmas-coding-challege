/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */


var isSameTree = function(p, q) {
    // variable to track the result.
    let result = true
    treeNode(p, q)
    function treeNode(node1, node2){
        // check if both node are null. 
        if (!node1 && !node2) {
        // check if one node is null or if the value is not equal.
        } else if (!node1 || !node2 || node1.val !== node2.val) {
            // if any of these conditions is true, set result to false.
            result = false
        } else {
        treeNode(node1.left, node2.left)
        treeNode(node1.right, node2.right)
            }
    }
    return result
};

   
   