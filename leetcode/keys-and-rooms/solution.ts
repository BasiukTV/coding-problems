/**
 * Solution for https://leetcode.com/problems/keys-and-rooms
 *
 * @author Taras Basiuk
 */
function canVisitAllRooms(rooms: number[][]): boolean {

    // Maintain the set of unvisited rooms
    const unvisited: Set<number> = new Set<number>([...Array(rooms.length).keys()]);
    unvisited.delete(0);

    // Make an exploratio queue of the rooms for which there were keys in the first room
    const exploration: number[] = rooms[0];

    // Also, mark all those rooms as visited
    for (let key of exploration) {
        unvisited.delete(key);
    }

    while (exploration.length > 0) { // While there are unexplored rooms
        const room: number = exploration.pop(); // Open the room

        // For every key in the room
        for (let key of rooms[room]) {
            if (unvisited.has(key)) { // If the key is new
                unvisited.delete(key); // Mark that room as visited
                exploration.push(key); // Place the key into the exploration queue
            }
        }

        if (unvisited.size == 0) { // If visited all rooms - we're done
            return true;
        }
    }

    return false; // Some rooms left unvisited
};
