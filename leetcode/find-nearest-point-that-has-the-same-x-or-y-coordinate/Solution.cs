/**
 * Solution for https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate
 *
 * @author Taras Basiuk
 */
public class Solution {
    public int NearestValidPoint(int x, int y, int[][] points) {

        // Keep track of the shortest distance to the point and its index
        int shortest_val = 20001;
        int shortest_i = -1;

        // iterate through every point
        for (int i = 0; i < points.Length; i++) {
            int[] p = points[i];

            // Check if the point has x or y coordinate and is the closest one so far
            if ((p[0] == x || p[1] == y) && 
                Math.Abs(p[0] - x) + Math.Abs(p[1] - y) < shortest_val) {

                    // Update the closest point trackers
                    shortest_val = Math.Abs(p[0] - x) + Math.Abs(p[1] - y);
                    shortest_i = i;
            }
        }

        return shortest_i; // Return the closest point, if found
    }
}
