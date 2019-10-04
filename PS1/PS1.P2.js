const evaluate = s => {
    const l = parseInt(s.charAt(0));
    const r = parseInt(s.charAt(2));

    switch (s.charAt(1)) {
        case '+':
            return () => l+r;
            break;
        case '-':
            return () => l-r;
            break;
        case '*':
            return () => l*r;
            break;
        case '/':
            return () => l/r;
            break;
        case '%':
            return () => l%r;
            break;
    }
}

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);