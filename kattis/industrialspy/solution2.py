"""
    Solution for the https://open.kattis.com/problems/industrialspy

    This approach generates combinations and permutations of the input digits first and then uses simple check for primality.
"""

__author__ = "Taras Basiuk"

import itertools
from math import ceil, sqrt

# Read in the number of test cases
c = int(input().strip())

# For every test case
for _ in range(c):

    # We'll store inputs as digit characters
    digits = list(input().strip())

    result = 0 # This tracks primes we find, set because there will be duplicates

     # We'll use this to de-duplicate the candidates produced by duplicate combinations and remove 0 and 1 from prime consideration
    candidates = set([0, 1])

    # We consider combinations of length from 1 to all digits
    for r in range(1, len(digits) + 1):

        # We generate combinations, few of which will be identical due to repeated digits
        for combination in itertools.combinations(digits, r):

            # For every combination we produce permutations
            for permutation in itertools.permutations(combination):

                # We produce the resulting number and check it for primality
                candidate = int("".join(permutation))

                # If we already checked this one, move along
                if candidate in candidates:
                    continue

                # record this candidate for the future
                candidates.add(candidate)

                # Calculate the maximum factor we'll have to check on our candidate
                max_factor = ceil(sqrt(candidate))

                prime = True # Is prime?

                # Check all the possible factors
                for f in range(2, max_factor + 1):
                    if candidate % f == 0 and candidate != f:
                        prime = False
                        break

                # Increment result if it's a prime
                result += 1 if prime else 0

    print(result) # Report total number of unique primes found as the result
