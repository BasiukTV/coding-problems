/**
 * Solution for https://leetcode.com/problems/successful-pairs-of-spells-and-potions
 *
 * @author Taras Basiuk
 */
function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const result: number[] = []; // Results container

    // Sort the potions in the descending order of their strength
    potions = potions.sort((a, b) => b - a);
    
    // Record the potion strengths and their indexes in the input array 
    let spells_ind: number[][] = [];
    for (let i: number = 0; i < spells.length; i++) {
        spells_ind.push([spells[i], i]);
    }

    // Sort the spells in the descending order of their strength
    spells_ind = spells_ind.sort((a, b) => b[0] - a[0]);

    // Index of the potion that is strong enough to be succesfull
    let str_pi: number = potions.length - 1;
    for (let s of spells_ind) { // For every spell

        // Calculate the minimum strength of potion that will succeed
        const min_str: number = Math.ceil(success / s[0]);

        // Adjust the str_pi for the current spell
        while (str_pi > -1 && potions[str_pi] < min_str) {
            str_pi--;
        }

        // All the potions at and below str_pi will be strong enough
        result[s[1]] = str_pi + 1;
    }

    return result;
};
