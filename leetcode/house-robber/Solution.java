/**
 * Solution for https://leetcode.com/problems/house-robber
 *
 * @author Taras Basiuk
 */
class Solution {
    public int rob(int[] nums) {

        int prev2 = 0; // Score if robber robed a house two houses back
        int prev1 = 0; // Score if robber robed a house one house back
        
        for (int n : nums) { // For every house

            // Should we rob this house and forsake robbing the previous house
            boolean shouldRob = prev2 + n > prev1;

            // Fot the next iteration...
            int tmp = prev1;

            /**
             * If we robbed this house prev1 will increase. If we didn't
             * it will be the same as prev2 and there won't be a reason
             * not to rob the next house... unless robbing the one after 
             * next is better.
             */
            prev1 = shouldRob ? prev2 + n : prev1;
            
            // prev1 is no less than prev2 so below is always a good idea
            prev2 = tmp;
        }

        return prev1; // Return the score after robbing (or not) the last house
    }
}
