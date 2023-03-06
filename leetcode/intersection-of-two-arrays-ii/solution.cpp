/**
 * Solution for https://leetcode.com/problems/intersection-of-two-arrays-ii/
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {

        // Vactor for the resulting intersection
        vector<int> intersection {};

        // Map of the integers in nums1 to their occurence
        map<int, int> num1map {};

        // Populate the num1map
        for (int n : nums1) {
            // If n wasn't encountered before, initilize it's occurance count at 0.
            if (num1map.count(n) == 0) {
                num1map[n] = 0;
            }

            num1map[n] = num1map[n] + 1; // Increment the occurance count
        }

        // Iterate through numbers in nums2
        for (int n : nums2) {
            // If n is in num1map and it's occurance there is still positive...
            if (num1map.count(n) > 0 && num1map[n] > 0) {
                intersection.push_back(n); // Add n to the intersection
                num1map[n] = num1map[n] - 1; // Decrement the n occurance count in num1map
            }
        }

        // Return the resulting intersection
        return intersection;
    }
};
