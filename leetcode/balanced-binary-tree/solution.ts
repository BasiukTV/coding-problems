/**
 * Solution for https://leetcode.com/problems/balanced-binary-tree
 *
 * @author Taras Basiuk
 *
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// Helper function which records wether subtree is balanced and its depth
function balancedMaxDepth(node: TreeNode, curDepth: number): [boolean, number] {
    
    // Check wether left subtree (if present) is balanced
    const bmdl: [boolean, number] = node.left !== null ?
        balancedMaxDepth(node.left, curDepth + 1) :
        [true, curDepth]; // If no left subtree, it's balanced and of curDepth

    // Check wether right subtree (if present) is balanced
    const bmdr: [boolean, number] = node.right !== null ?
        balancedMaxDepth(node.right, curDepth + 1) :
        [true, curDepth]; // If no right subtree, it's balanced and of curDepth

    // balanced if both subtrees are, and their depth differs by less than 2
    return [bmdl[0] && bmdr[0] && (Math.abs(bmdl[1] - bmdr[1]) < 2),
        Math.max(bmdl[1], bmdr[1])]; // Keep the larger of two depths
}

function isBalanced(root: TreeNode | null): boolean {
    
    // If no tree, it's balanced
    if (root === null) {
        return true;
    }

    // Otherwise, just call the helper method
    return balancedMaxDepth(root, 0)[0];
};
