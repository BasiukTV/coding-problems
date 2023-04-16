/**
 * Solution for https://leetcode.com/problems/spiral-matrix
 *
 * @author Taras Basiuk
 */
function spiralOrder(matrix: number[][]): number[] {

    // Boundaries of unprocessed matrix
    let [top, bottom] = [0, matrix.length];
    let [left, right] = [0, matrix[0].length];

    const result: number[] = [];
    while (true) {

        // If any columns left, add top row of the matrix to the result
        if (right - left == 0) { break; }
        for (let i: number = left; i < right; i++) {
            result.push(matrix[top][i]);
        }
        top++

        // If any rows left, add right column of the matrix to the result
        if (bottom - top == 0) { break; }
        for (let i: number = top; i < bottom; i++) {
            result.push(matrix[i][right - 1]);
        }
        right--;

        // If any columns left, add bottom row of the matrix to the result
        if (right - left == 0) { break; }
        for (let i: number = right - 1; i >= left; i--) {
            result.push(matrix[bottom - 1][i]);
        }
        bottom--;

        // If any rows left, add left column of the matrix to the result
        if (bottom - top == 0) { break; }
        for (let i: number = bottom - 1; i >= top; i--) {
            result.push(matrix[i][left]);
        }
        left++;
    }

    return result;
};
