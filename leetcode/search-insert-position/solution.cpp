/**
 * Solution for https://leetcode.com/problems/search-insert-position/
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {

        // Left and right edges of the search range
        int left = 0;
        int right = nums.size() - 1;

        while (true) {

            // Make a guess in the middle of the search range
            int guess = (int) (left + right) / 2;

            // If guess hits the target, return it
            if (nums[guess] == target) {
                return guess;
            }

            /**
             * If search range collapsed to a single cell, there's no point to
             * search further. Depending on if the target is larger or smaller
             * of the last guess, return either guess index or the next cell.
             */
            if (left == right) {
                return target > nums[guess] ? guess + 1 : guess;
            }

            /**
             * If guess is arger than target, we should look for target
             * in the left half of the search range. So right edge is moved
             * onto the current guess.
             */
            if (nums[guess] > target) {
                right = guess;
            } else {
                // Otherwise look in the right half of the search range...
                if (right - left > 1) {
                    left = guess;
                } else {
                    // ... or just increment the left edge if range is too short
                    left++;
                }
            }
        }
    }
};
