/**
 * Solution for https://leetcode.com/problems/two-sum-iv-input-is-a-bst
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

    // Recusrsive function for building an inorder traversal of the tree
    private List<Integer> inorderTraversal(final TreeNode node) {

        // Traverse the left subtree (if exists)
        final List<Integer> traversal = node.left != null ?
            inorderTraversal(node.left) :
            new LinkedList<>();

        // Add this node value to the traversal
        traversal.add(node.val);

        // Traverse the left subtree (if exists)
        if (node.right != null) {
            traversal.addAll(inorderTraversal(node.right));
        }

        return traversal; // Return the traversal
    }

    public boolean findTarget(TreeNode root, int k) {

        // Get the int array inorder (sorted) traversal of the tree
        final int[] nums = inorderTraversal(root).stream()
            .mapToInt(Integer::intValue)
            .toArray();

        int j = 1; // Second number index
        for (int i = 0; i < nums.length - 1; i++) { // For every possible first number index

            // If the first number index ran over the second, push the second index a bit
            if (j <= i) {
                j = i + 1;
            }

            // If the second number ran off the array, return it to the right edge
            if (j == nums.length) {
                j--;
            }

            // The second index will advance rightwards, unless the current sum already too big
            int dir = 1;
            if (j < nums.length && nums[i] + nums[j] >= k) {
                dir = -1;
            }

            // While second index is in valid range
            while (j > i && j < nums.length) {

                // Check if we got the match
                if (nums[i] + nums[j] == k) {
                    return true;
                }

                // Check if we went too far already
                if (nums[i] + nums[j] < k ^ dir == 1) {
                    break;
                }

                j += dir; // Advance the second index
            }
        }

        return false; // Didn't find the match
    }
}
