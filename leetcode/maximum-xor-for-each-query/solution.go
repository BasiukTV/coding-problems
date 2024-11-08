/*
 * Solution for - https://leetcode.com/problems/maximum-xor-for-each-query
 *
 * Approach to the solution is maintaining running XOR while iterating over the
 * input array. Each number in the input array is replaced with the number
 * that XORs the running XOR to the maximum allowed number. After the forward pass
 * is done, we reverse the input array and return it as the result.
 */
func getMaximumXor(nums []int, maximumBit int) []int {
    max := (1 << maximumBit) - 1 // max allowed number
    runningXOR := 0
    length := len(nums)

    for i := 0; i < length; i++ {         // (1) Iterate over the input array.
        runningXOR = runningXOR ^ nums[i] // (2) Keep track of runningXOR.
        nums[i] = runningXOR ^ max        // (3) Replace input with a number that ...
    }                                     // ... XORs runningXOR to max.

    // Reverse the input array in place, as the problem essentially requires.
    left, right := 0, length - 1
    for left < right {
        nums[left], nums[right] = nums[right], nums[left]
        left, right = left + 1, right - 1
    }

    return nums
}
