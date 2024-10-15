/**
 * Solution for - https://leetcode.com/problems/separate-black-and-white-balls
 *
 * Approach to solution is to iterate over the characters in the string. We 
 * track the numbers of zeros encountered so far and of currect character index.
 * When zero encountered undder index larger then the count of zeros so far,
 * it must be shifted the difference positions to the left (which contributes to
 * the total min steps needed). 
 */
func minimumSteps(s string) int64 {
    var zeros_encountered int = 0
    var result int64 = 0

    for i, c := range s { // Iterate over the characters
        if c == '0' { // When zero is encountered ...

            // ... it has to be shifted the number of positions to the left so
            // it matches the current count of zeros encountered so far.
            result += (int64)(i - zeros_encountered) 
            zeros_encountered++ // update the number of zeros encountered
        }
    }

    return result
}
