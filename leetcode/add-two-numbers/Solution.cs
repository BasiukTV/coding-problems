/**
 * Solution for https://leetcode.com/problems/add-two-numbers/
 *
 * @author Taras Basiuk
 *
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {

        // Keep track of the resulting list head, tail, and sum remainder.
        ListNode head, tail;
        head = tail = null;
        int remainder = 0;

        // While both lists aren't empty
        while (l1 != null || l2 != null) {

            // Take care of one of the lists being empty posibility
            l1 ??= new ListNode();
            l2 ??= new ListNode();

            // Produce the latest result node 
            ListNode newNode = new ListNode(
                (l1.val + l2.val + remainder) % 10);

            // If the result head node wasn't initialized, do so now
            head ??= newNode;

            // Update where the previous tail node is now pointing...
            if (tail != null) {
                tail.next = newNode;
            }
            tail = newNode; // ... and update the new tail.

            // Calculate the remainder and advance both lists
            remainder = (l1.val + l2.val + remainder) / 10;
            l1 = l1.next;
            l2 = l2.next;
        }

        // If some remainder remains, make a new node for it
        if (remainder > 0) {
            ListNode newNode = new ListNode(remainder);
            tail.next = newNode;
        }

        return head; // Return the recorded head node of the resulting list
    }
}
