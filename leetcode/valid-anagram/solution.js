/**
 * Solution for https://leetcode.com/problems/valid-anagram/description/
 *
 * @author Taras Basiuk
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    // If string lengths don't match, they're not anagrams
    if (s.length != t.length) {
        return false;
    }

    // Cound the characters in s string
    let chars = new Map();
    for (let c of s) {
        if (!(c in chars)) {
            chars[c] = 1; // If c encountered for the first time initialize count at 1...
        } else {
            chars[c]++; // ... otherwise increment the count
        }
    }

    // Sbstract the counts of all the characters in t string
    for (let c of t) {

        // If there are no c left in chars (or there weren't any to begin with)
        if (!(c in chars) || chars[c] < 1) {
            return false; // Cannot be anagrams
        }

        chars[c]--; // Otherwise just increment the availability of c in chars
    }

    return true; // All good, anagrams indeed
};
