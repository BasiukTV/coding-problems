/**
 * Solution for https://leetcode.com/problems/number-of-closed-islands
 *
 * @author Taras Basiuk
 */
function closedIsland(grid: number[][]): number {
    let result: number = 0; // Number of closed islands found

    // Grid rows and columns
    const [r, c]: number[] = [grid.length, grid[0].length];
    
    // Moves available on the board
    const moves: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // Iterate over non-edge cells of the board
    for (let i: number = 1; i < r - 1; i++) {
        for (let j: number = 1; j < c - 1; j++) {

            // If new spot of land found
            if (grid[i][j] == 0) {
                let closed: boolean = true; // Track wether island is closed

                // We will paint the island over to know that it's not new
                const paint_over: number[][] = [[i, j]];
                grid[i][j] = 2; // Paint over the initial tile of the island

                // While there's still painting to be done
                while (paint_over.length > 0) {
                    const cell: number[] = paint_over.pop(); // old i, old j
                    
                    // For every move possible
                    for (let m of moves) {
                        const ni: number = cell[0] + m[0]; // new i
                        const nj: number = cell[1] + m[1]; // new j

                        // If new cell is off the board, the siland is not closed
                        if (ni < 0 || ni == r || nj < 0 || nj == c) {
                            closed = false;
                        } else {
                            // If encountered more land, need to proceed painting
                            if (grid[ni][nj] == 0) {
                                paint_over.push([ni, nj]); // Add to queue
                                grid[ni][nj] = 2; // Paint over
                            }
                        }
                    }
                }

                // If the island remained closed after painting, increment result
                if (closed) {
                    result++;
                }
            }
        }
    }

    return result;
};
