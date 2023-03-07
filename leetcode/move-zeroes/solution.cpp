/**
 * Solution for https://leetcode.com/problems/move-zeroes/
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    void moveZeroes(vector<int>& nums) {

        int zero_count = 0; // Keep count of zeros found

        // Iterate through the original array
        for (int i = 0; i < nums.size(); i++) {

            // If zero encountered...
            if (nums[i] == 0) {
                // ... just increment the zero count.
                zero_count++;
            } else {
                /**
                 * Otherwise shift the enocuntered number by the number of zeroes
                 * encountered so far.
                 */
                nums[i - zero_count] = nums[i];
            }
        }

        // Finally, fill up the tail of the array with the zeroes found
        for (int i = 0; i < zero_count; i++) {
            nums[nums.size() - 1 - i] = 0;
        }
    }
};
