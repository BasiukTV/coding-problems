/**
 * Solution for https://leetcode.com/problems/partition-labels
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    vector<int> partitionLabels(string s) {
        
        // Build the map of last occurances of a particular character 
        map<char, int> last_occurance;
        for (int i = 0; i < s.length(); i++) {
            last_occurance[s[i]] = i;
        }

        vector<int> result; // Container for the segment sizes
        int seg_begin = -1, seg_end = -1; // Current segment range indexes

        for (int i = 0; i < s.length(); i++) { // Traverse the string once more
            
            // If another segment was not started yet
            if (seg_begin == -1) {
                seg_begin = i; // Segment starts here

                // Segment currently ends at the last occurance of this char 
                seg_end = last_occurance[s[i]];
            } else {

                /**
                 * If the segment is ongoing we might have to extend it 
                 * to the last occurance of the current character.
                 */
                seg_end = max(seg_end, last_occurance[s[i]]);
            }

            // Did we reach the end of the current segment?
            if (i == seg_end) {
                result.push_back(seg_end - seg_begin + 1); // Record its end
                seg_begin = -1; // Reset the "in segment" flag
            }
        }

        return result; // Return all the recorded segment lengths
    }
};
