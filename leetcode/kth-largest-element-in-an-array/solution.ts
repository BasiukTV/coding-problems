/**
 * Solution for https://leetcode.com/problems/kth-largest-element-in-an-array
 * Approach is the partial quick sort.
 *
 * @author Taras Basiuk
 */
function findKthLargest(nums: number[], k: number): number {
    
    // Shuffle the numbers - adopted from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (let i = nums.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Begining and of the sorted region and the pivot
    let begin: number = 0;
    let end: number = nums.length - 1;
    let pivot: number = end;

    while (true) {

        // Going from the begining of the aray, until we hit pivot
        for (let i: number = begin; i < pivot; i++) {

            // If curent number is larger then pivot, we need to swap
            // pivot with the preceding number, and then swap current
            // number with the number preceding pivot.
            if (nums[i] > nums[pivot]) {
                if (i + 1 == pivot) {
                    // If current number is next to pivot, we just swap
                    [nums[pivot], nums[i]] = [nums[i], nums[pivot]];
                } else {
                    // Otherwise move three numbers arond as described
                    const tmp: number = nums[pivot - 1];
                    nums[pivot - 1] = nums[pivot];
                    nums[pivot] = nums[i];
                    nums[i] = tmp;
                }

                // Since swap happened, we need to re-axamine i number
                pivot--; // Also, pivot moved
                i--;
            }
        }

        // If pivot happens to be the k highest number, we're done
        if (pivot == nums.length - k) {
            break;
        }

        // Otherwise readjust the sorting range
        if (pivot < nums.length - k) {
            begin = pivot + 1; 
        } else {
            end = pivot - 1;
        }
        pivot = end;
    }

    // Return the k highest number from partially sorted array
    return nums[nums.length - k];
};
