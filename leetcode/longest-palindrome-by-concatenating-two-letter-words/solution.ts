/**
 * Solution for https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
 *
 * @author Taras Basiuk
 */
function longestPalindrome(words: string[]): number {

    // Containter for double letter words one of which can be use in the middle
    const single: Set<string> = new Set();

    // Containter for words that can match current to add on left and right 
    const matches: Map<string, number> = new Map();

    let result: number = 0;
    for (const w of words) { // For every word
        if (w[0] == w[1]) { // If the word is double-letter word, like 'bb'
            if (!single.has(w)) { // If it wasn't encountered before
                single.add(w); // Just record it
            } else { // If it was encountered before
                single.delete(w); // use both words
                result += 4; // to add on the left and right of the palindrome
            }
        } else { // If the word is not double-letter
            const match: string = w[1] + w[0]; // What's the match of this word?
            if (matches.get(match) > 0) { // If match is present
                matches.set(match, matches.get(match) - 1); // use both words
                result += 4; // to add on the left and right edges
            } else {
                // If there's no match, increment the occurence of the word.
                const prevEnc : boolean = matches.get(w) !== undefined;
                matches.set(w, 1 + (prevEnc ? matches.get(w) : 0));
            }
        }
    }

    // If an unmatched double letter word remained, use it in the middle
    if (single.size > 0) {
        result+= 2;
    }

    return result;
};
