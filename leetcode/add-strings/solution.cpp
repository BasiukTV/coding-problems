/**
 * Solution for https://leetcode.com/problems/add-strings
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    string addStrings(string num1, string num2) {

        // Even out the string lengths by prepending some number of '0' 
        if (num1.length() > num2.length()) {
            num2 = string(num1.length() - num2.length(), '0') + num2;
        } else {
            num1 = string(num2.length() - num1.length(), '0') + num1;
        }

        // Results container
        vector<char> result(num1.length());

        int cary = 0; // Cary digit

        // Traversing the string backwards
        for (int i = num1.length() - 1; i >= 0; i--) {
            int a = num1[i] - '0'; // num1 digit
            int b = num2[i] - '0'; // num2 digit
            int c = a + b + cary; // digit addition result

            result[i] = (c % 10) + '0'; // Store addition result
            cary = (int) c / 10; // Is there a cary digit?
        }

        // If there is last cary digit, prepend it before returning result
        return cary > 0 ? 
            to_string(cary) + string(result.begin(), result.end()) :
            string(result.begin(), result.end());
    }
};
