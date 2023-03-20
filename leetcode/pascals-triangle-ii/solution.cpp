/**
 * Solution https://leetcode.com/problems/pascals-triangle-ii
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    vector<int> getRow(int rowIndex) {

        // Zero row will only have one 1 in it
        vector<int> row{1};

        // Starting from the second row, until rowIndex
        for (int i = 1; i <= rowIndex; i++) {

            // Init a new row with first 1 in it
            vector<int> new_row{1};

            // Starting with the second number in the row (if there are at least three)...
            for (int j = 1; j < i; j++) {
                //... the number equals to the sum of two numbers above it
                new_row.push_back(row[j] + row[j - 1]);
            }

            // Add the last 1 to the new row
            new_row.push_back(1);
            row = new_row; // New row is not the old row for the next iteration
        }

        return row; // Return the targer row
    }
};
