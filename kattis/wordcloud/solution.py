"""
    Solution for the https://open.kattis.com/problems/wordcloud
"""

from math import ceil

__author__ = "Taras Basiuk"

i = 0 # Test case counter
while True:

    # Read in the row width and number of words
    W, N = tuple(map(int, input().strip().split()))
    if W == 0 and N == 0: # If encountered end of input indicator, we're done
        break

    i, result = i + 1, 0 # Increment test case counter and initialize the result
    word_counts, words, max_count = {}, [], 0 # Dict for word counts, list of words, and total word counter
    for _ in range(N): # Read in the word counts
        word, count = input().strip().split()
        count = int(count)

        # Update the containers
        word_counts[word] = count
        words.append(word)
        max_count = count if count > max_count else max_count

    # Calculate word point sizes and widths
    word_point_sizes = {}
    word_widths = {}
    for word in words:
        word_point_sizes[word] = 8 + ceil((40 * (word_counts[word] - 4) / (max_count - 4)))
        word_widths[word] = ceil((9 * len(word) * word_point_sizes[word]) / 16)

    # Now we arrange words in rows
    available_width = W
    row_height = 0
    for word in words:

        # If there's no more space in the current row, start a new one
        if word_widths[word] > available_width:
            result += row_height # Record the height of the finished row

            # Restart the new row
            available_width = W
            row_height = 0

        # Substract the width of the word and the spacer from the row
        available_width -= (word_widths[word] + 10)

        # Check if the row requires more height
        row_height = word_point_sizes[word] if word_point_sizes[word] > row_height else row_height

    # Finish the last row
    result += row_height

    # Print out the result
    print(f'CLOUD {i}: {result}')
