/**
 * Solution for https://leetcode.com/problems/binary-tree-level-order-traversal/
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
    public List<List<Integer>> levelOrder(TreeNode root) {

        // Prepare empty leve order traversal and return it if the root is nool
        final LinkedList<List<Integer>> order = new LinkedList<>();
        if (root == null) {
            return order;
        }

        // Intialize the work queue holding all the nodes on the same level with the root node
        LinkedList<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) { // Work untill there are no more nodes on the next level

            // The queue for the nodes on the next level
            final LinkedList<TreeNode> new_queue = new LinkedList<>();

            // Values of the nodes on this level
            final LinkedList<Integer> level_values = new LinkedList<>();

            // For every node on the current level
            for (final TreeNode node : queue) {
                level_values.add(node.val); // Add the node value to the level values

                // If the node has the left child add it to the next level queue
                if (node.left != null) {
                    new_queue.add(node.left);
                }

                // If the node has the right child add it to the next level queue
                if (node.right != null) {
                    new_queue.add(node.right);
                }
            }

            // Rotate the queues
            queue = new_queue;

            // Add all values from this levels to the order level traversal
            order.add(level_values);
        }

        return order; // Retunr the final order level traversal
    }
}
