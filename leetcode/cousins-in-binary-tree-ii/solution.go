/**
 * Solution for - https://leetcode.com/problems/cousins-in-binary-tree-ii
 *
 * Approach to the solution is two passes of breadth first search over the tree.
 * First pass is to calculate the sum of values on the same tree level.
 * Second pass will examine every node, and replace the values of that node's children
 * with the sum of values on children's level minus the sum of children values.
 *
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func replaceValueInTree(root *TreeNode) *TreeNode {
    levelSums := list.New(); // List of tree level value sums
    
    currentLevel := list.New(); // List of the nodes belonging to the same level...
    currentLevel.PushBack(root); // ... starting with just the root (top level).

    // First BFS tree traversal
    for currentLevel.Len() > 0 { // While there are any nodes on the current level...
        nextLevel := list.New(); // ... prepare the list for the next level nodes...
        var levelSum int64 = 0; // ... and keep the running sum of all the values of this level.

        // Go over the current level nodes...
        for e := currentLevel.Front(); e != nil; e = e.Next() {
            node := e.Value.(*TreeNode); // ... retieve the current node ...
            levelSum += int64(node.Val); // ... and add its value to the running sum.

            // If the node has left child, add it to the next level.
            if (node.Left != nil) {
                nextLevel.PushBack(node.Left);
            }

            // If the node has right child, add it to the next level.
            if (node.Right != nil) {
                nextLevel.PushBack(node.Right);
            }
        }

        // Now that we finished the current level traversal...
        levelSums.PushBack(levelSum); // ... record the running sum of values ...
        currentLevel = nextLevel; // ... and the next level will be the current level now.
    }

    root.Val = 0; // New value at root will always be zero
    levelSumE := levelSums.Front(); // Keep track of current Level Sum list element

    currentLevel = list.New(); // Re-initialize the current level with just the root
    currentLevel.PushBack(root);

    // First BFS tree traversal
    for currentLevel.Len() > 0 {
        levelSumE = levelSumE.Next(); // Check out the next level values sum list element
        if (levelSumE == nil) {
            break // If the next level is empty - we're done.
        }

        // Get the levelSum value out of the list element
        var levelSum int64 = levelSumE.Value.(int64);

        nextLevel := list.New(); // Prepare the next level nodes container

        // Traverse the current level nodes
        for e := currentLevel.Front(); e != nil; e = e.Next() {
            node := e.Value.(*TreeNode); // Get the node out of the list element

            var childSum int64 = 0; // Sum of child node value

            // If left child existis, add its value to childSum and add it to nextLevel
            if (node.Left != nil) {
                childSum += int64(node.Left.Val);
                nextLevel.PushBack(node.Left);
            }

            // If right child existis, add its value to childSum and add it to nextLevel
            if (node.Right != nil) {
                childSum += int64(node.Right.Val);
                nextLevel.PushBack(node.Right);
            }

            // If left child existis, set its vale to levelSum - childSum
            if (node.Left != nil) {
                node.Left.Val = int(levelSum - childSum);
            }

            // If right child existis, set its vale to levelSum - childSum
            if (node.Right != nil) {
                node.Right.Val = int(levelSum - childSum);
            }
        }

        // Done with the current level, time to start on the next one
        currentLevel = nextLevel;
    }
    
    return root; // Return the root of the modified tree
}
