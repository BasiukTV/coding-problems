/**
 * Solution for https://leetcode.com/problems/ransom-note/description/
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {

        // Ransom note cannot be constructed from shorter magazine
        if (ransomNote.size() > magazine.size()) {
            return false;
        }

        // Sort both rasome note and magazine
        sort(ransomNote.begin(), ransomNote.end());
        sort(magazine.begin(), magazine.end());

        int mi = -1; // Magazine index

        // For every character in ransom note
        for (int ri = 0; ri < ransomNote.size(); ri++) {
            while (true) {

                // Take the next character from magazinh
                mi++;
                if (mi >= magazine.size()) {
                    return false; // If there are no more characters left in magazine
                }

                // If characters match, move to the next character in ransomNote
                if (ransomNote[ri] == magazine[mi]) {
                    break;
                }
            }
        }

        // All characters in ransomNote were matched to magazine characters
        return true;
    }
};
