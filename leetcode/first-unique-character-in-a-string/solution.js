/**
 * Solution for https://leetcode.com/problems/first-unique-character-in-a-string
 *
 * @author Taras Basiuk
 *
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    // Count the occurance of the characters and record the first occurance
    const counter = {}
    for (let i = 0; i < s.length; i++) {
        counter[s[i]] = s[i] in counter ? // If character was already encountered
            [counter[s[i]][0] + 1, counter[s[i]][1]] : // Increment count, retain the location
            [1, i]; // If not, initialize with count 1 and record first occurance location i 
    }

    // Utilizing the parameter order preservation in JS objects, iterate through charcters
    for (let key in counter) {
        if (counter[key][0] === 1) { // If it only occured once
            return counter[key][1]; // Return its first occurance
        }
    }

    // No characters were encountered only once, return -1
    return -1;
};
