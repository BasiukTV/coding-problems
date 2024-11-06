/*
 * Solution for - https://leetcode.com/problems/find-if-array-can-be-sorted
 *
 * This is a simple solution that iterates over the list and checks wether any
 * number to the right and smaller of the current number cannot be swapped.
 *
 * For the smarter solution, see the problem hints.
 */

// Helper function to check wether the two numbers can be swapped 
func canSwap(a int, b int) bool {

    // Convert the numbers into bitstrings
    bitStrA := strconv.FormatInt(int64(a), 2)
    bitStrB := strconv.FormatInt(int64(b), 2)

    oneCountDiff := 0 // Count diff of bit ones between the numbers
    for _, c := range bitStrA { // Add count of ones in the A string
        if c == '1' {
            oneCountDiff += 1
        }
    }

    for _, c := range bitStrB { // Substract count of ones in the B string
        if c == '1' {
            oneCountDiff -= 1
        }
    }

    return oneCountDiff == 0 // If the diff is non-zero, number cannot be swapped
}

func canSortArray(nums []int) bool {
    for i := 0; i < len(nums) - 1; i++ {     // For every number ...
        for j := i + 1; j < len(nums); j++ { // ... check if every number on the right ...

            // .. is larger, or can be swapped.
            if nums[i] > nums[j] && !canSwap(nums[i], nums[j]) {
                return false
            }
        }
    }

    return true // No problems found
}
