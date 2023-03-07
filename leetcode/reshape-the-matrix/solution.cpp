/**
 * Solution to https://leetcode.com/problems/reshape-the-matrix/
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {

        // Check that the table sizes are actually compatible.
        int old_r = mat.size(); // Rows in the old table
        int old_c = mat[0].size(); // Columns in the old table
        if (old_r * old_c != r * c) {
            return mat;
        }

        // Prepare the rows in the reshabed table
        vector<vector<int>> reshaped = {};
        reshaped.reserve(r);

        int count = 0; // Count inserted elements

        for (int i = 0; i < r; i++) { // for every row in the new table

            // Prepare the columns of the current row
            vector<int> new_row = {};
            reshaped.push_back(new_row);
            reshaped.back().reserve(c);

            for (int j = 0; j < c; j++) { // for every column in the new table

                // Calcaulate the row and column in the old table.
                int old_ri = (int)count / old_c;
                int old_ci = count % old_c;

                // Copy things over and increment the counter.
                reshaped.back().push_back(mat[old_ri][old_ci]);
                count++;
            }
        }

        return reshaped; // Return the reshaped table.
    }
};
