/*
 * Solution for - https://leetcode.com/problems/delete-characters-to-make-fancy-string
 *
 * The solution approach is to simply iterate over the characters in the string while
 * counting the length of the same character streak lengths. If the current streak
 * lengths is less then three we add the current character to the output.
 */
func makeFancyString(s string) string {
    fancy := []rune{} // Container for the fancy string characters (runes).

    streakChar := '0' // Track the character of the current streak.
    streakLen := 0 // Track the length of the current streak.
    for _, char := range s { // Iterate over the characters of the string.
        if char == streakChar { // If the streak continues ...
            streakLen++ // ... increase it's length.
        } else { // But if the streak is over ...
            streakChar = char // ... update the streak character ...
            streakLen = 1 // ... and set the initial streak length to 1.
        }

        // If the streak is still short - add the character to the fancy string.
        if streakLen < 3 {
            fancy = append(fancy, char)
        }
    }

    // Convert the slice of characters (runes) to string before returning.
    return string(fancy)
}
