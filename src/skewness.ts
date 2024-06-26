import { average, stdDev } from "./basics.ts";

/**
 * Computes the skewness of the data set.
 * @param numbers - Array of numbers
 * @param avg - Average of the array (optional, if provided, it will not be calculated again)
 * @param std_dev - Standard deviation of the array (optional, if provided, it will not be calculated again)
 * @returns Skewness value
 * @example
 * ```ts
 * skewness([1, 2, 3, 4, 5]); // 0
 * ```
 */
export function skewness(
  numbers: number[],
  avg?: number,
  std_dev?: number
): number {
  const n = numbers.length;
  const mean = avg || average(numbers);
  const std = std_dev || stdDev(numbers, avg);
  const skew = numbers.reduce((a, b) => a + (b - mean) ** 3, 0) / n;
  return skew / std ** 3;
}
