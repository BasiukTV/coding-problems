/**
 * Solution for https://leetcode.com/problems/path-sum-iii/
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
    
    // Recursive function passes the list of sums from node to the root
    private int CountPaths(TreeNode node, int targetSum, List<long> sums) {
        int result = 0; // How many target sums addition of node.val produces?

        // Make a copy of sums and add node.val to every element
        List<long> sumsCopy = new List<long>(sums.Count + 1);
        for (int i = 0; i < sums.Count; i++) {
            sumsCopy.Add(sums[i] + node.val);

            // Did addition of node.val produces a new targetSum?
            if (sumsCopy[i] == targetSum) {
                result += 1; // If so, record it.
            }
        }

        // Add just node.val at the end of the copy, and check it for targetSum
        sumsCopy.Add(node.val);
        if (sumsCopy[sumsCopy.Count - 1] == targetSum) {
            result += 1;
        }

        // If left child exists, progress the recursive function to it
        if (node.left != null) {
            result += CountPaths(node.left, targetSum, sumsCopy);
        }
        
        // If right child exists, progress the recursive function to it
        if (node.right != null) {
            result += CountPaths(node.right, targetSum, sumsCopy);
        }

        return result; // Return targetSum produce in this node and its subtrees
    } 
    
    public int PathSum(TreeNode root, int targetSum) {

        // Empty tree will not produce any targetSum
        if (root == null) {
            return 0;
        }

        // Just return the recursive function result started from root
        return CountPaths(root, targetSum, new List<long>());
    }
}
