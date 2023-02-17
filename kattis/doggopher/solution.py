"""
    Solution to the - https://open.kattis.com/problems/doggopher
"""

__author__ = "Taras Basiuk"

from math import dist

# Read in the coordinates of the gopher and the dog
gx, gy, dx, dy = tuple(map(float, input().strip().split()))

# As the number of gopher holes is unknown we'll have to read them untill the EOF exception is thrown
try:
    while True:
        # Read in the next hole coordinates in the input file
        hx, hy = tuple(map(float, input().strip().split()))

        # Calculate the distance from said hole to the gopher, and to the dog
        dg = dist((hx, hy), (gx, gy))
        dd = dist((hx, hy), (dx, dy))

        # If the distance to the gopher is at least twice shorter than to the dog, the gopher can escape 
        if dg * 2 < dd:
            print(f"The gopher can escape through the hole at ({hx:.3f},{hy:.3f}).")
            break

except EOFError:
    # If we consumed the entire input file and the gopher found no safe hole - it cannot escape
    print("The gopher cannot escape.")
