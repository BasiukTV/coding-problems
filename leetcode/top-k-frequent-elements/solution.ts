/**
 * Solution for https://leetcode.com/problems/top-k-frequent-elements
 *
 * @author Taras Basiuk
 */
function topKFrequent(nums: number[], k: number): number[] {

    // Count the elements
    const count: Map<number, number> = new Map();
    for (let n of nums) {
        if (!count.has(n)) {
            count.set(n, 1);
        } else {
            count.set(n, count.get(n) + 1);
        }
    }

    // Convery the map into an array of entries
    const top_counts = []
    for (let [k, v] of count) {
        top_counts.push([v, k]);
    }

    // Sort the array by the decreasing number of element occurances
    top_counts.sort((a, b) => b[0] - a[0]);

    // Keep first K elements of the array, and drop off the counts
    return top_counts.slice(0, k).map((a) => a[1]);
};
