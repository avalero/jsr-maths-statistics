import { average } from "./basics.ts";

/**
 * Covariance is a measure of how much two random variables change together.
 * @param x the first array
 * @param y the second array
 * @param avg1 the average of the first array (optional, if provided, it will not be calculated again)
 * @param avg2 the average of the second array (optional, if provided, it will not be calculated again)
 * @returns the covariance of x and y
 * @throws an error if the length of x and y is not the same
 * @example
 * ```ts
 * covariance([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]) // 2.5
 * ```
 */
export function covariance(
  array1: number[],
  array2: number[],
  avg1?: number,
  avg2?: number
): number {
  const length = array1.length;
  if (length !== array2.length) {
    throw new Error("Arrays must be of the same length");
  }
  const mean1 = avg1 || average(array1);
  const mean2 = avg2 || average(array2);
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += (array1[i] - mean1) * (array2[i] - mean2);
  }

  return sum / length;
}
