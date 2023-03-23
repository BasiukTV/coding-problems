/**
 * Solution for https://leetcode.com/problems/subarray-sum-equals-k
 *
 * @author Taras Basiuk
 */
class Solution {
    public int subarraySum(int[] nums, int k) {
        
        int result = 0;
        int prefix = 0; // Sum of number prefixing certain index

        // How many times we encountered some prefix as we traverse the array
        final Map<Integer, Integer> prefix_count = new HashMap<>();
        prefix_count.put(0, 1); // Encountered 0 prefix once already

        // Traverse the array
        for (int n : nums) {
            prefix += n; // Update the prefix sum

            /**
             * If in the past we encountered (prefix - k) value of prefix sum,
             * that means that since that time, we've accumulated (k) worth
             * of prefix sum. So, depending on how many times we've enocuntered
             * (prefix - k), we should update our result.
             */
            if (prefix_count.containsKey(prefix - k)) {
                result += prefix_count.get(prefix - k);
            }

            // Lastly, we need to record/update (prefix) encounter 
            if (prefix_count.containsKey(prefix)) {
                prefix_count.put(prefix, prefix_count.get(prefix) + 1);
            } else {
                prefix_count.put(prefix, 1);
            }
        }

        return result;
    }
}
