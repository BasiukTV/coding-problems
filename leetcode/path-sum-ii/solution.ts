/**
 * Solution for https://leetcode.com/problems/path-sum-ii/
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {

    // Initialize the result container and immidiately return it if root is null
    const result: number[][] = [];
    if (root === null) {
        return result;
    }

    targetSum -= root.val; // Substract the contribution of this node from targetSum

    // If this node has no children and targetSum is null, return this node as result
    if (root.left === null && root.right === null) {
        if (targetSum == 0) {
            result.push([root.val]);
        }

        // If target sum is not reached, return empty result
        return result;
    }

    // If calling the recursion on the left child produces results...
    if (root.left !== null) {
        const leftResult: number[][] = pathSum(root.left, targetSum);

        // ... prepend this node to them
        for (const path of leftResult) {
            result.push([root.val].concat(path));
        }
    }

    // If calling the recursion on the left child produces results...
    if (root.right !== null) {
        const rightResult: number[][] = pathSum(root.right, targetSum);

        // ... prepend this node to them
        for (const path of rightResult) {
            result.push([root.val].concat(path));
        }
    }

    return result;
};
