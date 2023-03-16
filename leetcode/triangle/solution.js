/**
 * Solution for https://leetcode.com/problems/triangle/
 *
 * @author Taras Basiuk
 *
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {

    // Starting from the second row from the bottom going all the way to the top
    for (let r = triangle.length - 2; r >= 0; r--) {

        // For every cell in the row...
        for (c = 0; c <= r; c++) {

            //...increase its value by the smaller of the two cells below
            triangle[r][c] += Math.min(
                triangle[r + 1][c],
                triangle[r + 1][c + 1]);
        }
    }

    return triangle[0][0]; // Return the head of the triangle
};
