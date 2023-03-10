/**
 * Solution for https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * @author Taras Basiuk
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    // Containers for window character counts and character (only) occurance
    let char_counts = new Map();
    let char_occurs = new Map();

    let longest = 0; // Longest window of unique characters so far
    let window_start_i = 0; // Starting index of said window

    // For every character in the string
    for (let i = 0; i < s.length; i++) {
        let ci = s[i]; // Current character

        // If the character was not encountered before, prepare the maps for it
        if (!char_counts.has(ci)) {
            char_counts.set(ci, 0);
            char_occurs.set(ci, -1);
        }

        // If the character not currently in the window
        if (char_counts.get(ci) == 0) {
            char_counts.set(ci, 1); // Update the character count
            char_occurs.set(ci, i); // Record where the character occured

            // Check if the window size is largest so far
            if ((i - window_start_i) + 1 > longest) {
                longest = (i - window_start_i) + 1;
            }
        } else {
            // if the charcater is currently already in the window

            // Record where in the window character occurs
            let tmp = char_occurs.get(ci);

            /** 
              * From the current start of the window, up until where the 
              * character occured in the window before, we will eject characters
              * from the window.
              */
            for (let j = window_start_i; j < tmp; j++) {
                let cj = s[j]; // Retrieve the character to be ejected
                char_counts.set(cj, 0); // Eject the character
            }

            char_occurs.set(ci, i); // Update the offending character occurance
            window_start_i = tmp + 1; // Update the new start of the window
        }
    }

    return longest; // What was the longest window ever encountered
};
