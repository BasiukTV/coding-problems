/**
 * Solution for https://leetcode.com/problems/group-anagrams
 *
 * @author Taras Basiuk
 */
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
    
        // Container for grouped anagrams
        Map<String, List<String>> groups = new HashMap<>();

        // For every string...
        for (final String s : strs) {

            // ... sort it first ...
            final String sorted = Stream.of(s.split(""))
                .sorted()
                .collect(Collectors.joining());

            // ... and check if the anagram group already exists for it.
            if (!groups.containsKey(sorted)) {
                groups.put(sorted, new LinkedList<>());
            }

            // Finaly, add the unsorted string to the anagram group.
            groups.get(sorted).add(s);
        }

        // Return the result in the specified format 
        return new LinkedList<List<String>>(groups.values());
    }
}
