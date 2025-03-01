/**
 * Solution to the https://leetcode.com/problems/apply-operations-to-an-array
 * Solution approach is doing two loops over the array.
 * First - to apply operations, second - to shift zeroes.
 */
func applyOperations(nums []int) []int {

    // First Loop to perform the operations
    for i := 0; i < len(nums) - 1; i++ {
        if nums[i] == nums[i + 1] {
            nums[i] *= 2
            nums[i + 1] = 0
        }
    }

    // Second Loop to shift the zeros
    fnzi := 1 // First Non-Zero Index
    for i := 0; i < len(nums) - 1; i++ {
        if nums[i] == 0 { // If encountered zero

            // Increment fnzi until:
            // 1. It's further than i
            // 2. But still within the array bounds
            // 3. And points to a non-zero number
            for fnzi <= i || (fnzi < len(nums) && nums[fnzi] == 0) {
                fnzi++
            }

            // Check if we run out of the array to seek non-zero numbers
            if fnzi == len(nums) {
                break
            }

            // Swap zero with non-zero number
            nums[i], nums[fnzi] = nums[fnzi], 0
        }
    }

    return nums
}
