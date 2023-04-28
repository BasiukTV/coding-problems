/**
 * Solution for https://leetcode.com/problems/longest-palindromic-substring
 *
 * @author Taras Basiuk
 */
function longestPalindrome(s: string): string {

    // Strings shorter than 2 chracters are always palindromes 
    if (s.length < 2) {
        return s;
    }

    let mpssi: number = 0; // max palindromic substring (starting) index
    let mpsl: number = 1; // max palindromic substring length

    // We will iterate the string for the palindrome center candidates
    for (let i: number = 0; i < s.length; i++) {

        // check for odd length palindromes (center is a character)
        let j: number = 1; // will compare characters j characters away
        while (i - j >= 0 && i + j < s.length) { // while fits within string
            if (s[i - j] != s[i + j]) { // If characters don't match
                break; // not a palindrome
            }

            // Check if the currently observed palindrome length is max so far
            if (1 + (2 * j) > mpsl) {
                mpsl = 1 + (2 * j);
                mpssi = i - j;
            }

            j += 1; // expand palindrome candidate outward from the center
        }

        // check for even length palindrome (center is between characters)
        j = 1; // will compare characters j characters away
        while (i - j + 1 >= 0 && i + j < s.length) { // while fits within s
            if (s[i - j + 1] != s[i + j]) { // If characters don't match
                break; // not a palindrome
            }

            // Check if the currently observed palindrome length is max so far
            if (2 * j > mpsl) {
                mpsl = 2 * j;
                mpssi = i - j + 1;
            }

            j += 1; // expand palindrome candidate outward from the center
        }
    }

    // Extract the longest observed palindrome substring
    return s.substring(mpssi, mpssi + mpsl);
};
