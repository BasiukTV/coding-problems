/**
 * Solution for https://leetcode.com/problems/decode-string/
 *
 * @author Taras Basiuk
 */
class Solution {
    public String decodeString(String s) {

        // Fragments of the decoded string will be stored here
        final List<String> result = new LinkedList<>();

        // We iterate through the string characters
        int ssbi = 0; // Substring begining index
        for (int i = 0; i < s.length(); i++) {

            // If we encountered a digit, we will need to decode a segment
            if (Character.isDigit(s.charAt(i))) {

                // We add the plain substring we were collecting before to the result
                result.add(s.substring(ssbi, i));

                // First we extract the multiplier
                int multiplier = 0;
                while (s.charAt(i) != '[') { // Until we encouter a '['

                    // We grow the multiplier
                    multiplier *= 10;
                    multiplier += s.charAt(i) - '0';
                    i++;
                }
                i++; // Hop over the '['

                // Now we need to extreact the string to be multiplied
                int msbi = i; // Multiplied string begining index
                int bracketCount = 1;
                while (true) {

                    // Encountered another '[' so there will be more ']' to look for
                    if (s.charAt(i) == '[') {
                        bracketCount++;
                    }

                    // here we decrement the number of ']' we're still looking for
                    if (s.charAt(i) == ']') {
                        bracketCount--;
                    }

                    // If we found the last ']'
                    if (bracketCount == 0) {
                        // Add multiplier number of decoded multiplied substrings to the result
                        result.addAll(Collections.nCopies(
                            multiplier, decodeString(s.substring(msbi, i))));
                        break;
                    }

                    i++; // Still more ']' to find...
                }

                // After the encoded fragment is processed, we start another plain sustring
                ssbi = i + 1; // We hop over the last ']' for ssbi here
            }

            // Else, we encountered a plain substring character, so we just iterate further
        }

        // If there's a plain substring at the end of the encoded string, we pick it up here
        result.add(s.substring(ssbi));

        // Return the joined fragments of the decoded strings
        return String.join("", result);
    }
}
