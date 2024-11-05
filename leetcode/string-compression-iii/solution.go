/*
 * Solution for the https://leetcode.com/problems/string-compression-iii
 */
func compressedString(word string) string {
    compressed := []rune{} // Prepare the container for the compression result
    char := word[0] // Keep track of the currently streaking character...
    streak := 1 // ... and the length of the streak.
    for i := 1; i < len(word); i++ { // Iterate over every character of the word
        if char == word[i] { // If the character is the same...
            streak++ // ... increase the streack length.

            if streak > 9 { // If the streack is at 10 charactes...
                // ... save the '9X' part ...
                compressed = append(compressed, rune('9'), rune(char))
                streak = 1 // ... and reset the streak length.
            }
        } else { // If the character is not the same...
            // ... save up the compressed character ...
            compressed = append(compressed, rune('0' + streak), rune(char))
            char = word[i] // ... and start the new streak with the new character ...
            streak = 1 // ... at the length of 1.
        }
    }

    // Write out the last compressed character streak and conver everything into a string.
    return string(append(compressed, rune('0' + streak), rune(char)))
}
