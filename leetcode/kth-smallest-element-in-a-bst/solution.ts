/**
 * Solution for https://leetcode.com/problems/kth-smallest-element-in-a-bst/
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

// Helper recursion to get the inorder traversal of the tree
function inorderTraversal(node: TreeNode): number[] {
    let result: number[] = [];

    // If left child exists, add its values to the traversal
    if (node.left !== null) {
        result = result.concat(inorderTraversal(node.left));
    }

    // Add this node's value to the traversal
    result.push(node.val);

    // If left child exists, add its values to the traversal
    if (node.right !== null) {
        result = result.concat(inorderTraversal(node.right));
    }

    return result;
}

function kthSmallest(root: TreeNode | null, k: number): number {
    // Just return the k-1 index from the inorder traversal of the tree
    return inorderTraversal(root)[k - 1];
};
