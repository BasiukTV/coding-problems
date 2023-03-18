/**
 * Solution for the https://leetcode.com/problems/last-stone-weight/
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {

        // Initialize the priority queue
        priority_queue<int> pq (stones.begin(), stones.end());

        // While there's more than one stone on the prip=ority queue
        while (pq.size() > 1) {

            // Retrieve the stones
            int stone1 = pq.top();
            pq.pop();

            int stone2 = pq.top();
            pq.pop();

            // If one stone is larger than the other
            if (stone1 > stone2) {
                pq.push(stone1 - stone2); // Put the remainder of the larger stone back
            }
        }

        // Return the last stone, or 0 if there isn't one
        return pq.size() == 1 ? pq.top() : 0;
    }
};
