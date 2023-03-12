/**
 * Solution for https://leetcode.com/problems/implement-queue-using-stacks
 *
 * @author Taras Basiuk
 */
class MyQueue {

    final LinkedList<Integer> first;
    final LinkedList<Integer> second;

    public MyQueue() {
        // Just initialize the two stacks.
        this.first = new LinkedList<>();
        this.second = new LinkedList<>();
    }

    public void push(int x) {
        // To restore the insertion order we move items from second to first stack
        while (!second.isEmpty()) {
            first.push(second.pop());
        }

        // Adding another item, continuing the correct insertion order
        first.push(x);
    }

    public int pop() {
        // To produce the extraction order we move items from the first to second stack
        while (!first.isEmpty()) {
            second.push(first.pop());
        }

        // Returning item that was on the bottom of the first stack, so FIFO works
        return second.pop();
    }

    public int peek() {
        // Doing the same thing as for pop...
        while (!first.isEmpty()) {
            second.push(first.pop());
        }

        // ... but nor removing the first item
        return second.peek();
    }

    public boolean empty() {
        // If either of the stacks is not empty, the queue is not empty
        return first.isEmpty() && second.isEmpty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
