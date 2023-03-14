/**
 * Solution for https://leetcode.com/problems/symmetric-tree/
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
    public boolean isSymmetric(TreeNode root) {

        // Array with the nodes on the current level, initialized with the root
        TreeNode[] level = {root};
        int nonNullNodes = 1; // Number of non-null nodes on this level

        while (nonNullNodes > 0) { // As long as there's a single non-null node

            // Prepare the twise as large array for the next level nodes
            TreeNode[] newLevel = new TreeNode[level.length * 2];
            nonNullNodes = 0;

            // For every non-null node on the current level
            for (int i = 0; i < level.length; i++) {
                if (level[i] == null) { continue; }

                // Record its left child on the next level
                newLevel[i * 2] = level[i].left;

                // Increment the nonNullNodes if left child in not null
                if (newLevel[i * 2] != null) { nonNullNodes++;}

                // Record its right child on the next level
                newLevel[(i * 2) + 1] = level[i].right;

                // Increment the nonNullNodes if right child in not null
                if (newLevel[(i * 2) + 1] != null) { nonNullNodes++;} 
            }

            /**
             * Now we will iterate through the mirror nodes on the next level.
             * There will be level.length pairs to consider.
             */
            for (int i = 0; i < level.length; i++) {

                // Calculate the indexes of the pair in the newLevel vector
                int li = i, ri = newLevel.length - (i + 1);

                // Retrieve the values of the pair, or invalid value if null
                int leftVal = newLevel[li] != null ? newLevel[li].val : -101;
                int rightVal = newLevel[ri] != null ? newLevel[ri].val : -101;

                // If values don't match, the tree is not a mirror
                if (leftVal != rightVal) {
                    return false;
                }
            }

            level = newLevel; // Next level is now this level
        }

        return true; // No problems with the mirror found
    }
}
