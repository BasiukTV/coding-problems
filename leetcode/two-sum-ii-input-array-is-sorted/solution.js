/**
 * Solution for https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Can be further optimized, but I don't really care to.
 *
 * @author Taras Basiuk
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    // Initializa the first and second numbers in 0-indexed numbers array
    var first = 0;
    var second = 1;

    // First number can be anything other than the last number
    while (first < numbers.length - 1) {

        // Did we happen to guess the combination by incrementing first?
        if (numbers[first] + numbers[second] == target) {
            // Return the indexes in the 1-indexed form
            return [first + 1, second + 1];
        }

        // Which way the second number should be searched in?
        var search_dir = numbers[first] + numbers[second] < target ? 1 : -1;

        while (true) {

            // Will further search keep the second number in the valida range?
            if (second + search_dir > first && second + search_dir < numbers.length) {
                second = second + search_dir;

                // Did we happen to guess the combination by changing second?
                if (numbers[first] + numbers[second] == target) {
                    // Return the indexes in the 1-indexed form
                    return [first + 1, second + 1];
                }

                // Is there no point of incrementing second any further?
                if (search_dir == 1 && numbers[first] + numbers[second] > target) {
                    break;
                }

                //  Is there no point of decrementing second any further?
                if (search_dir == -1 && numbers[first] + numbers[second] < target) {
                    break;
                }
            } else {
                break; // If not, we should change the first number instead.
            }
        }

        first++; // Increment the first

        // Did the first run over the second?
        if (first == second) {
            second++;
        }
    }
};
