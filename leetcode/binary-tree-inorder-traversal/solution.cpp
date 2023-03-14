/**
 * Solution for https://leetcode.com/problems/binary-tree-inorder-traversal/
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
    vector<int> inorderTraversal(TreeNode* root) {

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
            TreeNode* node = traversalNodes.back();

            // If the left node is null...
            if (node->left == NULL) {
                // ...record this node value as it has to come second
                traversalValues.push_back(node->val);
                traversalNodes.pop_back();
                
                // Put the right child on stack as its values have to be third
                if (node->right != NULL) {
                    traversalNodes.push_back(node->right);
                }
            } else {
                /**
                 * If the left child is not null push it to stack as its values
                 * have to be first.
                 */
                traversalNodes.push_back(node->left);
                node->left = NULL;
            }
        }

        return traversalValues; // Return collected traversal
    }
};
