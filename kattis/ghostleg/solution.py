"""
  Solution for the https://open.kattis.com/problems/ghostleg
"""

__author__ = "Taras Basiuk"

# Read in n and m
n, m = tuple(map(int, input().strip().split()))

# Read in the rungs
rungs = []
for _ in range(m):
    rungs.append(int(input().strip()))

# Container for the resulting permutation
permutation = [None] * n

# For every number in 1 .. n range
for i in range(1, n + 1):
    pos = i  # Starting position matches the number itself

    # For every rung of the ladder we check if it applies to current porition
    for j in range(m):

        # If the rung matches current position, postion should shift one to the right
        if pos == rungs[j]:
            pos += 1
            continue

        # If the rung starts to the left of current position, position should shift one left
        if pos == rungs[j] + 1:
            pos -= 1
            continue

    # After all rungs are passed, record the final position of the starting number
    permutation[pos - 1] = i

# Output the resulting permutation
for p in permutation:
    print(p)
