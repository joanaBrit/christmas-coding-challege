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
 * @return {number[]}
 */
// Inorder traversal - Left-Root-Right pattern.
// every left child has a value < parent
// every right child has a value > parent

// Check if left node exists. If left node exists, repeat process for this node, making it the new middle node.
// Then, print the node value (of middle node / root node);
// If right node exists, repeat process for this node, making it the new middle node.
// Otherwise, do nothing.

//process 1
// 1.left nothing
// push 1
// 1.right is 2
//     process 2
//     2.left is 3
//         process 3
//         3.left nothing
//         push 3
//         3.right nothing
//     push 2
//     2.right is nothing

var inorderTraversal = function(root) {
    const output = []
    processNode(root)
   
    function processNode(node){
        if (!node) {return []}
        if (node.left) { processNode(node.left) }
        output.push(node.val)
        if (node.right) { processNode(node.right) } 
        
    }
        return output
};


