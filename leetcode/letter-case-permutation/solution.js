/**
 * Solution for https://leetcode.com/problems/letter-case-permutation/
 *
 * @author Taras Basiuk
 *
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {

    // Find which changes can be made to the intial string
    const change_list = [];
    for (let i = 0; i < s.length; i++) {

        // If a character differs between lower and upper case - it's a letter 
        if (s[i].toUpperCase() !== s[i].toLowerCase()) {

            // Record the letter index and whether it's Uppercase now
            change_list.push([i, s[i] === s[i].toUpperCase()])
        }
    }

    // Initialize the list of permutations with the initial string
    let permutes = [s];

    // For every change we can make
    for (const [i, isUpper] of change_list) {

        // For every string already in permutes list
        const pl = permutes.length;
        for (let j = 0; j < pl; j++) {
            p = permutes[j];

            // Change the letter from lowercase to uppercase or vice versa...
            permutes.push( // ... and add new string to list of permutations
                p.slice(0, i) +
                (isUpper ? p[i].toLowerCase() : p[i].toUpperCase()) +
                p.slice(i + 1));
        }
    }

    return permutes; // Return all the permutations collected
};
