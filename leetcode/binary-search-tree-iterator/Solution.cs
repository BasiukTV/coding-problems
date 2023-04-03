/**
 * Solution for https://leetcode.com/problems/binary-search-tree-iterator/
 * Very slow, but very simple solution. Storing a full tree inorder traversal, or
 * tree iteration stack would be better but I'm too tired to day to do so.
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
public class BSTIterator {

    private BSTIterator left; // Left subtree iterator
    private BSTIterator right; // Right subtree iterator

    private int val; // This tree node value
    private bool returnedSelf; // Flag of wether this.val was returned already

    public BSTIterator(TreeNode root) {
        // Initialize left and right subtree iterators and record this.val
        this.left = root.left != null ? new BSTIterator(root.left) : null;
        this.right = root.right != null ? new BSTIterator(root.right) : null;
        this.val = root.val;
        this.returnedSelf = false;
    }
    
    public int Next() {
    
        // If left iterator values weren't used up use one of them
        if (this.left != null && this.left.HasNext()) {
            return this.left.Next();
        };

        // Otherwise, If this.val wasn't return yet, return it
        if (!this.returnedSelf) {
            this.returnedSelf = true;
            return this.val;
        }

        // Otherwise use one of right iterator values (we have a valid call guarantee)
        return this.right.Next();
    }
    
    // If either left or right subtree iterator has values, or this.val wasn't used return true
    public bool HasNext() {
        return
            (this.left != null ? this.left.HasNext() : false) ||
            (!this.returnedSelf) ||
            (this.right != null ? this.right.HasNext() : false);
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator obj = new BSTIterator(root);
 * int param_1 = obj.Next();
 * bool param_2 = obj.HasNext();
 */
