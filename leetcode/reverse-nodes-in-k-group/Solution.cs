/**
 * Solution for https://leetcode.com/problems/reverse-nodes-in-k-group/
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
    public ListNode ReverseKGroup(ListNode head, int k) {

        // Anchor node memorizes the place where the list begins
        ListNode anchor = new ListNode(0, head);

        // Current is the node preceding another group of reversed nodes
        ListNode current = anchor;

        // Stack will contain the group of nodes to be reversed
        Stack<ListNode> myStack = new Stack<ListNode>();

        while (true) {

            // Starting from current.next place k nodes on the stack
            int i = 0;
            ListNode iNode = current.next;
            while (i < k && iNode != null) {
                myStack.Push(iNode);

                i++;
                iNode = iNode.next;
            }

            // If there were no k nodes to reverse, we're done
            if (myStack.Count < k) {
                break;
            }

            // The node on top of the stack points to the remainder of the list
            ListNode tmp = myStack.Peek().next;

            // Pop the nodes off the stack, reversing their order
            while (myStack.Count > 0) {
                current.next = myStack.Pop();
                current = current.next;
            }

            // Current node should point towards the remainder of the list now
            current.next = tmp;
        }

        return anchor.next; // Return the beginning of the transformed list
    }
}
