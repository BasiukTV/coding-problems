/**
 * Solution for https://leetcode.com/problems/find-the-winner-of-the-circular-game/
 *
 * @author Taras Basiuk
 */

/** Helper class for making up a linked list */
class LLNode {
    val: number;
    next: LLNode;
}

function findTheWinner(n: number, k: number): number {

    // We will acturally create the circle made of LLNodes

    // We need to memorize the head node, to complete the circle later
    const head: LLNode = new LLNode();
    head.val = 1;

    // Create all other nodes in the circle and link them together
    let current: LLNode = head;
    for (let i: number = 2; i <= n; i++) {
        const nextLLNode: LLNode = new LLNode();
        nextLLNode.val = i;

        current.next = nextLLNode;
        current = current.next;
    }

    // We complete the circle here. Current poiting at the head is by design.
    current.next = head;

    // For n - 1 nodes we need to delete
    for (let i: number = 0; i < n - 1; i++) {

        // Make k-1 jumps to find the node preceding the one we will delete
        for (let j: number = 0; j < k - 1; j++) {
            current = current.next;
        }

        // Delete (skip) the node current is pointing to
        current.next = current.next.next;
    }

    return current.val; // Return the value of the only remaining node
};
