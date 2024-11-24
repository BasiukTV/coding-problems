/*
 * Solution for - https://leetcode.com/problems/maximum-matrix-sum
 *
 * The trick to the solution is that you can turn all number positive if number of
 * negative numbers is even, or all but one if the number of negatives is odd. In
 * later case we just pick the smallest absolute number to keep negative. We add the
 * absolute values of all the other number to the sum.
 */
func maxMatrixSum(matrix [][]int) int64 {
    negatives := 0 // count of negative numbers
    smallest_absolute := 100001 // smalest absolute value in the matrix
    absolute_sum := int64(0) // sum of absolute values

    // Iterate over the matrix
    for i := 0; i < len(matrix); i++ {
        for j := 0; j < len(matrix[0]); j++ {
            element := matrix[i][j]

            // Handle the negative number...
            if element < 0 {
                negatives += 1
                element = -element
            }

            // (and/or) handle the positive number.
            absolute_sum += int64(element)
            if element < smallest_absolute {
                smallest_absolute = element
            }
        }
    }

    // If the number of negative numbers is odd...
    if negatives % 2 == 1 {
        // ... adjust the absolute_sum to having to keep smallest_absolute negative.
        absolute_sum -= int64(2 * smallest_absolute)
    }

    return absolute_sum
}
