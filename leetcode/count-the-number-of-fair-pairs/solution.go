/*
 * Solution for the - https://leetcode.com/problems/count-the-number-of-fair-pairs
 *
 * Approach to the solution is sorting the array, and then for every left candidate
 * in the array we use binary search to find smalest and largest index for the right
 * candidates to form a fair pair to the right of the left candidate.
 *
 * (1) Note that while sorting destroys our ability to check that i < j, that check is
 * unnesessary as long as we only include the same fair pair only once.
 * (2) Using bisect to find left and right edges of right canididates for every
 * left candidate is inneficient, but I couldn't debug the smarted solution :)
 */
func countFairPairs(nums []int, lower int, upper int) int64 {
    sort.Ints(nums) // sort the array in the ascending order
    n := len(nums)  // keep the length of the array

    fair_pairs := int64(0)
    for i := 0; i < n; i++ {                   // For every left candidate...
        l := sort.Search(n, func(j int) bool { // ... find the left edge of the right candidates ...
            return nums[j] >= lower - nums[i]
        })
        r := sort.Search(n, func(j int) bool { // ... and the right edge of the right candidates.
            return nums[j] > upper - nums[i]
        })

        if l <= i {   // if the left edge of right candidates smaller then left...
            l = i + 1 // ... we should set it to left + 1 to avoid double counting.
        }

        if r <= i {  // If the right edge of right candidates is to the left of...
            continue // the left candidate, we already counted all these candidates.
        }

        fair_pairs += int64(r - l) // Otherwise, add all the suitable candidates
    }

    return fair_pairs
}
