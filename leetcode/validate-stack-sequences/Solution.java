/**
 * Solution for https://leetcode.com/problems/validate-stack-sequences
 *
 * @author Taras Basiuk
 */

import java.util.Optional;

class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        
        int pi = 0; // Pushed number index
        var stack = new LinkedList<Integer>(); // Actual stack
        for (int p : popped) { // For every number in popped

            // While top number on stack doesn't match p, 
            // and there are numbers left in pushed.
            while (
                pi < pushed.length && 
                Optional.ofNullable(stack.peek()).orElse(-1) != p) {
                    // Keep pushing numbers on stack
                    stack.push(pushed[pi]);
                    pi++;
            }

            // If top number on stack is p
            if (stack.peek() == p) {
                stack.pop(); // Pop it
            } else {
                return false; // Run out of numbers in pushed without finding p
            }
        }

        return true; // Found match for every p
    }
}
