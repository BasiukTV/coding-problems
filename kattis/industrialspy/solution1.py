"""
    Solution for the https://open.kattis.com/problems/industrialspy

    This approach pre-computes all possible primes before combinations and permutations of the input digits are considred.
"""

__author__ = "Taras Basiuk"

# Read in the number of test cases
c = int(input().strip())

# Container for holding test case inputs
inputs = []

# Largest number we should consider for primaity across the test cases
largest_number = 0

# Step 1. Read in the inputs.
for _ in range(c):

    # We'll store inputs as digit characters sorted in descending order
    inputs.append(list(reversed(sorted(input().strip()))))

    # What's the largest number can we make out of current input?
    largest_candidate = int("".join(inputs[-1]))

    # If candidate is largest number encuntered so far, update the largest number
    largest_number = largest_candidate if largest_candidate > largest_number else largest_number

# Step 2. We'll use Sieve of Eratosthenes algorithm to find all prime numbers up the largest number

# Container for the found prime numbers
primes = set()

# Array determining if the integer number is prime or not
prime_candidates = [True] * (largest_number + 1)

from math import sqrt, ceil

# Largest factor we have to consider for the primality check
largest_factor = ceil(sqrt(largest_number))

# Consider all integers from 2 to largest_number
for i in range(2, largest_number + 1):

    # If the candidate still wasn't eliminated from primes it's a prime
    if prime_candidates[i]:

        # Record another prime
        primes.add(i)

        # if the candidate is larger than largest_factor all its multiples were already eliminated from prime candidates...
        if i > largest_factor:
            continue

        # ... otherwise we need to eliminate them
        multiple = 2 * i
        while multiple <= largest_number:
            prime_candidates[multiple] = False
            multiple += i

# Step 3. Finally, we will consider all permutations of the combinations of the input digits for primality

import itertools

# For every list of digits
for digits in inputs:

    result = set() # This tracks primes we find, set because there will be duplicates

    # We consider combinations of length from 1 to all digits
    for r in range(1, len(digits) + 1):

        # We generate combinations, few of which will be identical due to repeated digits
        for combination in itertools.combinations(digits, r):

            # For every combination we produce permutations
            for permutation in itertools.permutations(combination):

                # We produce the resulting number and check it for primality
                candidate = int("".join(permutation))
                if candidate in primes:
                    result.add(candidate) # Add to the result if prime

    print(len(result)) # Report total number of unique primes found as the result
