/**
 * Solution for - https://leetcode.com/problems/maximal-score-after-applying-k-operations
 *
 * Idea of the solution is to maintain the priority queue of the highest numbers
 * in the list. We then take the largest number off the queue, add it to the score
 * divide it by three, and re-enqueue it.
 */
public class Solution {
    public long MaxKelements(int[] nums, int k) {
        // We use a PriorityQueue (Max-Heap) for efficient access to the largest numbers
        var pQ = new PriorityQueue<int, int>(Comparer<int>.Create((a, b) => b.CompareTo(a)));

        // Enqueue all nums into pQ
        foreach (var n in nums) {
            pQ.Enqueue(n, n);
        }

        long score = 0;
        for (int i = 0; i < k; i++) {
            // Extract the largest number
            int oldValue = pQ.Dequeue();
            score += oldValue;

            // Compute the new value (ceiling of oldValue / 3)
            int newValue = (int) Math.Ceiling((double) oldValue / 3);

            // Insert the new value back into the heap
            pQ.Enqueue(newValue, newValue);
        }

        return score;
    }
}
