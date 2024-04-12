import { assertAlmostEquals, assertEquals } from "jsr:@std/assert";
import { average, variance, stdDev, median, mode, range } from "../basics.ts";

Deno.test("average", () => {
  assertAlmostEquals(average([1, 2, 3, 4, 7]), 3.4);
});

Deno.test("Stats variance", () => {
  assertAlmostEquals(variance([1, 2, 3, 4, 7]), 4.24, 0.001);
});

Deno.test("stdDev", () => {
  assertAlmostEquals(stdDev([1, 2, 3, 4, 7]), 2.06, 0.001);
});

Deno.test("median", () => {
  assertEquals(median([1, 2, 3, 4, 7]), 3);
});

Deno.test("mode", () => {
  assertEquals(mode([1, 2, 3, 4, 7, 7, 7, 7]), 7);
});

Deno.test("range", () => {
  assertEquals(range([1, 2, 3, 4, 7]), 6);
});
