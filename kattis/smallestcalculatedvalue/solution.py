"""
    Solution for the https://open.kattis.com/problems/smallestcalculatedvalue

    As the solution space is small, we apply the brute-force approach here.
"""

from operator import add, sub, mul

__author__ = "Taras Basiuk"

# Read in the input
operands = list(map(int, input().strip().split()))

# Operators we will be usng in their function form
operators = [add, sub, mul]

# Container for the results after application of the last operator
results = set([operands[0]])

for i in range(2):  # We will apply the operators twice
    # Container for the possible resulst after application of the current operator
    new_results = set()

    for res in results:  # For every possible operator
        for op in operators:
            # Apply the operator and store the result
            new_results.add(op(res, operands[i + 1]))
        if res % operands[i + 1] == 0:  # Separately check if integer division is allowed
            new_results.add(res // operands[i + 1])

    results = new_results  # New results are old results for the next operator

# Now find the smallest non-negative result
smallest = 1000 ** 3  # The largest possible outcome
for res in results:
    # Check of one of the results is smaller and non-negative than the current smallest
    smallest = res if (res < smallest and res >= 0) else smallest

print(smallest)
