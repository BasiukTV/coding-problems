/*
 * Solution for - https://leetcode.com/problems/circular-sentence
 *
 * The approach to the solution is to split the sentense into words and check
 * wether the last character of one word is the same as the first character of
 * the next word. We additionally check the first and last character of the whole
 * sentence.
 */
func isCircularSentence(sentence string) bool {

    // If the first and last characters of the sentence don't match - it's not circular
    if sentence[0] != sentence[len(sentence) - 1] {
        return false
    }

    words := strings.Split(sentence, " ") // Split sentence into words
    for i := 0; i < len(words) - 1; i++ { // For each word ...
        word := words[i]
        // ... if the last character doesn't match the first character of the next word...
        if word[len(word) - 1] != words[i + 1][0] {
            return false // ... the sentence is not circular.
        }
    }

    return true // Found nothing wrong with the sentence, it's circular
}
