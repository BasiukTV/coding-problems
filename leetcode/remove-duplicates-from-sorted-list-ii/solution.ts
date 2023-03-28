/**
 * Solution for https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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

function deleteDuplicates(head: ListNode | null): ListNode | null {

    // Anchor node we need in case first node needs to be deleted
    const anchor: ListNode = new ListNode(0, head);

    // Iterate ober three consequitive nodes at once: current, next, and nextnext
    let current: ListNode = anchor;
    let next: ListNode = current.next;
    if (next === null) {
        return null; // The input list was empty, nothing to do here    
    }
    let nextnext: ListNode = next.next;

    // Untill the nextnext hits the end of the list
    while (nextnext !== null) {

        if (next.val !== nextnext.val) {
            // If values of next and nextnext nodes differ, just advance all three nodes
            current = next;
            next = nextnext;
            nextnext = nextnext.next;
        } else {
            // Otherwise, only advance nextnext untill we hit a different value, or list end
            while (nextnext !== null && next.val === nextnext.val) {
                nextnext = nextnext.next;
            }

            // Now, point current to a valid nextnext, effectively erasing the duplicates
            current.next = nextnext;

            // If nextnext hit the end of the list, we're done 
            if (nextnext == null) {
                break;
            }

            next = current.next; // Update next
            nextnext = next.next; // Update nextnext

            // Do not advance current yet, as next and nextnext might be the same again
        }

    }

    return anchor.next; // Return the head of the list that the anchor was attached to
};
