/*
 * Solution for - https://leetcode.com/problems/prime-subtraction-operation
 *
 * Approach to the solution is to lower each number in the input array as much
 * as possible by doing a binary search in the pre-prepared array of primes.
 */
func primeSubOperation(nums []int) bool {

    // Since the value constraints are pretty tight, we just hard-code the primes 
    primeNumbers := []int{
		2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
		73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
		157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
		239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
		331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
		421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
		509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
		613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
		709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
		821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
		919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997}

    for i, n := range nums { // We iterate over every number in array.

        // The previos number in the array...
        prevN := 0 // (zero for the first array element)
        if i > 0 {
            prevN = nums[i - 1]
        }

        // ... dictates the maximum reduction of the current number.
        maxReduction := n - (prevN + 1)
        if maxReduction < 0 {
            // If the max reduction is negative, this means that the currnet number
            // is less then or equal to the previous number, so this array cannot be fixed.
            return false
        }

        // Then we use the binary search to find the prime number that is...
        pi := sort.SearchInts(primeNumbers, maxReduction + 1)
        if pi != 0 {
            // ... less than maxReduction and substract it from the current number.
            nums[i] -= primeNumbers[pi - 1]
        }
    }

    // If we get to the end of the array without issue, we succeeded in prime substracting it.
    return true
}
