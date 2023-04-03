/**
 * Solution for https://leetcode.com/problems/boats-to-save-people/
 *
 * @author Taras Basiuk
 */
function numRescueBoats(people: number[], limit: number): number {
    people.sort((a, b) => b - a); // sort people is decreasing weight order

    let boats: number = 0;
    for (let i: number = 0; i < people.length; i++) {
        boats++; // Heaviest person is guaranteed to fit in the boat

        // If the lightest person also fits in the boat, remove them from list
        if (people[people.length - 1] <= limit - people[i]) {
            people.pop();
        }
    }

    return boats;
};
