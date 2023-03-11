/**
 * Solution for https://leetcode.com/problems/validate-binary-search-tree/
 *
 * @author Taras Basiuk
 *
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {

    /**
     * Internal recurstion that verifies that node value lies in the range dictated
     * by its parents.
     */
    private boolean isValidBST(TreeNode node, Long left_edge, Long right_edge) {

        // Check that node.val is valid
        return (node.val > left_edge) && (node.val < right_edge) &&
            // Check that left's child (if exist) value is also valid
            (node.left == null || isValidBST(node.left, left_edge, Long.valueOf(node.val))) &&
            // Check that right's child (if exist) value is also valid
            (node.right == null || isValidBST(node.right, Long.valueOf(node.val), right_edge));
    }

    public boolean isValidBST(TreeNode root) {
        // Start the recursion with largest possible range of allowed values
        return isValidBST(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }
}
