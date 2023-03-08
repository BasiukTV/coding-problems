/**
 * Solution for https://leetcode.com/problems/search-a-2d-matrix/description/
 *
 * @author Taras Basiuk
 */
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {

        // Extract row and column sizes of the matrix
        final int r = matrix.length;
        final int c = matrix[0].length;

        // Initialize the  search range edges
        int left = 0;
        int right = (r * c) - 1;

        while (true) {

            // Calculate the guess index and convert it into row and column position
            int guess = (left + right) / 2;
            int gr = guess / c;
            int gc = guess % c;

            // If our guess matches the target we're done
            if (matrix[gr][gc] == target) {
                return true;
            }

            // If the search range collapsed ot one cell, we're done searching
            if (left == right) {
                break;
            }

            // If our guess is larger then the target...
            if (matrix[gr][gc] > target) {
                // ... we should next search in the left half of the search range.
                right = guess;
            } else {
                // Otherwise we'll search in the left half of the range...
                if (right - left > 1) {
                    left = guess;
                } else {
                    left++; // If the search range is too small, just increment the left edge.
                }
            }
        }

        return false; // We weren't able to findthe target
    }
}
