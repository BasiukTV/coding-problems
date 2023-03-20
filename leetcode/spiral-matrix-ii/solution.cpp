/**
 * Solution for https://leetcode.com/problems/spiral-matrix-ii/
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {

        // Populate the matrix with 0 values
        vector<vector<int>> matrix;
        for (int i = 0; i < n; i++) { // Make n rows
            vector<int> row;
            row.assign(n, 0); // Every row has n zeros

            matrix.push_back(row);
        }

        // Size of the matrix that will shrink as we fill up the rows and columns
        int min_row = 0, min_col = 0, max_row = n - 1, max_col = n - 1;

        // Directions we will be moving untill we finish filling up another row or column
        vector<pair<int, int>> dirs = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int di = 0; // Current direction index

        // How we will change min_ro, min_col, max_row, max_col after finishing row or column
        vector<vector<int>> shrink = {
            {1, 0, 0, 0}, {0, 0, 0, -1}, {0, 0, -1, 0}, {0, 1, 0, 0}};

        // Current row and column
        int r, c;
        r = c = 0;

        for (int i = 1; i <= n * n; i++) { // For every number

            matrix[r][c] = i; // Right down the number in the matrix

            // What the next row and column will be if we keep moving in the same direction?
            int nr = r + dirs[di % 4].first;
            int nc = c + dirs[di % 4].second;

            // If we won't stay within the defined bounds
            if (nr < min_row || nr > max_row || nc < min_col || nc > max_col) {

                // Update the boundaries
                min_row += shrink[di % 4][0];
                min_col += shrink[di % 4][1];
                max_row += shrink[di % 4][2];
                max_col += shrink[di % 4][3];

                di++; // Change the direction

                // Update the next row and column
                nr = r + dirs[di % 4].first;
                nc = c + dirs[di % 4].second;
            }

            // Update the row and column for the next number
            r = nr, c = nc;
        }

        return matrix; // Return the filled up matrix
    }
};
