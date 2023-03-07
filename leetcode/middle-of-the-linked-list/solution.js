/**
 * Solution to https://leetcode.com/problems/middle-of-the-linked-list/
 *
 * @author Taras Basiuk
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    return returnMiddle(head, 1)[1]; // Return the result of the recursive call
};

/**
 * Recursive function which is on the way down measures the length of the list,
 * and on the way up captures the middle element of the list.
 */
var returnMiddle = (node, nodeDepth) => {
    var maxDepth, result;
    if (node.next === null) { // If we reached the bottom...
        maxDepth = nodeDepth; // ... record the depth of the list.
    } else {
        // Otherwise keep descending.
        [maxDepth, result] = returnMiddle(node.next, nodeDepth + 1);
    }

    // On the way up, if our depth is in the middle of the list pass our node up as the result.
    if (Math.floor(maxDepth / 2) + 1 == nodeDepth) {
        result = node;
    }

    // Pass maxDepth (and maybe the result) upwards.
    return [maxDepth, result];
}
