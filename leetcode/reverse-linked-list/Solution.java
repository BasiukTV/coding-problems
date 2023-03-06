/**
 * Solution for https://leetcode.com/problems/reverse-linked-list/
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
    public ListNode reverseList(ListNode head) {

        // Initialize and populate a list of values which supports operating as stack.
        LinkedList<Integer> values = new LinkedList<>();
        while (head != null) {
            values.push(head.val);
            head = head.next;
        }

        ListNode current = new ListNode(); // Current node of the reversed list.
        ListNode anchor = current; // Reference for the head of the list to return.

        // Pop every element of the "values" stack and record them in the resulting list.
        while (!values.isEmpty()) { //  As long as there are values available.
            current.next = new ListNode(); // New node will be needed.
            current = current.next; // Progress current node to the new node.
            current.val = values.pop(); // Record the value off the stack in the new node.
        }

        return anchor.next; // Return the recorded head of the resulting list.
    }
}
