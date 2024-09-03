# JavaScript Utility Functions and FizzBuzz Generator

## Overview

This project contains a collection of JavaScript functions that cover several basic programming tasks:
1. **Finding the Largest Number**: Multiple methods to find the largest number among three given numbers.
2. **FizzBuzz generator** that creates a list of numbers and replaces certain numbers with "Fizz", "Buzz", or "FizzBuzz" based on divisibility rules.
3. **Student Info Printer**: that displays information about a student, including their name, age, gender, and the course they are taking.

## Table of Contents
  - [Overview](#overview)
  - [Finding the Largest Number](#finding-the-largest-number)
  - [Basic Conditional Method](#basic-conditional-method)
  - [Using a Function](#using-a-function)
  - [Using an Arrow Function](#using-an-arrow-function)
  - [Using a Ternary Operator](#using-a-ternary-operator)
  - [FizzBuzz Generator](#fizzbuzz-generator)
  - [Printing FizzBuzz to Console](#printing-fizzbuzz-to-console)
  - [Returning FizzBuzz as an Array](#returning-fizzbuzz-as-an-array)
  - [Student Info Printer](#student-info-printer)
  - [Usage](#usage)
  - [License](#license)

## Finding the Largest Number

This section demonstrates multiple ways to determine the largest number among three given numbers.

### Basic Conditional Method

The following code finds the largest number using simple conditional statements:

We start by declaring three numbers: a, b, and c with values 26, 12, and 10 respectively.

We use if and else if statements to compare the three numbers

Finally, we print the largest number to the console.
```javascript
const a = 26, b = 12, c = 10;

let largestNumber = c;
if (a > b && a > c) {
    largestNumber = a;
} else if (b > a && b > c) {
    largestNumber = b;
}

console.log(`The largest number is ::${largestNumber}`);
```
Using a Function
This approach encapsulates the logic in a function, allowing for reuse:


Encapsulation: The function computeLargestNumber contains all the logic needed to find the largest number out of three. This logic is encapsulated inside the function, so you don't have to rewrite it every time you need to find the largest number.

Reuse: Once you've written this function, you can use it as many times as you like, just by calling the function with different numbers.
```javascript

function computeLargestNumber(firstNumber, secondNumber, thirdNumber) {
    let largestNumber = firstNumber;
    firstNumber = 100;
    if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        largestNumber = secondNumber;
    } else if (thirdNumber > secondNumber && thirdNumber > firstNumber) {
        largestNumber = thirdNumber;
    }
    return largestNumber;
}

let largestValue = computeLargestNumber(400, 600, 800);
console.log(`The largest number is ::${largestValue}`);
```
Using an Arrow Function
The same logic as above is implemented using an arrow function:

```javascript

const computeLargestNumberArrowWay = (firstNumber, secondNumber, thirdNumber) => {
    let largestNumber = firstNumber;
    firstNumber = 100;
    if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        largestNumber = secondNumber;
    } else if (thirdNumber > secondNumber && thirdNumber > firstNumber) {
        largestNumber = thirdNumber;
    }
    return largestNumber;
}

const largestArrowWay = computeLargestNumberArrowWay(20, 10, 560);
console.log(`The largest number is ::${largestArrowWay}`);
```
Using a Ternary Operator

A concise method using the ternary operator:

```javascript

const ternaryWayComputeLargestNumber = (a, b, c) => {
    return (a > b && a > c) ? a : ((b > a && b > c) ? b : c);
}

const largest = ternaryWayComputeLargestNumber(50, 60, 70);
console.log(`The largest number is::${largest}`);
```
FizzBuzz Generator
The FizzBuzz problem is a common coding challenge that outputs numbers from 1 to a given number, but with special rules for multiples of 3 and 5.

Printing FizzBuzz to Console
This function prints the FizzBuzz results directly to the console:

fizzBuzzGenerator(elements): Prints Fizz, Buzz, FizzBuzz, or the number itself directly to the console.
fizzBuzzGeneratorArray(elements): Returns an array with the FizzBuzz results.
Example usage:
```javascript

function fizzBuzzGenerator(elements) {
    for (i = 1; i <= elements; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
```
Returning FizzBuzz as an Array
This function returns the FizzBuzz results as an array:

```javascript

function fizzBuzzGeneratorArray(elements) {
    fizzBuzzList = [];
    for (i = 1; i <= elements; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            fizzBuzzList.push("FizzBuzz");
        } else if (i % 3 == 0) {
            fizzBuzzList.push("Fizz");
        } else if (i % 5 == 0) {
            fizzBuzzList.push("Buzz");
        } else {
            fizzBuzzList.push(i);
        }
    }
    return fizzBuzzList;
}
```
Example usage:

```javascript

const { fizzBuzzGeneratorArray, fizzBuzzGenerator } = require("./fizzBuzz");

let list = fizzBuzzGeneratorArray(15);
console.log(list);
list.forEach(element => {
    console.log(element);
});
```
Student Info Printer
This function prints the details of a student, including their name, age, gender, and the course they are taking:

```javascript

const student = {
    name: "Sammy",
    age: 16,
    gender: "Male"
}

function printStudent({ name, age, gender }, course) {
    console.log(`The student name is ${name}, age is ${age}, gender is ${gender} and course is ${course}`);
}

printStudent(student, "Computing");
```
Usage
To use the functions in this project, you can include them in your own JavaScript files by importing them, or you can run them directly as shown in the examples.

### Explanation:
- **Overview:** A summary of what the project does, covering the main functionalities.
- **Finding the Largest Number:** Different methods are provided to calculate the largest number among three inputs.
- **FizzBuzz Generator:** Functions for the FizzBuzz problem, with examples of how to use them.
- **Student Info Printer:** A simple function to print student information.
- **Usage:** Brief instructions on how to use the functions in your own code.
- **License:** Information about the project's licensing, allowing others to use it freely. 

You can customize this `README.md` further based on your specific needs or additional functionality in your project.

