import { assertAlmostEquals, assertEquals } from "jsr:@std/assert";
import { correlation } from "../correlation.ts";

Deno.test("correlation", () => {
  assertAlmostEquals(correlation([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), 1);
});

// throws an error if the length of x and y is not the same
Deno.test(
  "correlation throws an error if the length of x and y is not the same",
  () => {
    try {
      correlation([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]);
    } catch (e) {
      assertEquals(e.message, "The length of x and y should be the same");
    }
  }
);
