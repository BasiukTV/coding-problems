/**
 * Solution for https://leetcode.com/problems/increasing-triplet-subsequence/
 *
 * @author Taras Basiuk
 */
function increasingTriplet(nums: number[]): boolean {

    // Keep track of first two numbers in the inequality triplet
    let first: number = 2**31;
    let second: number = 2**31;

    for (let n of nums) { // For every number if nums

        if (n <= first) { // If smaller first exists, update it
            /**
             * This can temporarely make first come after second, but the valid
             * first still exists, we just no longer track it.
             */
            first = n;
        } else if (n <= second) { // If smaller first exists, update it
            second = n;
        } else {
            // We found the third > second > first, and comes after them.
            return true;
        }
    }

    return false; // No valid first, second, third were found.
};
