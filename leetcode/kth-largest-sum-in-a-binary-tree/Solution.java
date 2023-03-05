/**
 * Solution to the https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/
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

    // Map where the sum of elements on each level is stored
    private Map<Integer, Long> levelSums;

    // method that recursively traverses the tree while updating the level sums
    private void traverse(TreeNode node, int lvl) {

        // If there's no sum for the current level yet, initialize it at 0
        if (!levelSums.containsKey(lvl)) {
            levelSums.put(lvl, new Long(0));
        }

        // Update the sum at current level with node.val
        levelSums.put(lvl, levelSums.get(lvl) + node.val);

        // If the left child exist continue the trafersal to the left subtree
        if (node.left != null) {
            traverse(node.left, lvl + 1);
        }

        // If the left child exist continue the trafersal to the left subtree
        if (node.right != null) {
            traverse(node.right, lvl + 1);
        }
    }

    public long kthLargestLevelSum(TreeNode root, int k) {

        // Initialize the level sums map
        levelSums = new HashMap<>();

        // Start the tree traversal at the root node on level 1
        traverse(root, 1);

        // Extract the level sums into a list sorted in a descending order
        List<Long> orderedSums = new ArrayList<>();
        levelSums.forEach((key, v) -> orderedSums.add(v));
        Collections.sort(orderedSums);
        Collections.reverse(orderedSums);

        // Return the k highest sum, if it exists, otherwise return -1
        return k > orderedSums.size() ? -1 : orderedSums.get(k - 1);
    }
}
