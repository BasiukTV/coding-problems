/**
 * Solution to the https://open.kattis.com/problems/fadingwind
 *
 * @author Taras Basiuk
 */

// Sut up the input reading
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once('line', (line) => {
    // Read in the input.
    var [h, k, v, s] = line.split(' ').map(Number);

    // Container of the final result
    var travel = 0;

    // Implement the algorithms as it's described in the problem statement.
    while (h > 0) {
        v += s;
        v -= Math.max(1, Math.floor(v / 10));
        if (v <= 0) {
            [h, v] = [0, 0];
        } else {
            h += (v >= k) ? 1 : -1;
            v = (h == 0) ? 0 : v;
        }

        travel += v;
        s += (s > 0) ? -1 : 0;
    }

    // Output the final result.
    console.log(travel);
});