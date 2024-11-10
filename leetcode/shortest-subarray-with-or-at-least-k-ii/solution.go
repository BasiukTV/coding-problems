/*
 * Solution for - https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii
 *
 * Approach to the solution is to maintain the running window and counting the bits
 * of the encountered numbers in their respective positions. If a specific bit 
 * enocuntered for the first time, bitwise or is updated by the bit vale. If bitwise
 * or is not at least k, we try to shrink the window by substracting bit counts
 * of the numbers we're dropping off the window until bitwise or is less than k.
 *
 * The approach is pretty inefficient due to examining bits one by one, but I'm too
 * tired to implement an alternative.
 */
func minimumSubarrayLength(nums []int, k int) int {
    if k == 0 { // Handle the edge case
        return 1
    }

    shortest := len(nums) + 1 // Init the shortest to invalid value

    bor := 0              // Running bitwise OR result
    bits := map[int]int{} // Count of bits in their positions making up bor
    si := -1              // Starting index of the subarray
    for ei := 0; ei < len(nums); ei++ { // For every possible subarray end index
        n := nums[ei] // Get a copy of n

        // Decompose n into its bits, add them to bor and bits
        bi := 0 // Bit index
        bv := 1 // Bit value
        tempN := n
        for tempN > 0 {     // Until n has any set bits left
            bs := tempN % 2 // Is the current bit set?

            if bs == 1 {           // If it is...
                bits[bi] += 1      // ... add it to the count of bits.
                if bits[bi] == 1 { // If it's the first count of this bit...
                    bor += bv      // ... add the bit value to bor.
                }
            }

            tempN /= 2 // Drop the last bit off n.
            bi += 1    // Increment bit index.
            bv *= 2    // Double bit value.
        }

        for bor >= k { // If bor is now at least k, let's see how much we can advance si

            // See if we should update the shortest
            length := ei - si
            if length < shortest && length > 0 {
                shortest = length
            }

            if si + 1 < len(nums) { // If si can be moved further
                si += 1
                n = nums[si]

                // Decompose n into its bits, subtract them from bor and bits
                bi := 0 // Bit index
                bv := 1 // Bit value
                tempN := n
                for tempN > 0 {     // Until n has any set bits left
                    bs := tempN % 2 // Is the current bit set?

                    if bs == 1 {           // If it is...
                        bits[bi] -= 1      // ... subtract it from the count of bits.
                        if bits[bi] == 0 { // If it's the last count of this bit...
                            bor -= bv      // ... subtract bit value from bor.
                        }
                    }

                    tempN /= 2 // Drop the last bit off n
                    bi += 1    // Increment bit index
                    bv *= 2    // Double bit value
                }
            } else {
                break
            }
        }
    }

    if shortest == len(nums) + 1 { // If the valid subarray was never found
        return -1
    }

    return shortest
}
