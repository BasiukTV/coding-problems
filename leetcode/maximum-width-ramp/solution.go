/**
 * Solution for - https://leetcode.com/problems/maximum-width-ramp
 *
 * The idea for the solution is to initialize the max_ramp with a width of distance
 * from the smallest element of the array to the end of the array. Then we can 
 * consider improving the max_ramp first by checking if the 2nd smallest array
 * element to the left of the first smallest is still valid and then second by 
 * checking whether the second to the last of the element of the array is valid 
 * (against the 2nd smallest array element to the left of the first smallest). 
 * We then iterate.
 *
 * We will make two passes over the input array. First, we will build the 
 * monotonically decreasing stack ("left_candidates") of elements starting from the 
 * first element of the array. Second, we will iterate over the array from the end,
 * considering every element as the right candidate and evaluating the above logic,
 * trying to increase max_ramp.
 */
func maxWidthRamp(nums []int) int {

    // Container for monothonically decreasing stack of left candidates ...
    var left_candidates list.List
    left_candidates.PushBack(0) // ... starting from the first array element.

    // Make the first pass over the input, populating left_candidates
    for i:=1; i < len(nums) - 1; i++ {

        // Is this the smalest number so far? Another left candidate then.
        if nums[i] < nums[left_candidates.Back().Value.(int)] {
            left_candidates.PushBack(i)
        }
    }

    // If the last element of the array is not the smallest one...
    max_ramp := 0
    if nums[len(nums) - 1] >= nums[left_candidates.Back().Value.(int)] {
        // ...we initialize max_ramp like we discussed...
        max_ramp = len(nums) - 1 - left_candidates.Back().Value.(int)
    } else {
        // ... otherwise there might not be a ramp in the array at all and we
        // handle this edge case by considering smallest array element later by
        // adding non-existing element to left_candidates
        left_candidates.PushBack(-1)
    }

    var left_candidate *list.Element = left_candidates.Back() // current

    // Second pass over the array, now going backwards
    for i:=len(nums) - 1; i > 0; i-- {

        // If there a still left candidates left (meaning larger number, but to the
        // left of current left_candidate), and it makes a valid ramp...
        for left_candidate.Prev() != nil && nums[i] >= nums[left_candidate.Prev().Value.(int)] {
            
            // ... pop it and check if it's the widest ramp yet.
            left_candidate = left_candidate.Prev()
            if i - left_candidate.Value.(int) > max_ramp {
                max_ramp = i - left_candidate.Value.(int)
            }
        } // If anoth left candidate exists, but not valid, look for larger
          // right candidate by continuing backwards traversal of the array.
    }

    return max_ramp
}
