// Solution for the - https://leetcode.com/problems/palindrome-number/

func isPalindrome(x int) bool {

    // Negative integer cannot be a palindrome
    if x < 0 {
        return false
    }

    // We convert the intenger into a byte array
    var xs []byte = []byte(strconv.Itoa(x))

    // Iterate through the first half of the array
    for i := 0; i < len(xs) / 2; i++ {

        // Check if the corresponding number a the second half of the array is the same
        if xs[i] != xs[len(xs)-(i + 1)] {
            return false // If it isn't the integere is not a palindrome
        }
    }

    return true // Found nothing wrong with the integer, must be a palindrome
}
