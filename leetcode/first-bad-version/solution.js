/**
 * Solution to the https://leetcode.com/problems/first-bad-version/
 *
 * @author Taras Basiuk
 *
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        // Initialize the search ranges
        var lastGood = -1;
        var firstBad = n;

        // As long as search range edges aren't next to each other
        while (firstBad - lastGood > 1) {

            // Guess where first bad revision might be
            var guess = Math.floor((lastGood + firstBad) / 2);

            if (isBadVersion(guess)) {
                firstBad = guess; // If guess version is bad, it might be the first one
            } else {
                lastGood = guess; // If guess version is good, it might be the last one
            }
        }

        return firstBad; // Return where the first bad version was last seen
    };
};
