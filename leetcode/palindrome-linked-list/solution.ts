/**
 * Solution for https://leetcode.com/problems/palindrome-linked-list
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

// Array to hold the list values
let values: number[];

/** 
 * Resursion function which builds an array of list values and then checks
 * wether it's a palindrome.
 */
function recursion(head: ListNode): boolean {
    values.push(head.val); // Add the node value to the array

    // If there are more nodes, advance the recursion
    if (head.next != null) {
        return recursion(head.next);
    }

    console.log(values);

    // If there are no more values, check wether the array is a palindrome
    for (let i: number = 0; i < Math.floor(values.length / 2); i++) {
        if (values[i] != values[values.length - 1 - i]) {
            return false // Violation found, not a palindrome
        }
    }

    return true; // No violation found, must be a palindrome
}

function isPalindrome(head: ListNode | null): boolean {
    // Reset the values and call the helper recursion function
    values = [];
    return recursion(head);
};
