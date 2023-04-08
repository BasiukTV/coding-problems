/**
 * Solution for https://leetcode.com/problems/clone-graph
 *
 * @author Taras Basiuk
 *
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {

    // If graph is empty, return empty copy
	if (node == null) {
        return null;
    }

    // Copy for copying over the adjacency of the nodes
    const copy_queue: Node[] = [node];

    // Original to Copy map, for linking copy node together 
    const otc: Map<Node, Node> = new Map<Node, Node>();
    
    // Make and remember the first node copy
    const firstCopy: Node = new Node(node.val);
    otc.set(node, firstCopy);

    while (copy_queue.length > 0) { // While not all links where copied

        // Retrieve the original node and the corresponding copy
        const original: Node = copy_queue.pop();
        const copy: Node = otc.get(original);

        // For every neighbour of the original node 
        for (let neighbor of original.neighbors) {
            let neighborCopy: Node;

            // If there's already a corresponding copy ...
            if (otc.has(neighbor)) {
                neighborCopy = otc.get(neighbor); // ... just get it ...
            } else {
                // ... otherwise create the copy
                neighborCopy = new Node(neighbor.val);

                otc.set(neighbor, neighborCopy); // make the copy
                copy_queue.push(neighbor); // populate the copy links later
            }

            // Link the copy node to the neighbour copy node
            copy.neighbors.push(neighborCopy);
        }
    }

    // Return the first copy after all other nodes where copied and linked
    return firstCopy;
};
