/**
 * Solution for https://leetcode.com/problems/find-all-anagrams-in-a-string/
 *
 * @author Taras Basiuk
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    // Container for the anagram starting indexes in s
    const anagrams = [];

    // If p is longer than s, no anagrams can be made
    if (p.length > s.length) {
        return anagrams;
    }

    // Sliding diff between characters in p and particular slice of s 
    const diff = new Map();

    // For every character needed in p add it to the diff
    for (let i = 0; i < p.length; i++) {
        if (!diff.has(p[i])) {
            diff.set(p[i], 1);
        } else {
            diff.set(p[i], diff.get(p[i]) + 1);
        }
    }

    // For every character in initial s window, substract them from diff
    for (let i = 0; i < p.length; i++) {
        if (!diff.has(s[i])) {
            diff.set(s[i], -1);
        } else {
            diff.set(s[i], diff.get(s[i]) - 1);

            // If count of needed character reached 0, remove that key from map
            if (diff.get(s[i]) === 0) {
                diff.delete(s[i])
            }
        }
    }

    // if there are no keys in the diff map, first anagram is found at 0 index
    if (diff.size == 0) {
        anagrams.push(0);
    }

    // Now slide the window over s
    for (let i = 1; i <= s.length - p.length; i++) {
        
        // Add the characted the window slid off back into the diff
        if (!diff.has(s[i - 1])) {
            diff.set(s[i - 1], 1);
        } else {
            diff.set(s[i - 1], diff.get(s[i - 1]) + 1);
        }

        // If that character was never needed, remove the corresponding key
        if (diff.get(s[i - 1]) === 0) {
            diff.delete(s[i - 1])
        }

        // Remove the characted the window slid on from the diff
        if (!diff.has(s[i + p.length - 1])) {
            diff.set(s[i + p.length - 1], -1);
        } else {
            diff.set(s[i + p.length - 1], diff.get(s[i + p.length - 1]) - 1);
        }

        // If we now have enough of that character in the diff, remove the key
        if (diff.get(s[i + p.length - 1]) === 0) {
            diff.delete(s[i + p.length - 1])
        }

        // If there are no keys left in diff, we found another anagram
        if (diff.size == 0) {
            anagrams.push(i);
        }
    }

    return anagrams; // Return all found anagrams
};
