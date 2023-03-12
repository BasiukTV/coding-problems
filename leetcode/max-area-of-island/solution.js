/**
 * Solution for https://leetcode.com/problems/max-area-of-island/
 *
 * @author Taras Basiuk
 *
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    let biggest = 0;

    // Grid size
    let r = grid.length;
    let c = grid[0].length;

    // Available moves on the board
    let moves = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    // Traverse the whole board
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] != 1) {
                continue;
            }

            // We encountered a new island, we need to paint it over while recording its area
            let area = 1; // Starting area
            grid[i][j] = 0;

            let stack = [[i, j]]; // Working stack

            // While there's anything on the work stack
            while (stack.length > 0) {
                let [cr, cc] = stack.pop(); // Retrieve the current cell

                for (let [mra, mca] of moves) { // For every move row and column asjustment
                    let [nr, nc] = [cr + mca, cc + mra]; // What the next cell will be?

                    // If the cell is on the board and belongs to the island
                    if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 1) {
                        grid[nr][nc] = 0; // Paint the cell over
                        area++; // Increment the island area
                        stack.push([nr, nc]); // Add the new cells to the working stack
                    }
                }
            }

            // Was the current island largest so far? Record its area if so.
            biggest = area > biggest ? area : biggest;
        }
    }

    return biggest; // Return the largest island are ever encountered.
};
