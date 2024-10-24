/**
 * Solution for - https://leetcode.com/problems/flip-equivalent-binary-trees
 *
 * Approach to the solution is simultaneous BFS of both trees, node by node.
 * When two nodes of both trees are considered, we compare their children and see
 * if they're equal, or can be swapped to become equal. If not, we return false.
 *
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func flipEquiv(root1 *TreeNode, root2 *TreeNode) bool {

    // If one root is null but the other once is not - trees cannot be flipped.
    if (root1 == nil) != (root2 == nil) {
        return false
    }

    // If both roots are nils - they're already flipped.
    if root1 == nil && root2 == nil {
        return true
    }

    // If the values of root nodes are different - thye cannot be flipped.
    if root1.Val != root2.Val {
        return false
    }

    levelSize := 1 // root level of both trees only has one node (root)

    // Populate the current level slices with the root nodes
    currentLevel1 := make([]*TreeNode, levelSize)
    currentLevel1[0] = root1

    currentLevel2 := make([]*TreeNode, levelSize)
    currentLevel2[0] = root2

    // Track wether there are nodes on the next level, if not - stop
    nodesOnNextLvl := true
    for nodesOnNextLvl {

        // Next level will have twice as many nodes on them, prepare their slices
        levelSize *= 2
        nextLevel1 := make([]*TreeNode, levelSize)
        nextLevel2 := make([]*TreeNode, levelSize)
        nodesOnNextLvl = false // Assume there won't be any nodes on the next level

        // Iterate over the nodes on the current level
        for i := 0; i < len(currentLevel1); i++ {

            // If there are no nodes in this position of the slice - continue
            if currentLevel1[i] == nil {
                continue
            }

            // If this node has a left child...
            if currentLevel1[i].Left != nil {

                // Check if the second tree has left child with the same value
                if currentLevel2[i].Left != nil &&
                    currentLevel1[i].Left.Val == currentLevel2[i].Left.Val {

                    // If only one of the trees has a right child...
                    if (currentLevel1[i].Right == nil) != (currentLevel2[i].Right == nil) {
                        return false // ... trees cannot be flipped
                    }

                    // If both trees have right children, but with different values...
                    if currentLevel1[i].Right != nil &&
                        currentLevel1[i].Right.Val != currentLevel2[i].Right.Val {

                        return false // ... trees cannot be flipped
                    }

                    // Right children are equal, just record the children on the next level slice
                    nextLevel1[2 * i] = currentLevel1[i].Left
                    nextLevel1[(2 * i) + 1] = currentLevel1[i].Right
                    nextLevel2[2 * i] = currentLevel2[i].Left
                    nextLevel2[(2 * i) + 1] = currentLevel2[i].Right
                    nodesOnNextLvl = true // There are nodes on the next level (now)

                // Check if second tree has a right child of the same value as left child of first
                } else if currentLevel2[i].Right != nil &&
                    currentLevel1[i].Left.Val == currentLevel2[i].Right.Val {

                    // Only one of first tree right child and second tree left child exist...
                    if (currentLevel1[i].Right == nil) != (currentLevel2[i].Left == nil) {
                        return false // ... the trees cannot be flipped.
                    }

                    // Both above children exist but have different values...
                    if currentLevel1[i].Right != nil && currentLevel1[i].Right.Val != currentLevel2[i].Left.Val {
                        return false // ... the trees cannot be flipped.
                    }

                    // First tree children have to be flipped on the next level
                    nextLevel1[2 * i] = currentLevel1[i].Right
                    nextLevel1[(2 * i) + 1] = currentLevel1[i].Left
                    nextLevel2[2 * i] = currentLevel2[i].Left
                    nextLevel2[(2 * i) + 1] = currentLevel2[i].Right
                    nodesOnNextLvl = true // There are nodes on the next level (now)
                } else {
                    // Left child node is not equal to anything - trees cannot be flipped
                    return false
                }

            // First tree node has no left child, but has a right one...
            } else if currentLevel1[i].Right != nil {

                // Check if the second tree left child equal to first tree right child
                if currentLevel2[i].Left != nil &&
                    currentLevel1[i].Right.Val == currentLevel2[i].Left.Val {

                    // If second tree has right child (and first one has no left)
                    if currentLevel2[i].Right != nil {
                        return false // ... the trees cannot be flipped.
                    }

                    // Switch first tree right child to the left on next level
                    nextLevel1[2 * i] = currentLevel1[i].Right
                    nextLevel2[2 * i] = currentLevel2[i].Left
                    nodesOnNextLvl = true // There are nodes on the next level (now)

                // Check if the second tree right child equal to first tree right child
                } else if currentLevel2[i].Right != nil &&
                    currentLevel1[i].Right.Val == currentLevel2[i].Right.Val {

                    // If second tree has left child (and first one has no left)
                    if currentLevel2[i].Left != nil {
                        return false // ... the trees cannot be flipped.
                    }

                    // Record children to the next level as is
                    nextLevel1[(2 * i) + 1] = currentLevel1[i].Right
                    nextLevel2[(2 * i) + 1] = currentLevel2[i].Right
                    nodesOnNextLvl = true // There are nodes on the next level (now)
                } else {
                    // Left child node is not equal to anything - trees cannot be flipped
                    return false
                }

            // Current node of first tree has no children - check that it's the same in the second ...
            } else if currentLevel2[i].Left != nil || currentLevel2[i].Right != nil {
                return false // ... otherwise the trees cannot be flipped.
            }
        }

        // Next level nodes will ne current level nodes during next iteration.
        currentLevel1 = nextLevel1
        currentLevel2 = nextLevel2
    }

    return true // Found nothing unflippable with the trees.
}
