/**
 * Solution for https://leetcode.com/problems/remove-duplicates-from-sorted-list
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
    ListNode* deleteDuplicates(ListNode* head) {

        // If list is empty, return it
        if (head == NULL) {
            return NULL;
        }

        // Iterate though the list until it's over
        ListNode* it = head;
        while (it->next != NULL) {

            // If the values of this node and next node don't match, proceed to next node
            if (it->val != it->next->val) {
                it = it->next;
                continue;
            }

            // Next valid node is either with a different value or the end of the list
            ListNode* valid = it->next;
            while (valid != NULL && valid->val == it->val) {
                valid = valid->next;
            }

            // Set the next node from the current one to the valid one we found
            it->next = valid;
        }

        return head; // Return the modified list
    }
};
