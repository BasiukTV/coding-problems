/**
 * Solution for https://leetcode.com/problems/non-overlapping-intervals/
 *
 * @author Taras Basiuk
 */
public class Solution {
    public int EraseOverlapIntervals(int[][] intervals) {

        // Sort intervals by their right edge
        Array.Sort(intervals, (a, b) => a[1] - b[1]);
        int non_overlaping = 1; // Say that first interval is non-overlapping
        
        // Keep track of current non-overlapping interval end
        int curr_end = intervals[0][1];

        // Iterate though other intervals
        for (int i = 1; i < intervals.Length; i++) {

            /**
             * If this interval begins after the current non-overlapping ends -
             * we found another non-overlapping interval, and should switch
             * over to it.
             */
            if (intervals[i][0] >= curr_end) {
                non_overlaping++;
                curr_end = intervals[i][1];
            }
        }

        // All but non-overlapping intervals should be removed
        return intervals.Length - non_overlaping;
    }
}
