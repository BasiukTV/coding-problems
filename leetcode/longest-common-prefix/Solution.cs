/**
 * Solution for https://leetcode.com/problems/longest-common-prefix
 *
 * @author Taras Basiuk
 */
public class Solution {
    public string LongestCommonPrefix(string[] strs) {

        // Assume the first string is the longest common prefix
        string com_pre = strs[0];

        // For every character in com_pre
        for (int i = 0; i < com_pre.Length; i++) {

            // For every other string in strs
            for (int j = 1; j < strs.Length; j++) {

                // If other string is too short of i characters don't match 
                if (strs[j].Length == i || strs[j][i] != com_pre[i]) {

                    // The longest common prefix is only i characters of com_pre
                    return com_pre.Substring(0, i);
                }
            }
        }

        // First string indeed hapened to be the longest common prefix
        return com_pre;
    }
}
