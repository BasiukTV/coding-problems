/*
 * Solution for https://leetcode.com/problems/minimum-add-to-make-parentheses-valid
 * 
 * The solution approach is to keep track of the opening and closing parenthesis balance.
 * If we ever have more closing than opened parentheses, extra opened parenthesis
 * have to be inserted immediately. Otherwise, after the string iteration is done,
 * we add extra closing parentheses for every unmatched opened parenthese.
 */

func minAddToMakeValid(s string) int {
    var result int = 0 // result container
    var balance int = 0 // running parenthese balance
    for _, c := range s { // iterate ver characters in the string
        if c == '(' {
            balance += 1 // for opening parenthese, just update the balance
        } else {
            balance -= 1 // for closing one, check wether the balance is negative
            if balance < 0 { // if it is, we have to insert opened paranthesy immediately
                balance = 0
                result += 1
            }
        }
    }

    // after string iteration is done, add matchine closed parenthesy for every unmatched opened one
    return result + balance
}
