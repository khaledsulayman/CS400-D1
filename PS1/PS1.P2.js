const evaluate = s => eval(s);

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator}`);