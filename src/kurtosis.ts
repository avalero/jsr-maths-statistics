import { average, stdDev } from "./basics.ts";

/**
 * Compute the kurtosis of an array of numbers.
 * @param numbers - Array of numbers
 * @param avg - Average of the array (optional, if provided, it will not be calculated again)
 * @param std_dev - Standard deviation of the array (optional, if provided, it will not be calculated again)
 * @returns Kurtosis value
 * @example
 * ```ts
 * kurtosis([1, 2, 3, 4, 5]); // -1.3
 * ```
 * @example
 * ```ts
 * kurtosis([1, 2, 3, 4, 5, 6]); // -1.268
 * ```
 */
export function kurtosis(
  numbers: number[],
  avg?: number,
  std_dev?: number
): number {
  const n = numbers.length;
  const mean = avg || average(numbers);
  const std = std_dev || stdDev(numbers, avg);
  const kurt = numbers.reduce((a, b) => a + (b - mean) ** 4, 0) / n;
  return kurt / std ** 4 - 3;
}
