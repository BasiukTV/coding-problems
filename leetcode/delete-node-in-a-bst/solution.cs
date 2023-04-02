/**
 * Solution for https://leetcode.com/problems/delete-node-in-a-bst/
 *
 * As tree is not balanced, removing the node in place doesn't guarantee good
 * performance. So, we'll just get tree traversal, remove key from it, and
 * reconstruct the tree.
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

    // Returns as in-order traversal for a given subtree
    private List<int> inorderTraversal(TreeNode node) {
        List<int> result = new List<int>(); // Result container

        // If left child is present, get their traversal
        if (node.left != null) {
            result.AddRange(inorderTraversal(node.left));
        }

        result.Add(node.val); // Add this node's value

        // If right child is present, get their traversal
        if (node.right != null) {
            result.AddRange(inorderTraversal(node.right));
        }

        return result; // Return combined traversal
    }

    // Builds a tree from a traversal limited by a given range
    private TreeNode buildTree(int[] traversal, int begin, int end) {

        // Find the value of, and initalize the root node
        int ri = begin + ((end - begin) / 2);
        TreeNode root = new TreeNode(traversal[ri]);

        // If anything left to the left of ri, build a tree for the left child
        if (ri > begin) {
            root.left = buildTree(traversal, begin, ri - 1);
        }

        // If anything left to the right of ri, build a tree for the right child
        if (ri < end) {
            root.right = buildTree(traversal, ri + 1, end);
        }

        return root; // Return constructed tree
    }

    public TreeNode DeleteNode(TreeNode root, int key) {

        // If tree is empty return it
        if (root == null) {
            return root;
        }

        // Get the tree traversal
        List<int> traversal = inorderTraversal(root);

        // Try removing the key from the traversal, if it wasn't, we're done
        bool removed = traversal.Remove(key);
        if (!removed) {
            return root;
        }

        // If the traversal is empty after key removal, return empty tree 
        if (traversal.Count == 0) {
            return null;
        }

        // Return the tree constacted from the traversal
        return buildTree(traversal.ToArray(), 0, traversal.Count - 1);
    }
}
