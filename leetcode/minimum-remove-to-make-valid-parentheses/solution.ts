/**
 * Solution for https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses
 *
 * @author Taras Basiuk
 */
function minRemoveToMakeValid(s: string): string {
    
    // Make one pass over the input string dropping every ')' that came without preceding '('
    const pass1: string[] = []; // Store remaining characters here
    let bal: number = 0; // Count of unmatched '('

    for (let ci: number = 0; ci < s.length; ci++) {
        const c: string = s[ci];

        if (c === "(") {
            bal++; // Encountered '(' increment bal
        }

        if (c === ")") {
            if (bal === 0) {
                continue; // There was not a preceding '(', drop this ')'
            } else {
                bal--; // Encountered ')' that matches preceding '(', decrement bal
            }
        }

        pass1.push(c); // Retain the undropped character
    }

    // Make backwards pass on pass1 dropping every '(' that came without preceding ')'
    const pass2: string[] = [];
    bal = 0;
    for (let ci: number = pass1.length - 1; ci >= 0; ci--) {
        const c: string = pass1[ci];

        if (c === ")") {
            bal++; // Encountered ')' increment bal
        }

        if (c === "(") {
            if (bal === 0) {
                continue; // There was not a preceding ')', drop this '('
            } else {
                bal--; // Encountered '(' that matches preceding ')', decrement bal
            }
        }

        pass2.push(c); // Retain the undropped character
    }

    pass2.reverse(); // Reverse pass2 as we were traversing pass1 backwards
    return pass2.join('');
};
