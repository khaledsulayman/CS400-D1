# CS400-D1

## Problem 1 (PS1.P1.js)
Write a function that takes a string as its input and returns a new string that contains all of the
letters in the original string, but in alphabetical order. Ignore punctuation and numbers. Test
your function using the string ‘supercalifragilisticexpialidocious’.

## Problem 2 (PS1.P2.js)
Write a function that takes as input each of the following strings in turn:  
‘4+2’  
‘5*7’  
‘6-1’  
‘9/2’  
This function should
Determine the operator (+, *, -, or /) embedded in the string
Return a function to implement the input operator that returns the result
For example, if the input string is ‘8%3’, return (left, right) => left % right
Execute the returned function to evaluate and print each expression. For example,
const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)  
You can assume that the format of the input string is fixed (i.e. a digit, an operator, and a digit,
always the same length).
## Problem 3 (PS1.P3.js)
Write a function that accepts two input parameters: a string, and a function. The function
should execute the passed function with the passed string and return the result.  
Next, write two expressions that call this function. For the first, pass the string
‘supercalifragilisticexpialidocious’ and a lambda function that returns an array containing
fragments of the input string broken on the character ‘c’. For the input string
‘supercalifragilisticexpialidocious’, you should get
[‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’].  
For the second, pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that
replaces all of the ‘a’ characters with ‘A’ characters. Return an object that contains the original
string, the modified string, the total number of As in the modified string, and the overall length
of the modified string:  
{  
	 	 originalString: xxx,  
	 	 modifiedString: xxx,  
	 	 numberReplaced: xxx,  
	 	 length:		 	 xxx  
}  
Print the data from the returned object on the console.
