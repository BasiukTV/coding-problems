/*
 * Solution for - https://leetcode.com/problems/most-beautiful-item-for-each-query
 *
 * Approach to the solution is to sort the items by the price. Then we iterate over
 * the items and set the beaty of each item to the max beuty that can be caught for
 * the item's price or below. We then bisect the items list for every query price.
 */
func maximumBeauty(items [][]int, queries []int) []int {

    // Sort the items by the price. If the price is the same, place the pretiest first.
    sort.Slice(items, func(i, j int) bool {
        if items[i][0] == items[j][0] {
            return items[i][1] > items[j][1]
        }

        return items[i][0] < items[j][0]
    })

    most_beauty := 0 // Running most beutiful item encountered so far
    for i, _ := range items {
        if items[i][1] > most_beauty { // If the current item is most beutiful ...
            most_beauty = items[i][1]  // ... update the most beutiful ...
        } else {
            items[i][1] = most_beauty  // ... otherwise update the item beuty.
        }
    }

    answer := make([]int, 0)    // Prepare the answers collection.
    for _, q := range queries { // Iterate over the queries.

        // Find the insertion index for the query current price by using bisect.
        pi := sort.Search(len(items), func(i int) bool {
            return items[i][0] > q
        })

        if pi == 0 {                   // If we have too little money ...
            answer = append(answer, 0) // ... we can't by anything ...
        } else {                       // ... otherwise return the purchased beuty.
            answer = append(answer, items[pi - 1][1])
        }
    }

    return answer
}
