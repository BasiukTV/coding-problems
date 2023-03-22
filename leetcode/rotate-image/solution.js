/**
 * Solution for https://leetcode.com/problems/rotate-image/
 *
 * @author Taras Basiuk
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    // What's the index of the center cell (or point between cells) of the matrix?
    const center = [(matrix.length - 1) / 2, (matrix.length - 1) / 2];

    // 90 degrees clockwise rotation matrix
    const rot = [[0, 1], [-1, 0]];

    // For every row and column in the top left quartile of the matrix
    for (let r = 0; r < Math.floor(matrix.length / 2); r++) {
        for (let c = 0; c < Math.ceil(matrix.length / 2); c++) {

            let val = matrix[r][c]; // current Value of the cell
            let dist = [r - center[0], c - center[1]]; // cell distance from the center vector

            // For 4 rotations
            for (let i = 0; i < 4; i++) {

                // Rotated distance to the new cell vector
                dist = [
                    (rot[0][0] * dist[0]) + (rot[0][1] * dist[1]),
                    (rot[1][0] * dist[0]) + (rot[1][1] * dist[1])
                ];

                // New row and column the distance vector is pointing to
                let nr = Math.ceil(center[0] + dist[0]);
                let nc = Math.ceil(center[1] + dist[1]);

                const tmp = matrix[nr][nc]; // Remamber old value
                matrix[nr][nc] = val; // Replace with the rotated value
                val = tmp; // Rotate old value to the next cell
            }
        }
    }
};
