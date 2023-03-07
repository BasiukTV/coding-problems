/**
 * Solution for the https://leetcode.com/problems/binary-search/
 *
 * @author Taras Basiuk
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    // Set the initial range of the search
    var left = 0;
    var right = nums.length - 1;

    // Guess is in the middle of the left and right range of the search
    var guess = Math.floor((left + right) / 2);

    while (true) {

        // If we guessed the target return the guess index
        if (nums[guess] == target) {
            return guess;
        }

        // if edges of the search collapsed to the same index, target is not in our array
        if (left == right) {
            return -1;
        }

        // If the guees is samller than the target...
        if (nums[guess] < target) {
            // Set left edge of the range to guess, as the target can only be in the right half
            left = guess;
        } else {
            right = guess; // Look in the left half of the range otherwise
        }

        // See where the new guess would land
        var new_guess = Math.floor((left + right) / 2);
        if (guess == new_guess) { // If it doesn't budge due to integer division...
            guess++; // Increment it manually
            left = right; // And make sure this is our last guess
        } else {
            // If new guess is different from the old, use it as is
            guess = new_guess;
        }
    }
};
