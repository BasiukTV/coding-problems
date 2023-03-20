/**
 * Solution for https://leetcode.com/problems/merge-intervals/
 *
 * @author Taras Basiuk
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const merged = [];

    // Sort the intervals by their starting point
    intervals.sort(function(a, b){return a[0] - b[0]});

    // For every range in sorted intervals
    for (let i = 0; i < intervals.length; i++) {

        // First, assume that we will not merge with enother range
        const start = intervals[i][0];
        let end = intervals[i][1];

        // Then, check if we should merge with subsequent ranges
        for (let j = i + 1; j < intervals.length; j++) {

            // If the current end, doesn't touch next range begining...
            if (end < intervals[j][0]) {
                // No further merging will take place.
                break;
            }

            // Updated end will be either current end, or the end of this range
            end = Math.max(end, intervals[j][1]);

            // j interval is already taken care of, outer look skips it now
            i++;
        }

        // Add possibly merged interval to the result
        merged.push([start, end]);
    }

    return merged;
};
