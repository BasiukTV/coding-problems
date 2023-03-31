/**
 * Solution for https://leetcode.com/problems/next-greater-element-i/
 *
 * @author Taras Basiuk
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {

    const result: number[] = []; // Result container

    for (let n1 of nums1) {

        let foundN1: boolean = false; // Did we find n1 in n2 yet?
        let foundN2: boolean = false; // After we foundN1, did we find n2 larger than n1?

        for (let n2 of nums2) {

            // Check if we foundN1
            if (n1 == n2) {
                foundN1 = true;
                continue;
            }

            // Check if we foundN2
            if (foundN1 && n2 > n1) {
                result.push(n2);
                foundN2 = true;
                break;
            }
        }

        // If never foundN2, add -1 to the result
        if (!foundN2) {
            result.push(-1);
        }
    }

    return result;
};
