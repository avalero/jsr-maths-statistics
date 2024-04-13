/**
 * Returns the quartile of a list of numbers
 * @param numbers - Array of numbers
 * @param quartile - Quartile to calculate
 * @returns Quartile value
 * @note quartile 0.5 means that it is the median
 * @note quartile 0.25 means that it is the first quartile
 * @note quartile 0.75 means that it is the third quartile
 * @note quartile 0.0 means that it is the minimum
 * @note quartile 1.0 means that it is the maximum
 * @example
 * ```ts
 * quartile([1, 2, 3, 4, 5], 0.5); // 3
 * ```
 */
export function quartile(numbers: number[], quartile: number): number {
  const sorted = numbers.sort((a, b) => a - b);
  const index = quartile * (sorted.length - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);
  if (lower === upper) {
    return sorted[lower];
  }
  return sorted[lower] + (sorted[upper] - sorted[lower]) * (index - lower);
}
