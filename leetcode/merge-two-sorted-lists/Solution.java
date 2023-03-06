/**
 * Solution to https://leetcode.com/problems/merge-two-sorted-lists/
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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {

        // If both lists are empty, return an empty list.
        if (list1 == null && list2 == null) {
            return null;
        }

        // Initialize the first node in the returned list.
        ListNode current = new ListNode();

        // Remember the head of the list to return.
        final ListNode anchor = current;

        // As long as either of the lists is not empty.
        while (list1 != null || list2 != null) {

            // Rettrieve head elements from the lists, or a placeholder if the list is empty. 
            final int list1item = list1 != null ? list1.val : 101;
            final int list2item = list2 != null ? list2.val : 101;

            // Use the lover of the elements for the value of the current node.
            current.val = list1item <= list2item ? list1item : list2item;

            // Progress the list from wich we took the elemnt from.
            if (list1item <= list2item) {
                list1 = list1.next;
            } else {
                list2 = list2.next;
            }

            // If either of the lists is still not empty, we'll need another node.
            if (list1 != null || list2 != null) {
                current.next = new ListNode();
                current = current.next;
            }
        }

        // Return the constructed list by returning the reference to its head.
        return anchor;
    }
}
