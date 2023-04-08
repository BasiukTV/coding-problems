/**
 * Solution for https://leetcode.com/problems/design-linked-list
 *
 * @author Taras Basiuk
 */
public class MyLinkedList {

    // Helper class representing the linked list node
    private class Node {
        public int val;
        public Node next;
    }

    private int size;
    private Node head; // First node of the list
    private Node tail; // Last node of the list

    // Just initialize the member variables of an empty list
    public MyLinkedList() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    
    public int Get(int index) {

        // If index is out of range, return -1
        if (index >= this.size) {
            return -1;
        }
        
        // Otherwise, iterate toward the target node and return its value
        Node it = this.head;
        for (int i = 1; i <= index; i++) {
            it = it.next;
        }

        return it.val;
    }
    
    public void AddAtHead(int val) {

        // Init the new node
        Node n = new Node();
        n.val = val;
        n.next = this.head; // New node will point toward old head
        this.head = n; // New head will point toward new node

        // If list was empty, new node is also tail
        if (size == 0) {
            this.tail = n;
        }

        this.size++; // List is now longer
    }
    
    public void AddAtTail(int val) {

        // Init the new node
        Node n = new Node();
        n.val = val;

        // If list is empty, new node is also head
        if (this.size == 0) {
            this.head = n;
        }

        // If list is not empty, old tail points to new node
        if (this.size > 0) {
            this.tail.next = n;
        }

        this.tail = n; // New node is now tail
        this.size++; // List is now longer
    }
    
    public void AddAtIndex(int index, int val) {

        // If index is out of range - do nothing
        if (index > this.size) {
            return;
        }

        // If index is zero, just call AddAtHead
        if (index == 0) {
            this.AddAtHead(val);
            return;
        }

        // If index is last, just call AddAtTail
        if (index == this.size) {
            this.AddAtTail(val);
            return;
        }

        // Init new node
        Node n = new Node();
        n.val = val; 

        // Iterate toward the node preceding to the new one
        Node it = this.head;
        for (int i = 1; i < index; i++) {
            it = it.next;
        }

        // New node points to what preceding node was pointing
        n.next = it.next;

        // Preceding node is now pointing to new node
        it.next = n;
        this.size++; // List is now longer
    }
    
    public void DeleteAtIndex(int index) {

        // If index is out of bounds - do nothing
        if (index >= this.size) {
            return;
        }

        if (index == 0) { // If deleting at the head
            this.head = this.head.next; // Head advances by one

            if (this.size == 1) { // If list only had a single node
                this.tail = null; // Tails is now (also) null
            }
        } else { // If not deleting at head

            // Iterate toward the preceding node
            Node it = this.head;
            for (int i = 1; i < index; i++) {
                it = it.next;
            }

            // Preceding node next now skips the target node
            it.next = it.next.next;

            // If deleting at the tail, tail points at preceding node
            if (index == this.size - 1) {
                this.tail = it;
            }
        }

        this.size--; // List is now shorter
    }

    private void printSelf() {
        //Console.Write($"Size: {this.size}, [");
        //Node it = this.head;
        //for (int i = 0; i < this.size; i++) {
        //    Console.Write($"{it.val}, ");
        //    it = it.next;
        //}
        //Console.Write("]\n");
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.Get(index);
 * obj.AddAtHead(val);
 * obj.AddAtTail(val);
 * obj.AddAtIndex(index,val);
 * obj.DeleteAtIndex(index);
 */
