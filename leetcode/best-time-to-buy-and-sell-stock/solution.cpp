/**
 * Solution for https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * @author Taras Basiuk
 */
class Solution {
public:
    int maxProfit(vector<int>& prices) {

        // Initialize best buy and sell price as the price on the first day.
        int best_sell = prices[0];
        int best_buy = best_sell;

        /*
            Keep track of the best possible buy price if buying after the current best
            sell price was allowed (may be the same as current best_buy price).
        */
        int new_best_buy = best_sell;

        // Starting from the second day of prices...
        for (int i = 1; i < prices.size(); i++) {

            /*
                If the profit for selling on the current day and buying on
                new_best_buy day is larger than best known profit so far...
            */
            if (prices[i] - new_best_buy > best_sell - best_buy) {
                // ... we found new best possible profit.
                best_sell = prices[i];
                best_buy = new_best_buy;
            } else {
                // ... alternatively check if today might be the new_best_buy day.
                if (prices[i] < new_best_buy) {
                    new_best_buy = prices[i];
                }
            }
        }

        // Return the best possible profit
        return best_sell - best_buy;
    }
};
