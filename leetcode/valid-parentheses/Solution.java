/**
 * Solution for https://leetcode.com/problems/valid-parentheses/
 *
 * @author Taras Basiuk
 */
class Solution {
    public boolean isValid(String s) {

        // Stack for the closing parantheses we're waiting for if the string is valid
        final LinkedList<Character> waiting_for = new LinkedList<>();

        // For every character in the string
        for (final Character c : s.toCharArray()) {

            // If character is an opening paranthesis place matching closing one on the stack
            if (c == '(') { waiting_for.push(')'); continue; }
            if (c == '{') { waiting_for.push('}'); continue; }
            if (c == '[') { waiting_for.push(']'); continue; }

            // If charactes is a closing paranthesis, make sure it's the one we expect
            if (waiting_for.isEmpty() || c != waiting_for.pop()) {
                return false;
            }
        }

        // If there's nothing left on the stack, the string is valid
        return waiting_for.isEmpty();
    }
}
