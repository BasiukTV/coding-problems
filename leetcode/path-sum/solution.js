/**
 * Solution for https://leetcode.com/problems/path-sum/description/
 *
 * @author Taras Basiuk
 *
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

    // If root is null, there's no way to get the targetSum
    if (root === null) {
        return false;
    }

    return runningSum(root, 0, targetSum);
};

/**
 * @param {TreeNode} node
 * @param {number} tS Target sum.
 * @param {number} rS Running sum.
 * @return {boolean}
 */
var runningSum = function(node, rS, tS) {
    
    // Update the running sum with the value of the current node
    rS += node.val;
    
    // If the node is leaf, return wether the rS mathces the tS
    if (node.left === null && node.right === null) {
        return rS === tS;
    }

    // Otherwise check if either of the children nodes are on the tS path.
    return (node.left !== null ? runningSum(node.left, rS, tS) : false) ||
        (node.right !== null ? runningSum(node.right, rS, tS) : false);
}
