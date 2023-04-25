/**
 * Solution for https://leetcode.com/problems/smallest-number-in-infinite-set
 *
 * @author Taras Basiuk
 */
public class SmallestInfiniteSet {

    // Sorted set of integers that were removed from the set, but then put back
    private SortedSet<int> initialized;
    
    // Smallest integer in the set that was never initialized
    private int minUninit;

    public SmallestInfiniteSet() {
        this.initialized = new SortedSet<int>(); // initially empty
        this.minUninit = 1; // initially smallest positive integer
    }
    
    public int PopSmallest() {

        // If there's anything in the initialized
        if (this.initialized.Count() > 0) {

            // Return the smallest integer
            int tmp = this.initialized.Min;
            this.initialized.Remove(this.initialized.Min);
            return tmp;
        }
        
        // If there's nothing in initialized, initialize and return minUninit 
        this.minUninit++;
        return this.minUninit - 1;
    }
    
    public void AddBack(int num) {
        
        // If the numer is smaller than the largest number we ever initialized
        if (num < this.minUninit) {

            // Try putting it in initialized (it might be already there)
            this.initialized.Add(num);
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet obj = new SmallestInfiniteSet();
 * int param_1 = obj.PopSmallest();
 * obj.AddBack(num);
 */
