/**
 * Soution to the https://leetcode.com/problems/isomorphic-strings/
 *
 * @author Taras Basiuk
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    // If the strings are of different lenghts - they can't be isomorphic.
    if (s.length != t.length) {
        return false;
    }

    // Map of character replacements from string s to string t
    const char_repl = new Map();

    // Set of characters used as a replacement in string t 
    const mapped_to = new Set();

    // For every character in both strings
    for (var i = 0; i < s.length; i++) {

        // Which characters are we dealing with in each string?
        const s_char = s.charAt(i);
        const t_char = t.charAt(i);

        // If s_char has no replacement yet
        if (!char_repl.has(s_char)) {

            /*
                If t_char is already a replacement for another character,
                strings aren't isomorphic.
            */
            if (mapped_to.has(t_char)) {
                return false;
            }

            // Set t_char as a replacement for a s_char
            char_repl.set(s_char, t_char);

            // Record that t_char is laready used as a replacement for some character.
            mapped_to.add(t_char);
        } else {
            // Check that s_char was already replaced by t_char before ...
            if (char_repl.get(s_char) != t_char) {
                // ... otherwise strings are not isomorphic.
                return false;
            }
        }
    }

    // Found no isomorphism violations, so returning true.
    return true;
};
