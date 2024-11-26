/*
 * Solution for - https://leetcode.com/problems/find-champion-ii
 *
 * The idea to the solution is to find all the teams that never appear on the left
 * side on an edge. If such team is only one - that's our champion.
 */
func findChampion(n int, edges [][]int) int {

    // unbeaten is a set of teams that never appear on the right side of an edge
    unbeaten := make(map[int]bool, n)
    for i := 0; i < n; i++ {
        unbeaten[i] = true // Everyone starts unbeaten.
    }

    for _, e := range edges { // For every edge...
        _, exist := unbeaten[e[1]]
        if exist { // If a team on the right side on an adge is still unbeated ...
            delete(unbeaten, e[1]) // ... it's now beaten.
        }
    }

    if len(unbeaten) == 1 { // If there's only one unbeaten team remains... 
        for u, _ := range unbeaten {
            return u        // ... return it ...
        }
    }

    return -1               // ... otherwise - there are no champions.
}
