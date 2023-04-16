/**
 * Solution for https://leetcode.com/problems/where-will-the-ball-fall
 *
 * @author Taras Basiuk
 */
public class Solution {
    public int[] FindBall(int[][] grid) {
        int[] result = new int[grid[0].Length]; // Result container

        // For evere column of the box
        for (int c = 0; c < result.Length; c++) {
    
            int i = c; // Ball column as it descents down the board
            for (int r = 0; r < grid.Length; r++) {

                int slide = grid[r][i]; // Where will the ball slide

                // Will it slide off the board or into a 'V' slide?
                if (i + slide < 0 ||
                    i + slide >= result.Length ||
                    grid[r][i + slide] == -slide) {
                        i = -1; // If so, we're done with this ball
                        break;
                }

                i += slide; // Otherwise slide the ball
            }

            result[c] = i; // record the last column of the ball
        }

        return result;
    }
}
