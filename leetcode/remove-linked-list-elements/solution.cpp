/**
 * Solution to https://leetcode.com/problems/remove-linked-list-elements/
 *
 * @author Taras Basiuk
 *
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {

        // Anchor node needed in case the first node(s) have to be deleted 
        ListNode anchor = ListNode(-1, head);

        // Iterate through the list until it.next points to NULL
        ListNode* it = &anchor;
        while (it->next != NULL) {

            // If the value of the next node matchest th target
            if (it->next->val == val) {

                // Find the next valid node
                ListNode* valid = it->next;

                // Next valid node is either NULL of doesn't have the target value
                while (valid != NULL && valid->val == val) {
                    // Untill either of those conditions holds, we iterate
                    valid = valid->next;
                }

                // When the valid node is found connect it->next to it
                it->next = valid;
            } else {
                // If value of the next node is OK, just move along
                it = it->next;
            }
        }

        return anchor.next; // Return the modified list
    }
};
