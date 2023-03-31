/**
 * Solution for https://leetcode.com/problems/min-stack/
 *
 * @author Taras Basiuk
 */
public class MinStack {

    private int[] data; // data container
    private int topi; // top of the stack index
    private int min; // Min number in the stack

    public MinStack() {

        // Initialize member variables of the empty stack
        this.data = new int[30000];
        this.topi = -1;
        this.min = 2147483647; // == 2**32 - 1
    }
    
    public void Push(int val) {

        // Advance top index and store the new value
        this.topi++;
        this.data[topi] = val;

        // Check if the new value is the new minimum
        if (val < this.min) {
            this.min = val;
        }
    }
    
    public void Pop() {

        // Check if the value on top of the stack is the minimum
        if (this.data[this.topi] == this.min) {

            // If so, find the new minimum
            int candidate = 2147483647;
            for (int i = 0; i <= this.topi - 1; i++) {
                if (this.data[i] < candidate) {
                    candidate = this.data[i];
                }
            }

            this.min = candidate;
        }

        // Just decrement the top element index
        this.topi--;
    }
    
    public int Top() {
        // Return the value on top of the stack
        return this.data[this.topi];
    }
    
    public int GetMin() {
        // Return the current minimum
        return this.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(val);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */
