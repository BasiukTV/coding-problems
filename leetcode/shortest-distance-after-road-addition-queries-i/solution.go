/*
 * Solution for - https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i
 *
 * Approach to the solution is iteratively updating the adjacency matrix (graph) and
 * doing BFS search from first to last city.
 *
 * This is not an optimal solution, but it's fast enough for the challenge.
 */
func shortestDistanceAfterQueries(n int, queries [][]int) []int {

    // Initialize the graph (adjacency matrix)
    graph := make([][]int, n)
    for i := 0; i < n-1; i++ {
        graph[i] = append(graph[i], i+1) // city i is adjacent to i + 1
    }

    answers := make([]int, len(queries))
    for idx, road := range queries {

        // Add new road
        src, dest := road[0], road[1]
        graph[src] = append(graph[src], dest)

        // BFS to calculate the shortest distance to city n - 1
        queue := []SearchNode{{City: 0, Dist: 0}} // Queue initialized with first city

        // Set of already visited cities during the search
        visited := make(map[int]bool)
        visited[0] = true

        minDist := -1
        for len(queue) > 0 {

            // Pop the search node off the queue
            sn := queue[0]
            queue = queue[1:]

            // If we've reached the destination, record distance and break
            if sn.City == n-1 {
                minDist = sn.Dist
                break
            }

            for _, nextDest := range graph[sn.City] {

                // Searc the next cities
                if !visited[nextDest] {
                    visited[nextDest] = true
                    queue = append(queue, SearchNode{City: nextDest, Dist: sn.Dist + 1})
                }
            }
        }

        answers[idx] = minDist
    }

    return answers
}

type SearchNode struct {
    City int
    Dist int
}
