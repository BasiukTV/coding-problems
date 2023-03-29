/** 
 * Solution for https://leetcode.com/problems/largest-perimeter-triangle/
 *
 * @auhor Taras Basiuk
 */
function largestPerimeter(nums: number[]): number {

    // Sort the nums in descending order
    nums.sort((a, b) => {return b - a;});

    // Record the largest perimeter encountered
    let largest_perimeter: number = 0;

    // Consider every number (but the last two) for the first triangle side
    for (let s1i: number = 0; s1i < nums.length - 2; s1i++) {
        let s1: number = nums[s1i];

        /**
         * Starting from s1i + 1 and s1i + 2, consider every pair of 
         * adjacent numbers for other two triangle sides.
         */
        for (let s2i: number = s1i + 1; s2i < nums.length - 1; s2i++) {
            let s2: number = nums[s2i];

            // If the second side is half or less than first, no triangle
            if (s2 <= Math.floor(s1 / 2)) {
                break;
            }

            let s3: number = nums[s2i + 1];

            /**
             * If we can make a triangle of s1, s2, s3 it has the largest
             * perimeter possible (du to sorting).
             */
            if (s2 + s3 > s1) {
                largest_perimeter = s1 + s2 + s3;
                break;
            }
        }

        // If a perimeter found, no need to look further.
        if (largest_perimeter !== 0) {
            break;
        }
    }
    
    return largest_perimeter; // Return the largest perimeter, if found.
};
