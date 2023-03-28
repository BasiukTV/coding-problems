/**
 * Soltuion for https://leetcode.com/problems/intersection-of-two-linked-lists/
 *
 * @author Taras Basiuk
 *
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode GetIntersectionNode(ListNode headA, ListNode headB) {

        // Keep track of visited nodes
        HashSet<ListNode> visited = new HashSet<ListNode>();
        
        // Traverse both lists untill at least one of them isn't over
        while (headA != null || headB != null) {

            // Check if headA is not null and visited ...
            if (headA != null) {
                if (visited.Contains(headA)) {
                    return headA; // ... if so, return it as an intersection point
                }

                // ... if not, add it to the visited and advance the A list further
                visited.Add(headA);
                headA = headA.next;
            }

            // Check if headB is not null and visited ...
            if (headB != null) {
                if (visited.Contains(headB)) {
                    return headB; // ... if so, return it as an intersection point
                }

                // ... if not, add it to the visited and advance the A list further
                visited.Add(headB);
                headB = headB.next;
            }
        }

        return null; // No intersection was found
    }
}
