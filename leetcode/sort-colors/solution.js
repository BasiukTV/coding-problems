/**
 * Solution for https://leetcode.com/problems/sort-colors/
 *
 * @author Taras Basiuk
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    // Keep track of the last known 0 and first known 2 in the array
    let last0 = -1, first2 = nums.length;

    // Starting from the begining of the array and until we hit the 2s
    for (let i = 0; i < first2; i++) {

        // If a zero encountered
        if (nums[i] == 0) {

            // Put it after the last known 0
            last0++;
            nums[last0] = 0;

            // If any 1s were encountered (last zero is not current index), recover erased 1
            if (last0 < i) {
                nums[i] = 1;
            }

            continue;
        }

        // If a 2 was encountered
        if (nums[i] == 2) {

            // Place the number preceding the first 2 into current cell
            first2--;
            nums[i] = nums[first2];

            // Place 2 into the new first 2 cell
            nums[first2] = 2;

            // Reconsider the number in the current cell once more
            i--;
        }
    }
};
