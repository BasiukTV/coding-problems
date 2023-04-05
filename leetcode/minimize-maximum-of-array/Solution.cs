/**
 * Solution for https://leetcode.com/problems/minimize-maximum-of-array/
 *
 * @author Taras Basiuk
 */
public class Solution {
    public int MinimizeArrayValue(int[] nums) {

        // Init the minimum maximum with the first numer, as it cannot decrease
        int mm = nums[0];

        /**
         * As we iterate the array keep track of free space we have to the left
         * of current number where we can move some of the numbers in excess of
         * current mm.
         */
        long free_space = 0;

        for (int i = 1; i < nums.Length; i++) {

            // If the current number smaller than current mm ...
            if (nums[i] <= mm) {
                // ... it will only increase out free space.
                free_space += mm - nums[i];
            } else {
                // Otherwise it will consume some of the free space.
                int diff = nums[i] - mm;
                free_space -= diff;

                // If we ran out of free space, we need to raise the mm
                if (free_space < 0) {

                    // By how much to we need to raise the mm?
                    int raise = (int) Math.Ceiling(
                        (double) -free_space / (i + 1));
                    mm += raise; // Raise the mm

                    // How much of free_space left after the raise?
                    free_space = (raise * (i + 1)) + free_space;
                } 
            }
        }

        return mm;
    }
}
