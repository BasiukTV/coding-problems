/*
 * Solution for https://leetcode.com/problems/longest-square-streak-in-an-array
 *
 * Approach to the solution it to place all the numbers into a set. Then sort them
 * and start iterating through them. For each number, check if its square is in the
 * set, and then its square, and then its square, etc. Keep track of longest streak.
 */
func longestSquareStreak(nums []int) int {

    // Put all the values in is a set (Go only has maps)
    valueSet := make(map[int]bool)
    for _, v := range nums {
        valueSet[v] = true
    }

    // Sort the values in the set
    sortedKeys := make([]int, 0, len(valueSet))
    for k := range valueSet {
        sortedKeys = append(sortedKeys, k)
    }
    sort.Ints(sortedKeys)

    // Iterate through the sorted values
    longestStreak := -1 // Keep track of and later return the longest streak
    for _, v := range sortedKeys {
        
        // If the value was already used up in the prior streak ...
        if !valueSet[v] {
            continue // ... no need to consider it again.
        }

        streak := 1 // Any number is a streak of 1

        // Check if the square of current number is present in valueSet...
        next := v * v
        for valueSet[next] {       // ... if so ...
            streak += 1            // ... streak is now longer ...
            valueSet[next] = false // ... the square is now used up ...
            next = next * next     // ... and we should check for the next square.
        }

        // Check of we found a new valid longestStreak
        if streak > 1 && streak > longestStreak {
            longestStreak = streak
        }
    }

    return longestStreak
}
