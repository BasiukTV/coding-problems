/**
 * Solution for https://leetcode.com/problems/design-hashmap
 *
 * @author Taras Basiuk
 */
class MyHashMap {

    constructor() {
        this.data = new Array(10000); // Allocate enough space
        this.prime = 7201460459; // Big prime we will use in hashing
    }

    // Simple hashing function evenly spreading keys over the buckets
    hash (key) {
        return (key * this.prime) % this.data.length;
    }

    put(key, val) {
        let h = this.hash(key); // Get the hash
        if (!this.data[h]) {
            // If there are no buckets for this hash, create one
            this.data[h] = [[key, val]];
        } else {

            // Otherwise look though the entries in the bucket
            let updated = false;
            for (let i = 0; i < this.data[h].length; i++) {

                // If there's already an entry for this key, update the value
                if (this.data[h][i][0] == key) {
                    this.data[h][i][1] = val;
                    updated = true;
                    break;
                }
            }

            // Otherwise, just add a new entry to the bucket
            if (!updated) {
                this.data[h].push([key, val]);
            }
        }
    }

    get(key) {

        // Is there a bucket for our hashed key?
        let h = this.hash(key);
        if (this.data[h]) {

            // Does the bucket contain the entry with our key?
            for (let i = 0; i < this.data[h].length; i++) {
                if (this.data[h][i][0] == key) {
                    return this.data[h][i][1]; // If so, return the value
                }
            }
        }

        // No mapping was found
        return -1;
    }

    remove(key) {
        
        // Is there a bucket for our hashed key?
        let h = this.hash(key);
        if (this.data[h]) {

            // Is there an entry for our key?
            for (let i = 0; i < this.data[h].length; i++) {
                if (this.data[h][i][0] == key) {
                    this.data[h][i][1] = -1; // If so, pretend to erase it.
                }
            }
        }
    }
};
