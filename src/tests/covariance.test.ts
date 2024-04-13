import { assertAlmostEquals, assertEquals } from "jsr:@std/assert";
import { covariance } from "../covariance.ts";

Deno.test("covariance", () => {
  assertAlmostEquals(covariance([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), -2.0);
});

// throws an error if the length of x and y is not the same
Deno.test(
  "covariance throws an error if the length of x and y is not the same",
  () => {
    try {
      covariance([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]);
    } catch (e) {
      assertEquals(e.message, "Arrays must be of the same length");
    }
  }
);
