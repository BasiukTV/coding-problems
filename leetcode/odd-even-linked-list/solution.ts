/**
 * Solution for https://leetcode.com/problems/odd-even-linked-list
 *
 * @author Taras Basiuk
 *
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {

    // oddAnchor.next will point to the first odd indexed node, oddLast will point at last
    const oddAnchor: ListNode = new ListNode();
    let oddLast: ListNode = oddAnchor;

    // evenAnchor.next will point to the first even indexed node, evenLast will point at last
    const evenAnchor: ListNode = new ListNode();
    let evenLast: ListNode = evenAnchor;

    // Iterate through the list, while keeping track of odd and even nodes
    let odd: boolean = true;
    while (head !== null) {

        if (odd) { // if the node id odd
            oddLast.next = head; // make last odd node (or anchor) point to this node
            oddLast = oddLast.next; // make this node to be last odd node
        } else { // if the node id even
            evenLast.next = head; // make last even node (or anchor) point to this node
            evenLast = evenLast.next; // make this node to be last even node
        }

        odd = !odd; // change odd/even counter
        head = head.next; // advance the list iterator
    }

    // If the last even node wasn't the last one in the list, make sure it doesn't create cycle
    evenLast.next = null;

    // Attack first even node to the last odd node 
    oddLast.next = evenAnchor.next;
    return oddAnchor.next; // Return the rearranged list
};
