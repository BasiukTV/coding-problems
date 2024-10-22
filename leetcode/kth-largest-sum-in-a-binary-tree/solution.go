/**
 * Solution for the - https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree
 *
 * Idea for the solution is the breadth first search of the tree, that uses lists
 * for all the nodes of the current level and all the nodes of the next level.
 * As we iterate over all the nodes of the current level we add their values to
 * a running sum, and their children to the next level nodes. We then same the
 * running sum to another list which we later sort and retrieve the Kth largest number.
 *
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func kthLargestLevelSum(root *TreeNode, k int) int64 {

    // We initialize the currentLevel list with just the root node
    currentLevel := list.New()
    currentLevel.PushBack(root)

    // Container for level sums
    levelSums := list.New()

    for currentLevel.Len() > 0 { // As long as current level has some nodes...
        newLevel := list.New() // ... prepare the container for the next level nodes
        var levelSum int64 = 0 // ... and the running sum of this level node values.

        // Go though the nodes of the current level
        for e := currentLevel.Front(); e != nil; e = e.Next() {
            node := e.Value.(*TreeNode)

            levelSum += int64(node.Val) // Add the node value to the running sum

            // If the node has left child - add it to the next level list
            if (node.Left != nil) {
                newLevel.PushBack(node.Left)
            }

            // If the node has right child - add it to the next level list
            if (node.Right != nil) {
                newLevel.PushBack(node.Right)
            }
        }

        levelSums.PushBack(levelSum) // Save the level sum to the list
        currentLevel = newLevel // New level list is now current level
    }

    // If there isn't enough levels in the tree, return -1
    if (levelSums.Len() < k) {
        return -1
    }

    // Save the levels sums into a slice and sort it
    var nodes []int64
    for e := levelSums.Front(); e != nil; e = e.Next() {
        nodes = append(nodes, e.Value.(int64))
    }

    sort.Slice(nodes, func(i, j int) bool {
        return nodes[i] > nodes[j] // Sorting in descending order
    })

    // Return the kth largest leve sum.
    return nodes[k - 1]
}
