/**
 * Solution for https://leetcode.com/problems/min-cost-climbing-stairs/
 *
 * @author Taras Basiuk
 *
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    
    // Initialize the total cost array, adding two extra final steps at the end
    const total_cost = [];
    for (let i = 0; i < cost.length + 2; i++) {
        total_cost[i] = 0;
    }

    // Now going backwards from the last non-final step
    for (let i = cost.length - 1; i >= 0; i--) {
    
        /** 
         * The total cost of getting there would be cost[i] plus the smaller
         * of total_cost of getting to the one of the next two steps.
         */
        total_cost[i] = cost[i] + Math.min(total_cost[i + 1], total_cost[i + 2]);
    }

    // Return the smaller of starting from the first or the second step.
    return Math.min(total_cost[0], total_cost[1]);
};
