/**
 * @param {number[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let islands = 0;

    // Grid size
    let r = grid.length;
    let c = grid[0].length;

    // Available moves on the grid
    let moves = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    // Tracerse the entirety of the greed
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] != 1) {
                continue;
            }

            // New island encountered, now we need to paint it over
            islands++;
            grid[i][j] = 0; // Start painting it over
            let stack = [[i, j]]; // initialize the work stack

            // While there's something in the stack
            while (stack.length > 0) {
                let [cr, cc] = stack.pop(); // Get the current cell

                for (let [mra, mca] of moves) { // For every move row and column adjustement
                    let [nr, nc] = [cr + mca, cc + mra]; // What the new row and column is?

                    // If new row and column is on the board and a part of the island
                    if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 1) {
                        grid[nr][nc] = 0; // Paint it over
                        stack.push([nr, nc]); // Add it to the work stack
                    }
                }
            }
        }
    }

    return islands;
};
