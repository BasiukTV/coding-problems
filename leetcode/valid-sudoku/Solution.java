/**
 * Solution for https://leetcode.com/problems/valid-sudoku
 *
 * @author Taras Basiuk
 */
class Solution {
    public boolean isValidSudoku(char[][] board) {

        // Initialize the maps of sets for all rows, cols, and squars.
        final Map<Integer, Set<Character>> rows, cols, squares;
        rows = new HashMap<>();
        cols = new HashMap<>();
        squares = new HashMap<>();

        for (int i = 0; i < 9; i++) {
            rows.put(i, new HashSet<>());
            cols.put(i, new HashSet<>());
            squares.put(i, new HashSet<>());
        }

        // Traverse every cell on the board
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {

                char cell = board[r][c];
                if (cell == '.') { // Ignore empty cells
                    continue;
                }

                /**
                 * Check that the sets corresponding to current row, column and square
                 * don't have this cell's value.
                 */
                if (rows.get(r).contains(cell)) {
                    return false;
                }

                if (cols.get(c).contains(cell)) {
                    return false;
                }

                int sq = (r / 3) * 3 + (c / 3); // Figure out which square are we in
                if (squares.get(sq).contains(cell)) {
                    return false;
                }

                /**
                 * Update the sets corresponding to current row, column and square
                 * to include this cell's value.
                 */
                rows.get(r).add(cell);
                cols.get(c).add(cell);
                squares.get(sq).add(cell);
            }
        }

        return true; // Found nothing wronf with the sudoku
    }
}
