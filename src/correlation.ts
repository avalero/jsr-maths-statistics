import { average, stdDev } from "./basics.ts";
import { covariance } from "./covariance.ts";

/**
 * Compute the correlation between two datasets.
 * @param x the first dataset
 * @param y the second dataset
 * @param std_dev_1 the standard deviation of the first dataset (optional, if provided, it will not be calculated again)
 * @param std_dev_2 the standard deviation of the second dataset (optional, if provided, it will not be calculated again)
 * @returns the correlation between x and y
 * @throws an error if the length of x and y is not the same
 * @example
 * ```ts
 * correlation([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]) // 1
 * ```
 */
export function correlation(
  x: number[],
  y: number[],
  std_dev_1?: number,
  std_dev_2?: number
): number {
  if (x.length !== y.length) {
    throw new Error("The length of x and y should be the same");
  }
  const stdDevX = std_dev_1 || stdDev(x);
  const stdDevY = std_dev_2 || stdDev(y);

  return covariance(x, y) / (stdDevX * stdDevY);
}
