/**
 * Solution to the https://leetcode.com/problems/is-subsequence/
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    bool isSubsequence(string s, string t) {

        // If s is empty it's a subsequence of any string.
        if (s.length() == 0) {
            return true;
        }

        // Character index of s we're trying to find a match for.
        int match_i = 0;

        // For c every character in t.
        for (char c : t) {

            // If c matches the character we were looking for in s, look for the next character.
            if (c == s[match_i]) {
                match_i++;

                // If there are no more characters in s to look for, so is a seubsequence.
                if (match_i == s.length()) {
                    return true;
                }
            }
        }

        // Not all characters in s were found a match for, so it's not a subsequence.
        return false;
    }
};
