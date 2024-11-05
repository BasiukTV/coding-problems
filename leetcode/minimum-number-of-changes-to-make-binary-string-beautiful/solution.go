/*
 * Solution for the - https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful
 *
 * Trick to the solution is realizing that if we split the string into pairs:
 *     1. No string will be beutiful unless every pair consists of the same numbers.
 *     2. Minimum number chages we need to make is to fix every ugly pair.
 */
func minChanges(s string) int {
    changes := 0 // Track the changes needed to make the string beutiful

    // Traverse the string characters in pairs
    for i := 0; i < len(s) - 1; i += 2 {
        if s[i] != s[i + 1] { // If the characters of the pair are different ...
            changes++         // ... fix them.
        }
    }

    return changes
}
