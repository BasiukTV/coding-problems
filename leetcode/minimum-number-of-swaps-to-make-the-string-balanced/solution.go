// Solution for the - https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/

/*
 * The idea is to count the maximum number of imbalanced brackets at any point in the string.
 * And we then leverage the fact that a swap can fix up to two imbalances at once. 
 */
func minSwaps(s string) int {

    // We track the current bracket imbalance (more closed than opened brackets),
    // and max_imbalance ever encountered
    var imbalance, max_imbalance int = 0, 0

    // Iterating through every character (c) in the string. Character index (_) is ignored. 
    for _, c := range s {

        // Update the imbalance
        if c == '[' {
            imbalance -= 1
        } else { // if c == ']'
            imbalance += 1

            // Chech if max_imbalance needs updated
            if imbalance > max_imbalance {
                max_imbalance = imbalance
            }
        }
    }

    // Calculate and return number of swaps needed
    return (max_imbalance / 2) + (max_imbalance % 2)
}
