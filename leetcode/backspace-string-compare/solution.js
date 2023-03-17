/**
 * Solution for https://leetcode.com/problems/backspace-string-compare/
 *
 * @author Taras Basiuk
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

    // Just clear the strings from the backspaces and compare them.
    return backSpaceString(s) === backSpaceString(t);
};

var backSpaceString = function(s) {

    // We'll be adding remaining characters to an array one by one
    let result = [];
    
    // Traverse the string backwards
    let i = s.length - 1;
    while (i >= 0) {

        // If the current character is a backspace
        sc = s[i];
        if (sc == '#') {

            // We need to ignore at least to characters in the string
            let goBack = 2;
            while (goBack > 0) {
                i--; // Go back one

                // If ran out of the string break out from the loop
                if (i < 0) {
                    sc = '';
                    break;
                }

                // If the current char is backspace, we'll need to go back more
                sc = s[i];
                goBack -= (sc != '#') ? 1 : -1;
            }
        }

        // Add cleared up character to the array
        result.push(sc);
        i--;
    }

    // Convert the array of cleared chars to the string and return it
    return result.join('');
}
