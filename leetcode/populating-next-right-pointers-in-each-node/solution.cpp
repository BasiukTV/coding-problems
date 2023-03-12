/**
 * Solution for https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 *
 * @author Taras Basiuk
 *
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/

class Solution {
public:
    Node* connect(Node* root) {

        // If root is NULL, there's nothing to do
        if (root == NULL) {
            return root;
        }

        // Vector holding all the nodes on the same level
        vector<Node*> level {root};

        // As long as there are some nodes on this level
        while (!level.empty()) {

            // Vector holding all the nodes on the next level
            vector<Node*> new_level;

            // Tracerse all the nodes on this level
            for (int i = 0; i < level.size(); i++) {

                // If this node is not last in the vector
                if (i != level.size() - 1) {
                    // Point this node to the next node in vector
                    level[i]->next = level[i + 1];
                }

                // If this node has children, add them to the next level vector
                if (level[i]->left != NULL) {
                    new_level.push_back(level[i]->left);
                    new_level.push_back(level[i]->right);
                }
            }

            // Next level vector is now current level vector
            level = new_level;
        }

        return root; // Return thr root of the modified tree
    }
};
