/**
 * Solution to the https://leetcode.com/problems/maximum-subarray
 * Uses Kadane's Algorithm.
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
    
        // One less than the smallest possible max subarray sum 
        int max_sum = -pow(10, 4) - 1; 
        int segment_sum = 0; // Start with an empty segment

        for(int n : nums) { // Starting from the beginning og the array
            segment_sum += n; // Add the next element to the segment sum

            // If the max_segment_sum is ever larger than max_sum, update max_sum
            if (max_sum < segment_sum) {
                max_sum = segment_sum;
            }

            // If the segment sum turns negative, we discard the segment and start a new one.
            if (segment_sum < 0) {
                segment_sum = 0;
            }
        } 

        // Return the result
        return max_sum;
    }
};
