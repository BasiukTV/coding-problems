/**
 * Solution to the https://leetcode.com/problems/merge-sorted-array/
 *
 * @author Taras Basiuk
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    // Indexes of largest numbers in the first and the second array no yet merged in.
    var lrg1_i = m - 1;
    var lrg2_i = n - 1;

    // Starting from the back of resulting merged array, iterate to the front.
    for (var i = m + n - 1; i >= 0; i--) {

        // By default, we'll take the largest unmerged number from the first array...
        var take_from_1 = true;

        // ...unless we already merged in all the numbers from the first array...
        if (lrg1_i < 0) {
            take_from_1 = false;
        } else {
            // ...or, unless the largest number from the second array (exists and) is larger.
            if (lrg2_i >= 0 && nums1[lrg1_i] < nums2[lrg2_i]) {
                take_from_1 = false;
            }
        }

        // Fill in the current spot in the final array based on the above decision.
        nums1[i] = take_from_1 ? nums1[lrg1_i] : nums2[lrg2_i];

        // Depending on which array element was used, decrement the corresponding index.
        if (take_from_1) {
            lrg1_i--;
        } else {
            lrg2_i--;
        }
    }
};
