const evaluate = s => {
    const l = parseInt(s.charAt(0));
    const r = parseInt(s.charAt(2));
    let expr;

    switch (s.charAt(1)) {
        case '+':
            expr = l+r;
            break;
        case '-':
            expr = l-r;
            break;
        case '*':
            expr = l*r;
            break;
        case '/':
            expr = l/r;
            break;
        case '%':
            expr = l%r;
            break;
    }
    return expr;
}

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator}`);