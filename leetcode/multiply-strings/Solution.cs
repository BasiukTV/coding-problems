/**
 * Solution for https://leetcode.com/problems/multiply-strings/
 *
 * @author Taras Basiuk
 */
public class Solution {

    /** Helper method to add to integers in the string form. */
    private string Add(string s1, string s2) {

        // Figure out which string is long and which is short.
        string l = s1.Length > s2.Length ? s1 : s2;
        string s = s1.Length > s2.Length ? s2 : s1;

        // Prepend the short string with '0's to equlize string lengths
        s = (new String('0', l.Length - s.Length)) + s;

        // Prepare results container
        char[] result = new char[l.Length + 1];

        // Iterate though both strings at once
        int carry = 0;
        for (int i = l.Length - 1; i >= 0; i--) {

            // Add up the corresponding digits and carry
            int sum = carry + (l[i] - '0') + (s[i] - '0');

            // Record last digit of the sum
            result[i + 1] = (char)('0' + (sum % 10));
            carry = sum / 10; // Update the cary
        }

        // If the carry not zero after last addition
        if (carry > 0) {
            result[0] = (char)('0' + carry);
            return new String(result);
        }

        // If the carry is zero, return the string without the first char
        return new String(result, 1, result.Length - 1);
    }

    // Helper method to multiply a string integer by a digit 
    private string Multiply(string num, int d) {
        char[] result = new char[num.Length + 1]; // Result container

        // For every char in the num string
        int carry = 0;
        for (int i = num.Length - 1; i >= 0; i--) {

            // Multiply the digits and add the carry
            int mul = carry + (d * ((num[i]) - '0'));

            // Record the resulting digit
            result[i + 1] = (char)('0' + (mul % 10));
            carry = mul / 10; // Update the carry
        }

        // If the carry not zero after last addition
        if (carry > 0) {
            result[0] = (char)('0' + carry);
            return new String(result);
        }

        // If the carry is zero, return the string without the first char
        return new String(result, 1, result.Length - 1);
    }

    public string Multiply(string num1, string num2) {
        string result = "";
        string multiplier = ""; // Container for sufix '0'z

        // Iterate thought the digits of the second string
        for (int i = num2.Length - 1; i >= 0; i--) {

            // Multiply the first string by the digit, and append tail '0's
            string mul = Multiply(num1, num2[i] - '0') + multiplier;

            // Add the multiplication to the result
            result = Add(result, mul);
            multiplier += '0'; // Increase the multiplier suffix
        }

        // Calculate the leading zeros
        int lz = 0;
        for (int i = 0; i < result.Length - 1; i++) {
            if (result[i] != '0') {
                break;
            }

            lz++;
        }

        // Return the string without the leading zeros
        return result.Substring(lz);
    }
}
