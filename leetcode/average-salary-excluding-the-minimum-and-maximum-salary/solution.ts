/**
 * Solution for https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 *
 * @author Taras Basiuk
 */
function average(salary: number[]): number {

    // Iterate through the array looking for min, max salary and the sum of all
    let min: number = 1000001;
    let max: number = 999;
    let sum: number = 0;
    for (let s of salary) {
        sum += s;
        min = Math.min(min, s);
        max = Math.max(max, s);
    }

    // Return the average of the slaries excluding the min and max
    return (sum - min - max) / (salary.length - 2);
};
