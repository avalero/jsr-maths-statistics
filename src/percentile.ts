/**
 * Calculate the percentile of a list of numbers
 * @param numbers - Array of numbers
 * @param percentile - Percentile to calculate
 * @returns Percentile value
 * @example
 * ```ts
 * percentile([1, 2, 3, 4, 5], 0.5); // 3
 * ```
 */
export function percentile(numbers: number[], percentile: number): number {
  const sorted = numbers.sort((a, b) => a - b);
  const index = (percentile / 100) * (sorted.length - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);
  if (lower === upper) {
    return sorted[lower];
  }
  return sorted[lower] + (sorted[upper] - sorted[lower]) * (index - lower);
}
