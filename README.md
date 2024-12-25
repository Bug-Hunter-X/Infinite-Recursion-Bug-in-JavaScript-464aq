# Infinite Recursion Bug in JavaScript

This repository demonstrates a common error in JavaScript: infinite recursion. The code implements a recursive function `foo` that compares two numbers. However, there is a flaw in the logic that causes it to recur infinitely under certain conditions.  The solution demonstrates how to fix this by adding a base case to prevent infinite recursion.

## How to reproduce

Clone the repo and run `bug.js`. You will observe that the output is unexpected and the program may hang.

## Solution

The `bugSolution.js` file provides the corrected code with an appropriate base case.