/**
 * Solution for the https://leetcode.com/problems/two-sum/
 *
 * @authro Taras Basiuk
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // Map ot the numbers available as a first target sum component to their indexes.
    const firsts = new Map();

    // For ever number in nums
    for (var i = 0; i < nums.length; i++) {

        // If there's already a fitting first component of the target sum available...
        if (firsts.has(target - nums[i])) {
            // ... retunr the indexes of the first component and the current index.
            return [firsts.get(target - nums[i]), i]
        }

        // Otherwise just record current number as a candidate for the first component.
        firsts.set(nums[i], i);
    }
};
