# Statistics Module

This TypeScript module provides a set of functions for performing basic statistical operations on arrays of numbers.

## Installation

To use these functions, include the module in your TypeScript project. Ensure you have TypeScript installed and configured.

## Functions

### `average(array: number[]): number`

Computes the average of an array of numbers.

**Example:**
```typescript
import { average } from './stats';

console.log(average([1, 2, 3, 4, 7])); // Outputs: 3.4
```

### `variance(array: number[]): number`

Computes the variance of an array of numbers.

**Example:**
```typescript
import { variance } from './stats';

console.log(variance([1, 2, 3, 4, 7])); // Outputs: 4.24
```

### `stdDev(array: number[]): number`

Computes the standard deviation of an array of numbers.

**Example:**
```typescript
import { stdDev } from './stats';

console.log(stdDev([1, 2, 3, 4, 7])); // Outputs: 2.06
```

### `median(array: number[]): number`

Finds the median of an array of numbers.

**Example:**
```typescript
import { median } from './stats';

console.log(median([1, 2, 3, 4, 7])); // Outputs: 3
```

### `mode(array: number[]): number`

Finds the mode of an array of numbers.

**Example:**
```typescript
import { mode } from './stats';

console.log(mode([1, 2, 3, 4, 7, 7, 7, 7])); // Outputs: 7
```

### `range(array: number[]): number`

Computes the range of an array of numbers.

**Example:**
```typescript
import { range } from './stats';

console.log(range([1, 2, 3, 4, 7])); // Outputs: 6
```

### `covariance(array1: number[], array2: number[]): number`

Computes the covariance of two arrays of numbers.

**Example:**
```typescript
import { covariance } from './stats';

console.log(covariance([1, 2, 3, 4, 7], [1, 2, 3, 4, 7])); // Outputs: 4.24
```


## Contributing

Contributions to improve the module are welcome. Please follow the standard GitHub pull request process to propose changes.
