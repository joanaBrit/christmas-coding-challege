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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    
    if(!root) return []
    let result = []
    
    processNode(root, [])
    
    // At each node, check what the current path is and its sum
    // so function called recursively should be given its current path
    
    
    function processNode(node, path) {
        
        const isLeaf = !node.left && !node.right
        
        if (isLeaf) {
            const sumInPath = [...path, node.val].reduce((prev, cur)=> prev+cur, 0)
            sumInPath == targetSum && result.push([...path, node.val])
        } else {
            node.left && processNode(node.left, [...path, node.val])
            node.right && processNode(node.right, [...path, node.val])
        }
        
    }
    
    return result
    };


// --------------------Experiment---------------------------------------
    
    // const updatedPath = [...path]
        // const sumSoFar = updatedPath.reduce((prev, cur)=> prev+cur, 0)
    //         // if is negative target, then, if greater than target sum, continue; if equal, same; if less than, then stop.
        
//         if ((targetSum > 0 && sumSoFar + node.val > targetSum) || (targetSum < 0 && sumSoFar + node.val < targetSum)) {
//             // If adding current node gives larger than target sum, then stop going down the tree.
//             return
//         } else if (sumSoFar + node.val == targetSum) {
//             // If adding the current node to the path so far gives target sum, then stop going down the tree, and add current path to results        
//             !node.left && !node.right && result.push([...updatedPath, node.val])
//             return
//         } else if (targetSum == 0 || (targetSum > 0 && sumSoFar + node.val < targetSum) || (targetSum < 0 && sumSoFar + node.val > targetSum)) {
//             // If adding current node is less than target sum, then keep going down each leaf node recursively. 
//             node.left && processNode(node.left, [...updatedPath, node.val])
//             node.right && processNode(node.right, [...updatedPath, node.val])
//         } 
    
    
    // Root is 5, and target is 22
    /** 
    node = 5, path = [], sumSoFar = 0, +val = 5, < target, process node.left and node.right
        node = 4, path = [5], + val = 9, < target, process node.left
            node = 11, path = [5, 4], + val = 20, < target, process node.left and node right
                node = 7, path = [5, 4, 11], + val = 27, > target, stop
                node = 2, path = [5, 4, 11], + val = 22, = target, push path to result, stop
        node = 8, path = [5], + val = 13, < target, process node.left and node.right
            node = 13, path = [5, 8], + val = 26, > target, stop
            node = 4, path = [5, 8], + val = 17, < target, process node.left and node.right
                node = 5, path = [5, 8, 4], + val = 22, = target, push path to result, stop
                node = 1, path [5, 8, 4], + val = 18, < target, process nothing (because no nodes), stops here.
    
    */
    
//     function isLeaf(node, currentPath){     
        
//         // if the node is null.
//         if(!node) return 0
        
        
//         // Check if it's a leaf
//         if (node.left === null && node.right === null){
//             // Add the current node to the path.
//             currentPath.push(node.val)
//         }
        
//         // If the root is a leaf, check if its value equals
//         if (isLeaf(root)) return root.val === targetSum
    
        
//         // Recursively check the both subtrees with the remaining sum.
//         let remainingSum = targetSum - root.val
//         console.log(remainingSum)
//     }
        
        
        
//         // Recursively check the both subtrees with the remaining sum.
        
    
        
//         // find the sum of all root-to-leaf paths
//         // let sum = node.val + root.val + targetSum
        
//         return pathSum(root.left, remainingSum) || pathSum(root.right, remainingSum)
    

