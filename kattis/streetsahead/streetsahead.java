import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * Solution for the https://open.kattis.com/problems/streetsahead
 *
 * @author Taras Basiuk
 */
public class streetsahead {

  public static void main(String[] args) {

    try (final Scanner sc = new Scanner(System.in)) {

      // Read in n and q
      final int n = sc.nextInt();
      final int q = sc.nextInt();
      sc.nextLine(); // Consume the trailing '\n'

      // Read in the map from street names to their positions on the road.
      final Map<String, Integer> map = new HashMap<>();
      for (int i = 0; i < n; i++) {
        map.put(sc.nextLine(), i);
      }

      // For every driver...
      for (int i = 0; i < q; i++) {

        // Read in the source and destination streets
        final String[] src_dest = sc.nextLine().split(" ");

        // Calculate the travel distance
        int dist = map.get(src_dest[0]) - map.get(src_dest[1]);
        dist = (dist > 0 ? dist : -dist) - 1;

        // Output the result
        System.out.println(dist);
      }
    }
  }
}
