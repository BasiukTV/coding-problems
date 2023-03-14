/**
 * Solution for https://leetcode.com/problems/binary-tree-preorder-traversal/
 * Note: The solution is deliberatly iterative, per problem challenge.
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
    vector<int> preorderTraversal(TreeNode* root) {

        // If the tree is empty return an empty vector
        vector<int> traversalValues;
        if (root == NULL) {
            return traversalValues;
        }

        // Stack for traversing the tree, initilized with the root node.
        vector<TreeNode*> traversalNodes;
        traversalNodes.push_back(root);
    
        // While the're anything on the stack
        while (!traversalNodes.empty()) {

            // Pop the node off the stack
            TreeNode* node = traversalNodes.back();
            traversalNodes.pop_back();

            // Record the node value as it has to come first 
            traversalValues.push_back(node->val);

            // Push the right child on the stack as it's value has to come third
            if (node->right != NULL) {
                traversalNodes.push_back(node->right);
            }

            // Push the left child on the stack as it's value has to come second
            if (node->left != NULL) {
                traversalNodes.push_back(node->left);
            }
        }

        return traversalValues; // Return the collected values
    }
};

