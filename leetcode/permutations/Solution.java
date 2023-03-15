/**
 * Solution for https://leetcode.com/problems/permutations/
 *
 * @author Taras Basiuk
 */
class Solution {

    // Copy of the nums to permute
    private Set<Integer> nums;

    // Recursive method to compute the permutations
    private List<List<Integer>> recursion(List<Integer> sofar) {
        final List<List<Integer>> result = new LinkedList<>();

        // If all numbers were used, just return the sofar...
        if (sofar.size() == nums.size()) {
            result.add(sofar);
            return result;
        }

        // ... otherwise figure out which integers are missing
        final Set<Integer> missing = new HashSet<>(nums);
        missing.removeAll(sofar);

        // For every missing integer
        for (Integer m : missing) {

            // Add it to the new_sofar
            final List<Integer> new_sofar = new LinkedList<>(sofar);
            new_sofar.add(m);

            // Pass it down the recusrion and combine the results
            result.addAll(recursion(new_sofar));
        }

        return result;
    }

    public List<List<Integer>> permute(int[] nums) {

        // Record the nums
        this.nums = new HashSet<Integer>();
        for (Integer n : nums) {
            this.nums.add(n);
        }

        // Call the recursion with empty sofar
        return recursion(new LinkedList<>());
    }
}
