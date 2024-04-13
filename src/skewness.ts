import { average, stdDev } from "./basics.ts";

/**
 * Computes the skewness of the data set.
 * @param numbers - Array of numbers
 * @returns Skewness value
 * @example
 * ```ts
 * skewness([1, 2, 3, 4, 5]); // 0
 * ```
 */
export function skewness(numbers: number[]): number {
  const n = numbers.length;
  const mean = average(numbers);
  const std = stdDev(numbers);
  const skew = numbers.reduce((a, b) => a + (b - mean) ** 3, 0) / n;
  return skew / std ** 3;
}
