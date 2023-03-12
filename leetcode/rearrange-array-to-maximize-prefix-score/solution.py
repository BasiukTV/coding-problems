"""
    Solution for the https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/
"""

__author__ = "Taras basiuk"

class Solution:
    def maxScore(self, nums: List[int]) -> int:

        neg = [] # Container for the non-positive integers
        result = 0
        balance = 0 # How much of a balance the sum of the positive numbers will produce

        # Iterate through the number array
        for n in nums:
            if (n > 0) : # If the number is positive
                result += 1 # It will surely be added to the prefix
                balance += n # And it will cpntribute to the positive number balance
            else:
                neg.append(n) # If the number is non-positive - set it aside

        # Sort non-negative numbers in a descending order
        neg = list(reversed(sorted(neg)))

        # For every non-negative number starting from the largest (least negative) one
        for n in neg:
            balance += n # Add the negative number to the balance

            if balance > 0: # If the balance is still positive...
                result += 1 # ... the number will be included in the prefix.
            else:
                break

        return result # Return the prefix length

