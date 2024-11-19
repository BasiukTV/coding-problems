/*
 * Solution for the - https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k
 *
 * Approach to the solution is to maintain a running sum and count of distinct numbers
 * in a k-lenght window as we iterate over input array. 
 */
func maximumSubarraySum(nums []int, k int) int64 {
    counts := map[int]int{} // counts of distinct numbers in the k-window

    // Inititalize the running_sum sum and counts for the first k numbers
    running_sum := int64(0)
    for i := 0; i < k; i++ {
        running_sum += int64(nums[i])
        counts[nums[i]] = counts[nums[i]] + 1 // works for missing keys too in Go
    }

    // Initialize the maximum
    maximum := int64(0)
    if len(counts) == k {     // If there are k distinct numbers in counts - the ...
        maximum = running_sum // ... initial running_sum is the initial maximum.
    }

    // Now, let's iterate over the rest of the array
    for i := k; i < len(nums); i++ {

        // Remove the number leaving the window from the running_sum and counts.
        running_sum -= int64(nums[i - k])
        counts[nums[i - k]] = counts[nums[i - k]] - 1
        if counts[nums[i - k]] == 0 {   // If the number was last of its kind ...
            delete(counts, nums[i - k]) // ... we have to remove its key from counts.
        }

        // Add the number entering the window to running_sum and counts.
        running_sum += int64(nums[i])
        counts[nums[i]] = counts[nums[i]] + 1

        // Check if the subbarray is distinct and if running_sum is the new maximum.
        if len(counts) == k && running_sum > maximum {
            maximum = running_sum
        }
    }

    return maximum
}
