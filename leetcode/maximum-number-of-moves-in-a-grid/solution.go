/*
 * Solution for - https://leetcode.com/problems/maximum-number-of-moves-in-a-grid
 *
 * Approach to the solution is to iterate over the table columns starting from the
 * leftmost. For each column we iterate over the rows and checking wether the
 * current cell opens access to any rows in the next column. If no rows in the next
 * column are accessible we stop and return the column index.
 */
func maxMoves(grid [][]int) int {
    rows := len(grid)
    cols := len(grid[0])

    // All the rows of the first columns are accessible
    accessibleRows := make([]bool, rows)
    for i := 0; i < rows; i++ {
        accessibleRows[i] = true
    }

    // Iterate over the columns
    c := 0
    for c < cols - 1 {
        // All rows of the next column are inaccessible by default
        nextAccessibleRows := make([]bool, rows)

        // Iterate over the rows
        for r := 0; r < rows; r++ {
    
            // If the current row of the current column is inaccessible it cannot
            // unlock the rows in the next column. Let's skip it.
            if !accessibleRows[r] {
                continue
            }

            // Check if we can access upper row in the next column
            if r > 0 && grid[r][c] < grid[r - 1][c + 1] {
                nextAccessibleRows[r - 1] = true
            }

            // Check if we can access the same row in the next column
            if grid[r][c] < grid[r][c + 1] {
                nextAccessibleRows[r] = true
            }

            // Check if we can access the lower row in the next column
            if r < rows - 1 && grid[r][c] < grid[r + 1][c + 1] {
                nextAccessibleRows[r + 1] = true
            }
        }

        // Check if some row in the next column is accessible...
        someAccessible := false
        for r := 0; r < rows; r++ {
            if nextAccessibleRows[r] {
                someAccessible = true
                break
            }
        }

        // If not - we're done
        if !someAccessible {
            break
        }

        // For the next iteration, next column is current column
        accessibleRows = nextAccessibleRows
        c++
    }

    return c // The column where we stopeed looking
}
