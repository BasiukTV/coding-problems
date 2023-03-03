#include <iostream>

/**
 * Solution to the https://open.kattis.com/problems/blueberrywaffle
 *
 * @author Taras Basiuk
 */
int main(void)
{
  // Read in r and f
  int r, f;
  std::cin >> r >> f;

  // Calculate how many full half-rotations did the waffle complete and how much of a incomplete half rotation is incomplete.
  int half_rotations = f / r;
  int rem_rotation = f % r;

  // Check wether the incomplete half rotation is closer to being complete or not started.
  if (rem_rotation * 2 > r)
  {
    half_rotations += 1;
  }

  // Based on how many full half rotations were complete - output the result.
  std::cout << ((half_rotations % 2 == 0) ? "up" : "down") << std::endl;
  return 0;
}
