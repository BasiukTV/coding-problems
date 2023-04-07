/**
 * Solution for https://leetcode.com/problems/k-closest-points-to-origin
 *
 * @author Taras Basiuk
 */
public class Solution {
    public int[][] KClosest(int[][] points, int k) {

        // Populate the priority queue prioritizing square of distance to origin
        PriorityQueue<int, int> pq = new PriorityQueue<int, int>();
        for (int i = 0; i < points.Length; i++) {
            pq.Enqueue(i,
                ((points[i][0] * points[i][0]) + 
                (points[i][1] * points[i][1])));
        }

        // Get indexes of k closest to origin points, put their coords in a list
        List<int[]> result = new List<int[]>();
        for (int i = 0; i < k; i++) {
            result.Add(points[pq.Dequeue()]);
        }

        // Convers the list into the array and return it
        return result.ToArray();
    }
}
