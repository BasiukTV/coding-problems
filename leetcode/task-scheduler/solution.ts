/**
 * Solution for https://leetcode.com/problems/task-scheduler
 *
 * @author Taras Basiuk
 */
function leastInterval(tasks: string[], n: number): number {

    // Build the map of unique tasks and their counts
    const unique: Map<string, number> = new Map();
    for (const task of tasks) {
        if (!unique.has(task)) {
            unique.set(task, 1);
        } else {
            unique.set(task, unique.get(task) + 1);
        }
    }

    // Map from timestamp to the (task, count) on cooldown
    const cooldown: Map<number, [string, number]> = new Map();

    let result: number = 0; // How long we will work on tasks?

    // While there are taks in unique or on cooldown
    while (unique.size > 0 || cooldown.size > 0) {

        // if there are tasks due exiting cooldown
        if (cooldown.has(result)) {

            // Return the task to the unique
            const task = cooldown.get(result)
            unique.set(task[0], task[1]);

            // Remove them from cooldown
            cooldown.delete(result);
        }

        if (unique.size !== 0) { // If there are any tasks to work on

            let next_task: string; // What task we will work on?
            let priority: number = 0; // Most important tasks is most frequent

            for (const key of unique.keys()) { // for every task in unique

                // If it's more frequent than what was seen before
                if (unique.get(key) > priority) {
                    next_task = key; // it's the most important task
                    priority = unique.get(key); // priority is (leftover) count
                }
            }

            // If this is the last count of task, or it has to go on cooldown
            if (priority == 1 || n > 0) {
                unique.delete(next_task); // remove it from workable tasks
            } else {
                // Otherwise, there are counts still, but no cooldown
                unique.set(next_task, priority - 1); // just decrement count
            }

            // If there are more counts of the task, and there is cooldown
            if (priority > 1 && n > 0) {
                // Put the task on cooldown due to exit on result + n + 1 time
                cooldown.set(result + n + 1, [next_task, priority - 1]);
            }

        } // if there are no tasks to work on, we're idle

        result += 1; // unit of work was done
    }

    return result;
};
