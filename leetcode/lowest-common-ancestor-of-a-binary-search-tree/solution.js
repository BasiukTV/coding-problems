/**
 * Solution for https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree
 *
 * @author Taras Basiuk
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return findLCA(root, p, q)[0]; // Just call our resursive function with the root node
};

/**
 * Recrusive finction that looks for LCA.
 *
 * It returns an array consisting of:
 *   - LCA node if it is in the subtree of this node, or null otherwise
 *   - Does p occur in the subtree of this node?
 *   - Does q occur in the subtree of this node?
 */
var findLCA = function(node, p, q) {

    // If this node has children, we dive right away
    let leftAnc = node.left != null ? findLCA(node.left, p, q) : [null, false, false];
    let rightAnc = node.right != null ? findLCA(node.right, p, q) : [null, false, false];

    // If LCA occurs somewhere in the left child subtree, we just pass the result up
    if (leftAnc[0] != null) {
        return leftAnc;
    }

    // If LCA occurs somewhere in the right child subtree, we just pass the result up
    if (rightAnc[0] != null) {
        return rightAnc;
    }

    // If our node p or q?
    let isP = node == p;
    let isQ = node == q;

    // If combination of isP, isQ, and children ansestries adds up to both p and q found
    if ((isP || leftAnc[1] || rightAnc[1]) && ( isQ || leftAnc[2] || rightAnc[2])) {
        // We are the LCA node
        return [node, true, true]
    }

    // Otherwise, just combine and return our knowledge of p and q occurance so far
    return [null, isP || leftAnc[1] || rightAnc[1], isQ || leftAnc[2] || rightAnc[2]]
}
