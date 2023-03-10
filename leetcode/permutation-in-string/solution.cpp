/**
 * Solution for https://leetcode.com/problems/permutation-in-string
 *
 * There's a much faster sliding window + character counts based solution
 * to this problem, but I'm unfortunately too tired today to implement it. 
 * 
 * @author Taras Basiuk
*/
class Solution {
public:
    bool checkInclusion(string s1, string s2) {

        sort(s1.begin(), s1.end()); // Sort the s1 string
        set<char> s1_chars(s1.begin(), s1.end()); // Build a set of s1 characters

        // For every character in s1 that can possible start s2
        for (int i = 0; i < (int) (s2.length() - s1.length()) + 1; i++) {

            // If s2[i] appears somewhere in s2
            if (s1_chars.count(s2[i]) == 1) {

                // Copy an s2 substring starting from i, length of s1 
                string s2_sub = s2.substr(i, s1.length());
                sort(s2_sub.begin(), s2_sub.end()); // ... and sort it too

                // Did we found a substring that is a permutation of s1?
                if (s2_sub == s1) {
                    return true;
                }
            }
        }

        // Weren't able to find a permitation of s1 as a substring of s2
        return false;
    }
};
