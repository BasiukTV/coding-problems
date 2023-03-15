/**
 * Solution for https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function(root) {

    // If the root is empty, nothing to do here
    if (root === null) {
        return null;
    }

    // Switch left and right children places, whose children are also switched.
    const tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);

    // Return the root of the now inverted tree
    return root;
};
