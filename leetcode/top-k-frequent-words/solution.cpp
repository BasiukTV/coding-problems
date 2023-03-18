/**
 * Solution for https://leetcode.com/problems/top-k-frequent-words/
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    vector<string> topKFrequent(vector<string>& words, int k) {

        // Count the occurance of all the given words and put them in a map
        map<string, int> counts;
        for (string w : words) {
            counts[w] = counts.count(w) != 0 ? counts[w] + 1 : 1;
        }

        // Now repacage the same occurances into a vector
        vector<pair<string, int>> counts_vec;
        for_each(counts.begin(), counts.end(), [&counts_vec](pair<string, int> p) {
            counts_vec.push_back(p);
        });

        // Comparator for comparing word occurances per probem statement
        auto cmp = [](pair<string, int> i, pair<string, int> j) {
            return i.second != j.second ? i.second < j.second : i.first > j.first;
        };

        // Build a priority queue using the vector and the comparator
        priority_queue<
            pair<string, int>,
            vector<pair<string, int>>,
            decltype(cmp)> pq(cmp, counts_vec);

        // Take top k word occurances per priority queue and put them into a result vector
        vector<string> result;
        for (int i = 0; i < k; i++) {
            result.push_back(pq.top().first);
            pq.pop();
        }

        return result;
    }
};
