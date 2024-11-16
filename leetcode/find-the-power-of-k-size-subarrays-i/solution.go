/*
 * Solution for - https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i
 *
 * Approach to the solution is to build an array of strek starts. Each element of the
 * array will record the starting index of the streak that it belongs to. Then we
 * iterate over the starts array and see wether the element in position of i + k - 1
 * belongs to a streak starting on position i or sooner.
 */
func resultsArray(nums []int, k int) []int {

    // Build the starts array
    starts := make([]int, len(nums))
    for i := 1; i < len(nums); i++ {

        // If the current number exactly 1 larger then the previous number...
        if nums[i] == nums[i - 1] + 1 {
            starts[i] = starts[i - 1] // ... it continues the same streak ...
        } else {
            starts[i] = i // ... otherwise it starts a streak of its own.
        }
    }

    // Now, let's build the result array
    result := make([]int, len(nums) - k + 1)
    for i := 0; i < len(result); i++ {

        // If the strak for the current result starts at least k number earlier ...
        if starts[i + k - 1] <= i {
            result[i] = nums[i + k - 1] // ... current element is the maximum one ...
        } else {
            result[i] = -1 // ... othersie the subarray is invalid.
        }
    }

    return result
}
