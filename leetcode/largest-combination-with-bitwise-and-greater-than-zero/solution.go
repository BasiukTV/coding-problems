/*
 * Solution for - https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero
 *
 * Approach to the solution is to count number of 1 bits in the same position accross
 * the numbers. The position holding the most 1s will be the largest combination.
 */
func largestCombination(candidates []int) int {

    oneBitsInPosition := map[int]int {} // Map {postion: number of 1 bits set}
    for _, c := range candidates { // For every candidate ...
        i := 0                     // ... starding from the bit in 0 position ...
        for c > 0 {                // ... until the candidate is positive ...
            oneBitsInPosition[i] += c % 2 // ... add the bit value to the map ...
            c /= 2                 // ... drop the last bit ...
            i += 1                 // ... increment the bit position.
        }
    }

    // Find the largest number of 1 bits in the same position and return it.
    largest := 0
    for _, count := range oneBitsInPosition {
        if count > largest {
            largest = count
        }
    }

    return largest
}
