/**
 * Solution for https://leetcode.com/problems/simplify-path
 *
 * @author Taras Basiuk
 */
class Solution {
    public String simplifyPath(String path) {
        
        // Results container
        final LinkedList<String> simlified = new LinkedList<>();
        
        // Split the input string into parst separated by '/'
        final String[] parts = path.split("/");
        for (final String part : parts) {
            switch (part) {
                case "": // Multiple '/' case, add nothing
                    break;
                case ".": // Current directory case, add nothing
                    break;
                case "..": // Remove the last directory added
                    simlified.pollLast();
                    break;
                default:
                    // Regular directory case, just add it to the list
                    simlified.add(part);
                    break;
            }
        }

        // If there's nothing in the simlified, just return the root path
        if (simlified.size() == 0) {
            return "/";
        }

        simlified.addFirst(""); // This adds starting '/' to the result

        // Connect the parts of the final simplified path with '/'
        return String.join("/", simlified);
    }
}
