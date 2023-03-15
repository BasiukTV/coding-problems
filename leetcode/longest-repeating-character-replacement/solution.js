/**
 * Solution for https://leetcode.com/problems/longest-repeating-character-replacement
 * Idea of the solution is that valid window is of k + most common character count size.
 *
 * @author Taras Basiuk
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    // Trivial case check
    if (k == s) {
        return k;
    }

    const window = new Map(); // Map of characters in the window and their counts
    let mccc = 0; // Most common character count
    let wli = -1, wri = -1; // Window left index and window right index

    // Iterate the left window index
    while (wli < s.length - k - mccc) {
        wli++; // Increment the left window index

        // Remove the previous left window edge character from the window
        if (wli > 0) {
            window.set(s[wli - 1], window.get(s[wli - 1]) - 1);
        }

        // Right window edge extends k + mccc + 1 in length, or to the end of the string.
        while ((wri - wli) + 1 < k + mccc + 1 && wri < s.length) {
            wri++; // Increment the right window index

            // Add the new character to the window?
            if (!window.has(s[wri])) {
                window.set(s[wri], 1);
            } else {
                window.set(s[wri], window.get(s[wri]) + 1);
            }

            // Did the new character increase the mccc?
            mccc = window.get(s[wri]) > mccc ? window.get(s[wri]) : mccc;
        }
    }

    // return the k + mccc window size, unless longer than the string itself
    return (k + mccc) > s.length ? s.length : k + mccc;
};
