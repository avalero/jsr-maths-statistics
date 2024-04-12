/**
 * This module contains functions for basic statistical operations.
 * @packageDocumentation
 * @module Stats
 */

/**
 * Compute average of an array of numbers
 * @param arr Array of numbers
 * @returns average of numbers in the array
 * @example average([1, 2, 3, 4, 7]) // 3.4
 */
export function average(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

/**
 * Compute variance of an array of numbers
 * @param arr Array of numbers
 * @returns Variance of the array
 * @example variance([1, 2, 3, 4, 7]) // 4.24
 */
export function variance(arr: number[]): number {
  const mean = average(arr);
  const sum = arr.reduce((acc, curr) => acc + Math.pow(curr - mean, 2), 0);
  return sum / arr.length;
}

/**
 * Compute standard deviation of an array of numbers
 * @param arr Array of numbers
 * @returns maximum number in the array
 * @example stdDev([1, 2, 3, 4, 7]) // 2.06
 */
export function stdDev(arr: number[]): number {
  return Math.sqrt(variance(arr));
}

/**
 * Compute median of an array of numbers
 * @param arr Array of numbers
 * @returns median number in the array
 * @example median([1, 2, 3, 4, 7]) // 3
 */
export function median(arr: number[]): number {
  const sorted = arr.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

/**
 * Compute mode of an array of numbers
 * @param arr Array of numbers
 * @returns mode number in the array
 * @example mode([1, 2, 3, 4, 7, 7, 7, 7]) // 7
 */

export function mode(arr: number[]): number {
  const freq = arr.reduce((acc, curr) => {
    acc.set(curr, (acc.get(curr) || 0) + 1);
    return acc;
  }, new Map<number, number>());

  const maxFreq = Math.max(...freq.values());
  return [...freq.keys()].find((key) => freq.get(key) === maxFreq)!;
}

/**
 * Compute range of an array of numbers
 * @param arr Array of numbers
 * @returns range of the array
 * @example range([1, 2, 3, 4, 7]) // 6
 */
export function range(arr: number[]): number {
  return Math.max(...arr) - Math.min(...arr);
}
