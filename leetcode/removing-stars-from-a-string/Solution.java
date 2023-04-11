/**
 * Solution for https://leetcode.com/problems/removing-stars-from-a-string
 *
 * @author Taras Basiuk
 */
class Solution {
    public String removeStars(String s) {

        // Result constainer
        final StringBuilder result = new StringBuilder();

        // Traverse the string characters backwards
        for (int i = s.length() - 1; i>= 0; i--) {

            // If non-star encuntered, just add it to the result.
            if (s.charAt(i) != '*') {
                result.append(s.charAt(i));
                continue;
            }

            // Otherwise, skip over one non-star character for every star met
            int stars = 1;
            while (i > 0 && stars > 0) {
                i--; // Skip over a character
                stars += s.charAt(i) == '*' ? 1 : -1; // Was is a star or not?
            }
        }

        // Reverse the StringBuilder as we were traversing the string backwards
        return result.reverse().toString();
    }
}
