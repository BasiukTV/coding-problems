/**
 * Solution for https://leetcode.com/problems/pascals-triangle/
 *
 * @author Taras Basiuk
 */
class Solution {
    public List<List<Integer>> generate(int numRows) {

        // Calculate the triangle values in an array
        final Integer[][] triangle = new Integer[numRows][];
        for (int i = 0; i < numRows; i++) {

            // Prepare the new line and set the edge 1s
            final Integer[] line = new Integer[i + 1];
            line[0] = 1;
            line[i] = 1;

            // Calcualte the non-edge values
            for (int j = 1; j < i; j++) {
                line[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }

            // Set the line into the triange
            triangle[i] = line;
        }

        // Repackage the triangle array into the lists
        final List<List<Integer>> result = new LinkedList<>();
        for (final Integer[] line : triangle) {
            result.add(Arrays.asList(line));
        }

        return result; // Return the triangle in the Lists form
    }
}
