# CS400-D1 Problem Set 2

## Problem 1 (PS2.P1.js)
Write two generators that together implement a series of even Fibonacci numbers. The first
generator should return the series of fibonacci numbers starting from 0. The series F is defined
as:  
F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)  
The second generator should use the first to obtain the next number in the sequence, rejecting
it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
Use the generators to print out the first 6 even Fibonacci numbers.

## Problem 2 (PS2.P2.js)
Write a generator that is initialized with a sentence and that emits each word of the sentence in
turn.  
Use the generator to print the words, one per line, of the string “All I know is something like a
bird within her sang”.

## Problem 3 (PS2.P3.js)
Write a function that prints the cube value of its input (ie f(x)=x^3). Next, write a single line of
code to call the function on each value of the array [1,2,3,4,5,6,7].
