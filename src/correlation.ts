import { average, stdDev } from "./basics.ts";
import { covariance } from "./covariance.ts";

/**
 * Compute the correlation between two datasets.
 * @param x the first dataset
 * @param y the second dataset
 * @returns the correlation between x and y
 * @throws an error if the length of x and y is not the same
 * @example
 * ```ts
 * correlation([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]) // 1
 * ```
 */
export function correlation(x: number[], y: number[]): number {
  if (x.length !== y.length) {
    throw new Error("The length of x and y should be the same");
  }
  const stdDevX = stdDev(x);
  const stdDevY = stdDev(y);

  return covariance(x, y) / (stdDevX * stdDevY);
}
