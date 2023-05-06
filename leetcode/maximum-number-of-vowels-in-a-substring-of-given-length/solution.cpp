/** 
 * Solution for https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length
 *
 * @author Taras Basiuk
 */
class Solution {
private:

    // Set of vowels characters
    const set<char> vowels = {'a', 'e', 'i', 'o', 'u'};

public:

    int maxVowels(string s, int k) {

        int vs = 0; // vowel counter within k character window
        int max_vs = 0; // max vs ever oserved

        for (int i = 0; i < s.length(); i++) { // for every character

            // if vowel encountered, increment the vs counter
            if (vowels.count(s[i]) > 0) {
                vs++;
            }

            // If window of size k, throw out the first char, check for vowels
            if (i >= k && vowels.count(s[i - k]) > 0) {
                vs--;
            }

            // Check if max_vs should be updated
            max_vs = max(max_vs, vs);
        }

        return max_vs; // Return max vs ever oserved
    }
};
