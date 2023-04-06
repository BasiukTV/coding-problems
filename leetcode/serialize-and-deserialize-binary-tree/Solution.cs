/**
 * Solution for https://leetcode.com/problems/serialize-and-deserialize-binary-tree
 *
 * @author Taras Basiuk
 *
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

    private int id = 0; // Node id to differentiate the node with the same value

    // Encodes a tree to a single string.
    public string serialize(TreeNode root) {

        // If tree is empty just return an empty string
        if (root == null) {
            return "";
        }

        // Assing node_id to this node
        string this_node_id = this.id.ToString();

        // If left child exists, assign new node_id to it and serialize its subtree
        string left_node_id = "";
        string left_subtree_serialized = "";
        if (root.left != null) {
            this.id++;
            left_node_id = this.id.ToString();
            left_subtree_serialized = serialize(root.left);
        }

        // If left child exists, assign new node_id to it and serialize its subtree
        string right_node_id = "";
        string right_subtree_serialized = "";
        if (root.right != null) {
            this.id++;
            right_node_id = this.id.ToString();
            right_subtree_serialized = serialize(root.right);
        }

        // Concatenate the seralization of this node with serializations of its left and right subtrees
        return $"{this_node_id},{root.val.ToString()},{left_node_id},{right_node_id}|" +
            left_subtree_serialized +
            right_subtree_serialized;
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(string data) {

        // If data is empty string, return empty string
        if (data == "") {
            return null;
        }

        // Dict for maping node ids to node objects
        Dictionary<int, TreeNode> dict = new Dictionary<int, TreeNode>();

        // Split the data into string serializations of the nodes
        string[] nodes = data.Split('|');

        // For every node goin backwards, parse out its id and value, create and retain Tree Node
        for (int i = nodes.Length - 2; i >= 0; i--) {
            string[] parsed_node = nodes[i].Split(',');

            // Create a node with just a value and save it in the dict
            int node_id = Convert.ToInt32(parsed_node[0]);
            dict[node_id] = new TreeNode(Convert.ToInt32(parsed_node[1]));

            // If the node has a left child, retrieve it from the dict and attach it to the node
            if (parsed_node[2] != "") {
                dict[node_id].left = dict[Convert.ToInt32(parsed_node[2])];
            }

            // If the node has a left child, retrieve it from the dict and attach it to the node
            if (parsed_node[3] != "") {
                dict[node_id].right = dict[Convert.ToInt32(parsed_node[3])];
            }
        }

        return dict[0]; // Return the root node
    }
}

// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// TreeNode ans = deser.deserialize(ser.serialize(root));
