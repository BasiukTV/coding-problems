/**
 * Solution for https://leetcode.com/problems/swap-nodes-in-pairs
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

function swapPairs(head: ListNode | null): ListNode | null {

    // If the list is too short to spap anything, just return it as is
    if (head === null || head.next === null) {
        return head;
    }

    // Make a leading anchor node to return its next as the result
    const anchor: ListNode = new ListNode(0, head);

    // Iterate the list with three consequtive TreeNodes, swapping the last two every time 
    let current: ListNode = anchor;
    let next: ListNode = current.next;
    let nextnext: ListNode = next.next;

    while (true) {

        // Swap the 'next' and 'nextnext' nodes places
        current.next = nextnext;
        let tmp: ListNode = nextnext.next;
        nextnext.next = next;
        next.next = tmp;

        // If there are no two more nodes left in the list, we're done
        if (next.next === null || next.next.next === null) {
            break;
        }

        // Advance all the nodes two positions
        current = next;
        next = current.next;
        nextnext  = next.next;
    }

    return anchor.next; // Return the resulting list
};
