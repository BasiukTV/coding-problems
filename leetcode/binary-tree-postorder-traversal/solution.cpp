/**
 * Solution for https://leetcode.com/problems/binary-tree-postorder-traversal/
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
    vector<int> postorderTraversal(TreeNode* root) {

        // If the tree is empty return the empty vector
        vector<int> traversalValues;
        if (root == NULL) {
            return traversalValues;
        }

        // Stack for traversing the tree, initilized with the root node.
        vector<TreeNode*> traversalNodes;
        traversalNodes.push_back(root);

        // Until the stack is empty
        while (!traversalNodes.empty()) {
            // Get the node of the stack (without popping it yet)
            TreeNode* node = traversalNodes.back();

            /**
             * If the left child is present put it on the stack as its values 
             * have to be first. Null the reference to the left child.
             */
            if (node->left != NULL) {
                traversalNodes.push_back(node->left);
                node->left = NULL;
                continue;
            }

            /**
             * If the left right is present put it on the stack as its values 
             * have to be second. Null the reference to the right child.
             */
            if (node->right != NULL) {
                traversalNodes.push_back(node->right);
                node->right = NULL;
                continue;
            }

            /**
             * After there's no more children left record this node value as
             * it has to come last, and finally pop this node off the stack.
             */
            traversalValues.push_back(node->val);
            traversalNodes.pop_back();
        }

        return traversalValues; // Return the collected traversal
    }
};
