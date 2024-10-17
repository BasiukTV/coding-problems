/**
 * Solution for the - https://leetcode.com/problems/maximum-swap
 *
 * Approach to the solution is iterating through the digits left to right and
 * swaping the first digit that has a larger digit to the right of it with the
 * largest and last instance of such digit.
 */
func maximumSwap(num int) int {

    var snum string = strconv.Itoa(num) // Convert the input number to a string ...
    var runes []rune = []rune(snum) // ... and then to a rune

    for i, _ := range runes { // Iterate over the characters in the rune

        max_candidate := num // Keep track of the candidate swaps
        for j := i + 1; j < len(runes); j++ { // Try all the digits to the right
            if runes[j] > runes[i] { // If the j digit is larger than i digit
                runes[i], runes[j] = runes[j], runes[i] // Try swapping them
                candidate, _ := strconv.Atoi(string(runes)) // Calculate candidate

                // Save it if it's largest so far
                if candidate > max_candidate {
                    max_candidate = candidate
                }

                runes[i], runes[j] = runes[j], runes[i] // Swap digits back in place
            }
        }

        // If the candidate is larger than original, it's the largest posible swap
        if max_candidate > num {
            return max_candidate
        }
    }

    return num // In case no larger swaps were found, return thr original number
}
