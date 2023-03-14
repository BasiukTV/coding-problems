/**
 * Solution for https://leetcode.com/problems/rotting-oranges/
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {

        // Extract the grid row & column sizes
        int r = grid.size();
        int c = grid[0].size();

        // Vector of valid board moves
        vector<pair<int, int>> moves = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

        int time = 0; // clock
        while (true) {

            // The vector for the oranges that got rotten this time
            vector<pair<int, int>> rot;
            int fresh = 0; // How many oranges are still fresh?

            // Traverse the board once
            for (int i = 0; i < r; i++) {
                for (int j = 0; j < c; j++) {

                    // We don't care for empty cell or already rotten oranges
                    if (grid[i][j] == 0 || grid[i][j] == 2) {
                        continue;
                    }

                    // Will this fresh orange stay gresh this time?
                    bool stays_fresh = true;

                    // For every valid move on the board
                    for (pair<int, int> m : moves) {

                        // Cell coordinates of a fresh orange neighbor
                        int nr = i + m.first;
                        int nc = j + m.second;

                        // Is this neighbor on the board and is rotten?
                        if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 2) {
                            stays_fresh = false; // Our orange won't stay fresh
                            rot.push_back({i, j}); // record it's coordiantes
                            break;
                        }
                    }

                    // Increment fresh counter if our orange will stay fresh
                    if (stays_fresh) {
                        fresh++;
                    }
                }
            }

            // If no oranges went rotten this time
            if (rot.empty()) {
                // If no fresh oranges left we return time, -1 otherwise
                return fresh == 0 ? time : -1;
            }

            // Now we can actually mart to-rot oranges as rotten
            for (pair<int, int> cell : rot) {
                grid[cell.first][cell.second] = 2;
            }

            time++; // Increment the timer, we're not done yet
        }
    }
};
