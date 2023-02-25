"""
    Solution for the https://open.kattis.com/problems/mazeman

    Idea of the solution is to run a depth-first search for every player
    and record if they find dots no one else found.
"""

__author__ = "Taras Basiuk"

# Read in number of rows and columns
R, C = tuple(map(int, input().strip().split()))

# Read in the board
board = []
dots = 0  # Number of dots on the board
for _ in range(R):
    new_row = input().strip()  # Read in the new row
    dots += new_row.count('.')  # Count new dots in the new row

    # Split row in characters and add them to the board
    board.append(list(new_row))

# List of player positions
players = {}

# Look for players in the first and last row
for i in [0, R - 1]:
    for j in range(C):
        c = board[i][j]
        if c >= 'A' and c <= 'W':
            players[c] = (i, j)

# Look for players in first and last column
for i in range(1, R - 1):
    for j in [0, C - 1]:
        c = board[i][j]
        if c >= 'A' and c <= 'W':
            players[c] = (i, j)

# Number of players who were found to be able to consume additional dots
useful_players = 0

# List of moves (positions adjustments) we're allowed to make on the board
moves = [(1, 0), (-1, 0), (0, 1), (0, -1)]

for p in players:  # For every discovered player
    start_r, start_c = players[p]  # Player's starting row and column

    useful = False  # Are we useful?
    visited = set([(start_r, start_c)])  # Positions visited by this player
    exploration = [(start_r, start_c)]  # Positions we're currently exploring

    while exploration:  # While there's still something to explore
        cur_r, cur_c = exploration.pop()  # Get the current position

        for mv in moves:  # For every possible move
            # New position if we were to take this move
            new_r, new_c = cur_r + mv[0], cur_c + mv[1]

            # Did we visit this position before?
            if (new_r, new_c) in visited:
                continue

            # Did we run off the board?
            if new_r < 0 or new_r >= R or new_c < 0 or new_c >= C:
                continue

            # Did we hit an 'X' or another player?
            if board[new_r][new_c] >= 'A' and board[new_r][new_c] <= 'X':
                continue

            # Did we found a new dot?
            if board[new_r][new_c] == '.':
                useful = True
                dots -= 1

            # Erase the contents of this position
            board[new_r][new_c] = ' '

            # Add this position to the exploration queue
            exploration.append((new_r, new_c))

            # Add this position to the visited set
            visited.add((new_r, new_c))

    # Update the number of useful players
    useful_players += 1 if useful else 0

# Print out the result
print(useful_players, dots)
