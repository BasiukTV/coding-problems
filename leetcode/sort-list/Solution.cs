/**
 * Solution for https://leetcode.com/problems/sort-list
 * Uses the merge sort.
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
    public ListNode SortList(ListNode head) {

        // If the list is empty or only has one element, it's already sorted
        if (head == null || head.next == null) {
            return head;
        }

        // If the list has two elements...
        if (head.next.next == null) {
            
            // And the first one is smaller than the second, it's already sorted.
            if (head.val <= head.next.val) {
                return head;
            }

            // Otherwise switch the nodes places
            head.next.next = head; // point the second at the first (making a loop)
            head = head.next; // advance the first node to the second one (switching them)
            head.next.next = null; // break the loop
            return head;
        }

        // If the list has more than two elements, we unzip it into two lists
        ListNode list1 = head; // initial last element of the first list
        ListNode list2 = head.next; // initial last element of the second list
        ListNode list1Anchor = list1; // Remember the head of the first list
        ListNode list2Anchor = list2; // Remember the head of the second list
        
        // Iterate the zipped list until ...
        while (list2 != null) {
            list1.next = list2 != null ? list2.next : null;
            list1 = list1.next;

            list2.next = list1 != null ? list1.next : null;
            list2 = list2.next;
        }

        // Sort the unzipped lists by making recursive calls
        list1 = SortList(list1Anchor);
        list2 = SortList(list2Anchor);

        // Now merge the sorted unzipped lists
        ListNode resultAnchor = new ListNode(); // Remember the begining of the merged list 
        ListNode resultIt = resultAnchor; // Current merged-in node is the anchor

        // While either of the lists to merge still hase some elements
        while (list1 != null || list2 != null) {

            // If the first list is empty, we just use the rest of the second list
            if (list1 == null) {
                resultIt.next = list2;
                break;
            }

            // If the second list is empty, we just use the rest of the first list
            if (list2 == null) {
                resultIt.next = list1;
                break;
            }

            // Oterwise, we pick the head element of one of the lists with the smaller value
            if (list1.val <= list2.val) {
                resultIt.next = list1; // take the head of the first list
                resultIt = resultIt.next; // advance the resulting list tail
                list1 = list1.next; // advance the first list head
            } else {
                resultIt.next = list2; // take the head of the first list
                resultIt = resultIt.next; // advance the resulting list tail
                list2 = list2.next; // advance the second list head
            }
        }

        return resultAnchor.next; // Return the head of the sorted zipped list
    }
}
