/**
 * Solution to https://leetcode.com/problems/linked-list-cycle-ii/
 *
 * @author Taras Basiuk
 *
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {

        // If input list is empty, there's no cycle
        if (head == NULL) {
            return NULL;
        }

        // We'll use pointer chasing algorithm, with both pointers starting at the head.
        ListNode* slow = head;
        ListNode* fast = head;

        while (true) {

            // If the fast pointer has nowhere to advance, there's no cycle.
            if (fast->next == NULL) {
                return NULL;
            }

            // Advance both pointers.
            fast = fast->next;
            slow = slow->next;

            // Again, if the fast pointer has nowhere to advance, there's no cycle.
            if (fast->next == NULL) {
                return NULL;
            }
            fast = fast->next; // Only advance the fast pointer.

            // If the fast pointer catches up to the slow one, there is actually a cycle.
            if (slow == fast) {

                /**
                 * Now, I don't understand why that is. But if we start another slow pointer
                 * at the head, and advance both slow pointers at the same time, they will
                 * meet at the begining og the cycle. There's math behind this, but I don't
                 * get it that well.
                 */
                ListNode* second_slow = head;
                while (slow != second_slow) {
                    slow = slow->next;
                    second_slow = second_slow->next;
                }

                return second_slow; // Retunr the mode there the slow pointers meet.
            }
        }
    }
};
