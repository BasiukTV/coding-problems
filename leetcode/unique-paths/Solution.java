/**
 * Solution for https://leetcode.com/problems/unique-paths/
 *
 * @author Taras Basiuk
 */
class Solution {

    // Border size
    private int rows;
    private int cols;

    // Cache for how many ways there are to get to a particular cell
    private final Map<Integer, Integer> cache = new HashMap<>();

    // Recursive methof for filling up the cache up to (r, c) cell.
    private int fillCache(int r, int c) {

        // If the cache doesn't have the number of ways for this cell yet...
        if (!cache.containsKey((r * cols) + c)) {

            // ...it equals to sum of ways to get to the right and bottom cell
            cache.put((r * cols) + c,
                (r + 1 < rows ? fillCache(r + 1, c) : 0) + 
                (c + 1 < cols ? fillCache(r, c + 1) : 0));
        }

        // Retieve the value for our cell from the cache
        return cache.get((r * cols) + c);
    }

    public int uniquePaths(int m, int n) {

        // Record the needed coard size
        rows = m;
        cols = n;

        /**
         * Initialize the cache by setting the number of ways to get to 
         * goal cell from the goal cell to 1.
         */
        cache.put((m * n) - 1, 1);
        fillCache(0, 0); // Fill the cache up to the (0, 0) cell

        return cache.get(0); // Retrieve the value for the initial cell
    }
}
