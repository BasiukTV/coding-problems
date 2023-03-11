/**
 * Solution for https://leetcode.com/problems/flood-fill/
 *
 * @author Taras Basiuk
 */
class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {

        // Check if new color is the same as old color. If so, we don't have to do anything.
        final int old_color = image[sr][sc];
        if (old_color == color) {
            return image;
        }

        // Record the size of the image and the flooding moves
        final int r = image.length;
        final int c = image[0].length;
        final int[][] moves = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        image[sr][sc] = color; // Repaint the initial cell

        // Create the work queue and put the first cell in the queue
        final LinkedList<int[]> queue = new LinkedList<>();
        final int[] start_cell = {sr, sc};
        queue.addFirst(start_cell);

        // As long as there's anything in the work queue
        while (queue.size() > 0) {
            int[] cell = queue.removeLast(); // Retrieve the current flooded cell

            // For every possible flooding move
            for (final int[] m : moves) {

                // Which new cell row and column this move will bring us?
                int nr = cell[0] + m[0];
                int nc = cell[1] + m[1];

                // If the new cell is within image bounds and of the old color
                if (nr >= 0 && nr < r && nc >= 0 && nc < c && image[nr][nc] == old_color) {
                    image[nr][nc] = color; // Repaint it into the new color

                    // Add the new cell to the working queue
                    final int[] new_cell = {nr, nc};
                    queue.addFirst(new_cell);
                }
            }
        }

        return image; // All done, rerun the modified image
    }
}
