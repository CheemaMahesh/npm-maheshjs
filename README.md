# maheshjs

![npm](https://img.shields.io/npm/v/maheshjs)
![license](https://img.shields.io/badge/license-MIT-blue.svg)

## Introduction
`maheshjs` is a utility library that provides a set of functions for common operations such as string manipulation, random number generation, and mathematical calculations. This package is designed to simplify your coding tasks and improve productivity.

## Current Functions
1. **getString**
   - **Description**: Returns a string based on specified criteria.
   - **Usage**: `getString(criteria)`
   - **Example**: `getString('example')` returns `'example'`.

2. **getRandomInt**
   - **Description**: Generates a random integer between two specified values.
   - **Usage**: `getRandomInt(min, max)`
   - **Example**: `getRandomInt(1, 10)` returns a random integer between 1 and 10.

3. **getRandomFloat**
   - **Description**: Generates a random floating-point number between two specified values.
   - **Usage**: `getRandomFloat(min, max)`
   - **Example**: `getRandomFloat(1.0, 10.0)` returns a random float between 1.0 and 10.0.

4. **isEven**
   - **Description**: Checks if a number is even.
   - **Usage**: `isEven(number)`
   - **Example**: `isEven(4)` returns `true`.

5. **isOdd**
   - **Description**: Checks if a number is odd.
   - **Usage**: `isOdd(number)`
   - **Example**: `isOdd(5)` returns `true`.

6. **getAverageByNumbersArray**
   - **Description**: Calculates the average of an array of numbers.
   - **Usage**: `getAverageByNumbersArray(numbersArray)`
   - **Example**: `getAverageByNumbersArray([1, 2, 3, 4])` returns `2.5`.

7. **hasDateTimePassed**
   - **Description**: Checks if a given date and time has passed.
   - **Usage**: `hasDateTimePassed(dateTime)`
   - **Example**: `hasDateTimePassed(new Date('2025-01-01'))` returns `true` if the date has passed.

## Installation
To install the package, run the following command:
```bash
npm install maheshjs