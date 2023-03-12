/**
 * Solution for https://leetcode.com/problems/merge-two-binary-trees/
 *
 * @author Taras Basiuk
 *
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* mergeTrees(TreeNode* root1, TreeNode* root2) {

        // If either of the trees is empty, return the other one
        if (root1 == NULL || root2 == NULL) {
            return root1 == NULL ? root2 : root1;
        }

        /**
         * Modifying input arguments is generally bad, but since it's not explicitly forbidden
         * we'll do this in order to get a better submission performance.
         */

        // Merge in the current node values and execute recursion for respectibe children
        root1->val = root1->val + root2->val;
        root1->left = mergeTrees(root1->left, root2->left);
        root1->right = mergeTrees(root1->right, root2->right);

        // Return what is now a merged tree
        return root1;
    }
};
