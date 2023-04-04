/**
 * Solution for https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
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

/**
 * Helper recursive function wich returns:
 *  (1) LCA if it belongs to the subtree of this node, null otherwise
 *  (2) Whether P appears in the subtree of this node.
 *  (3) Whether Q appears in the subtree of this node.
 */
function search(node: TreeNode, p: TreeNode, q: TreeNode): 
    [TreeNode | null, boolean, boolean] 
{
    // Invoke the recursion on the lift child, if it exists
    const leftSearch: [TreeNode | null, boolean, boolean] = 
        (node.left !== null) ? 
            search(node.left, p, q) :
            [null, false, false]; // dummy return if the child doesn't exist

    // If LCA was found in the left child, we're done
    if (leftSearch[0] !== null) {
        return leftSearch;
    }

    // Invoke the recursion on the lift child, if it exists
    const rightSearch: [TreeNode | null, boolean, boolean] = 
        node.right !== null ? 
            search(node.right, p, q) :
            [null, false, false]; // dummy return if the child doesn't exist

    // If LCA was found in the right child, we're done
    if (rightSearch[0] !== null) {
        return rightSearch;
    }

    // Did we find P in either this node, left subtree or right subtree?
    const foundP: boolean = 
        leftSearch[1] || rightSearch[1] || node.val == p.val;

    // Did we find Q in either this node, left subtree or right subtree?
    const foundQ: boolean = 
        leftSearch[2] || rightSearch[2] || node.val == q.val;

    // If we foundP and foundQ (for the first time), this node is LCA
    return [foundP && foundQ ? node : null, foundP, foundQ]
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // Just output the first return of the recursive function
	return search(root, p, q)[0];
};
