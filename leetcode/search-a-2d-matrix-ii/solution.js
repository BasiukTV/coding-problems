/**
 * Solution for https://leetcode.com/problems/search-a-2d-matrix-ii
 *
 * @author Taras Basiuk
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let c = 0; // Column index

    // For every row
    for (let r = 0; r < matrix.length; r++) {

        // Did we land on the target cell?
        if (matrix[r][c] === target) {
            return true;
        }

        // Otherwise, which column direction should we be looking for our target?
        const dir = matrix[r][c] < target ? 1 : -1;

        // While there's still a point in looking in the same direction
        while (
            (matrix[r][c] < target && dir === 1) ||
            (matrix[r][c] > target && dir === -1)) {

            c += dir; // Move in said direction

            // If we ran off the board, step back, and break out the cycle
            if (c < 0 || c == matrix[0].length) {
                c -= dir;
                break;
            }

            // Did we find our target?
            if (matrix[r][c] === target) {
                return true;
            }
        }
    }

    return false; // Never found the target
};
