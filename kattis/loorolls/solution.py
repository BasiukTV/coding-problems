"""
    Solution to the https://open.kattis.com/problems/loorolls
"""

__author__ = "Taras Basiuk"

# Read in the input
l, n = tuple(map(int, input().strip().split()))

# How much paper are we short after the first roll?
short = n - (l % n) if l % n != 0 else 0

# If we're short any paper, we'll need at least two rolls, otherwise one is enough.
k = 2 if short else 1

# Unless we're not short, or our shorts will cut the next roll evenly, we'll need more rolls.
while (short != 0) and (l % short != 0):
    k += 1

    # How short we will be after using the next roll?
    short = \
        n - ( # The shortage will be what we need, minus...
            (n - short) # The remainder of the previous roll, and...
            +
            (l % short) # The remainder of the current roll.
        )

# print the result
print(k)
