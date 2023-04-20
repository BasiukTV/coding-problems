/**
 * Solution for https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree
 *
 * @author Taras Basiuk
 *
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {

    /**
     * Helper recursion function that on one hand attempts to follow the given zigzag direction
     * to see what height can be achieved, but will also try to zigzag in opposide direction to
     * see if that height is bigger.
     */
    private int recursion(TreeNode node, int height, bool lookLeft) {
        return Math.Max( // Return the larger height between the (1) and (2)
            // (1) zigzaging in the given direction (if possible) starting with the height + 1 
            (lookLeft ? node.left != null : node.right != null) ? 
                recursion(lookLeft ? node.left : node.right, height + 1, !lookLeft) :
                height, // If zigzaging is not possible, height is the length of a zigzag.
            // (2) zigzaging in the opposite direction (if possible) starting with the 1 height
            (lookLeft ? node.right != null : node.left != null) ? 
                recursion(lookLeft ? node.right : node.left, 1, lookLeft) :
                0); // If zigzaging in the opposite direction is not possible, we get 0 height
    }

    public int LongestZigZag(TreeNode root) {
        // Just call the resursiob with root, giht of zero, and either lookLeft or not
        return recursion(root, 0, true);
    }
}
