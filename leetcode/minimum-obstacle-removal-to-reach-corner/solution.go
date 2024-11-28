/*
 * Solution for - minimum-obstacle-removal-to-reach-corner
 *
 * Approach to the solution is a BFS where the no-obstacle cell has the edge cost of
 * 0, whereas the obstance cell has the edge cost of 1.
 */
func minimumObstacles(grid [][]int) int {
    m, n := len(grid), len(grid[0])

    // Array of shortest distances from [0, 0] cell to [i, j] cell.
    distances := make([][]int, m)
    for i := 0; i < m; i++ {
        distances[i] = make([]int, n)
        for j := 0; j < n; j++ {
            distances[i][j] = m * n
        }
    }
    distances[0][0] = 0

    // Allowed search directions
    dirs := [][2]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

    // Search Deque used by the BFS
    deque := list.New()
    deque.PushFront([2]int{0, 0})
    for deque.Len() > 0 {
        cell := deque.Remove(deque.Front()).([2]int)
        r, c := cell[0], cell[1] // current cell row and column

        for _, dir := range dirs { // for every allowed direction
            nr, nc := r + dir[0], c + dir[1] // next cell row and column

            if nr >= 0 && nr < m && nc >= 0 && nc < n { // If within grid bounds
                newDist := distances[r][c] + grid[nr][nc] // distance to the next cell
                if newDist < distances[nr][nc] { // If new smallest distance found
                    distances[nr][nc] = newDist // record it
                    if grid[nr][nc] == 0 { // If cell is empty, jump in fron of the line
                        deque.PushFront([2]int{nr, nc})
                    } else { // otherwise go to back of the line
                        deque.PushBack([2]int{nr, nc})
                    }
                }
            }
        }
    }

    return distances[m - 1][n - 1]
}
