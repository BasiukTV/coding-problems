/**
 * Solution for https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * @author Taras Basiuk
 *
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {

        // First we measure the depth of the list
        int depth = 0;
        for (ListNode it = head; it != null; it = it.next) {
            depth++;
        }

        // Anchor node pointing at the head needed in case we delete the first node
        final ListNode anchor = new ListNode(-1, head);

        // Iterate to the node preceding the one we need to delete
        ListNode it = anchor;
        for (int i = 0; i < depth - n; i++) {
            it = it.next;
        }

        // Deleting the node by hoping over it in the chain of .nexts
        it.next = it.next.next;

        // Return the head node (or the next one if head was deleted).
        return anchor.next;
    }
}
