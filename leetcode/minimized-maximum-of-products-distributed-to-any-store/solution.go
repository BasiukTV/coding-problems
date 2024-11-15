/*
 * Solution for the - https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/
 *
 * Approach to the solution is a binary search between two possible extremes:
 *  (1) Largest number is quantities - for when there are exactly the same number
 *      of shops as there are unique items.
 *  (2) Floor of a sum of quantities divided by the number of shops for a fairly
 *      even distribution of quantities across the shops.
 */
func minimizedMaximum(n int, quantities []int) int {

    // First, we calculate the sum and max of quantities
    qSum, qMax := 0, 0
    for _, q := range quantities {
        qSum += q
        if q > qMax {
            qMax = q
        }
    }

    // we start with minimal possible maximum guess
    mpm := qSum / n
    if mpm < 1 {
        mpm = 1
    }

    left, right := mpm, qMax // we define the left and right edges of the searcg space
    for left < right {
        guess := (left + right) / 2 // guess is in the middle

        // We check what needed n (nn) we end up having for the current guess
        nn := 0
        for _, q := range quantities {
            nn += (q + guess - 1) / guess
        }

        // We update the edges of binary search as usual
        if nn <= n {
            right = guess
        } else {
            left = guess + 1
        }
    }

    return left
}
