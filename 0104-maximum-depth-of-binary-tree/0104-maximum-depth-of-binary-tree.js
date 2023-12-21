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
// A binary tree’s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
var maxDepth = function(root) {
    // treeNode(root, root)
    
     // function treeNode(left, right)
        if(!root || null){
            return 0
    }
         let left = maxDepth(root.left)
         let right = maxDepth(root.right)
         let result = Math.max(left, right) + 1
         return result
};
    