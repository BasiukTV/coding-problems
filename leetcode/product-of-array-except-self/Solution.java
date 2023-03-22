/**
 * Solution for https://leetcode.com/problems/product-of-array-except-self
 *
 * @author Taras Basiuk
 */
class Solution {
    public int[] productExceptSelf(int[] nums) {

        // Prepare the result array
        final int[] result = new int[nums.length];

        // Perform the forward pass populating cells with products of all preceding cells
        int running_prod = 1;
        for (int i = 0; i < nums.length; i++) {
            result[i] = running_prod;
            running_prod *= nums[i];
        }

        // Perform the backward pass multiplying cells by products of all subsequent cells
        running_prod = 1;
        for (int i = nums.length - 1; i >= 0; i--) {
            result[i] *= running_prod;
            running_prod *= nums[i];
        }

        // Return the populated result array
        return result;
    }
}
