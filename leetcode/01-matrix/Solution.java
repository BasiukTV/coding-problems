/**
 * Solution for https://leetcode.com/problems/01-matrix/
 *
 * @author Taras Basiuk
 */
class Solution {

    public int[][] updateMatrix(int[][] mat) {

        // Board row & colum size
        int r = mat.length;
        int c = mat[0].length;

        // Distances from a cell to a nearest zero on the board
        final int[][] dists = new int[r][c];

        // List of cells equidistant from any zeor
        List<Integer> same_dist = new LinkedList<>();
        int cur_dist = 0; // First distance is 0, i.e. zeros themselves

        // Traverse the whole boards one
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                // If enountered a zero, add it to same_dist
                if (mat[i][j] == 0) {
                    same_dist.add((i * c) + j);
                    dists[i][j] = 0; // Record dist to nearest 0 as 0
                } else {
                    // Otherwise the desitance to nearest zero is unknown yet
                    dists[i][j] = -1;
                }
            }
        }

        // Valid moves on the board
        int[][] moves = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

        // While same_dist is not empty for ever increasing distance
        while (!same_dist.isEmpty()) {

            // Container for the dist + 1 cells
            List<Integer> next_same_dist = new LinkedList<>();

            // For every cell in the same_dist list at some cur_dist
            for (final int cell_num : same_dist) {

                // Decode the cell row and column
                int cr = (int) cell_num / c;
                int cc = cell_num % c;

                // for every valid move
                for (final int[] move : moves) {
                    
                    // Which cell can we get to?
                    int ncr = cr + move[0];
                    int ncc = cc + move[1];

                    // Is that cell on the board and dist to a zero unknown?
                    if (ncr >= 0 && ncr < r && ncc >= 0 && ncc < c && dists[ncr][ncc] == -1) {
                        // If so, record its dist to zero as cur_dist + 1
                        dists[ncr][ncc] = cur_dist + 1;

                        // And add it to the next_same_dist list
                        next_same_dist.add((ncr * c) + ncc);
                    }
                }
            }

            // next_same_dist is now same_dist, and cur_dist is incrmented
            same_dist = next_same_dist;
            cur_dist++;
        }

        return dists;
    }
}
