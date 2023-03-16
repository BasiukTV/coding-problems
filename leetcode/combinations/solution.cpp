/**
 * Solution for https://leetcode.com/problems/combinations/
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    vector<vector<int>> combine(int n, int k) {

        // Prepare the vector of all possible first integers in the combinations
        vector<vector<int>> combs{};
        for (int i = 1; i <= n - k + 1; i++) {
            combs.push_back({i});
        }
        k--;

        // Starting from the second pick to the last one
        while (k > 0) {

            // For every already existing combination
            int old_combs = combs.size();
            for (int i = 0; i < old_combs; i++) {

                // What is the last integer already added to this combination?
                int last_n = combs[i].back();
                
                // For every possible integer starting from last_n + 2
                for (int j = last_n + 2; j <= n - k + 1; j++) {
                    // Make a copy of the old combination and add it to combs
                    combs.push_back(vector<int>(combs[i]));

                    // Add j to the combination copy
                    combs.back().push_back(j);
                }

                // Add the next to the last integer to the existing combination
                combs[i].push_back(last_n + 1);
            }

            k--; // Done with this pick
        }

        return combs; // Return all the collected combinations
    }
};
