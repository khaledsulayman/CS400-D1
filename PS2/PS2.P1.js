let F = [0, 1];

const fibs = function* () {
    yield F[0];
    yield F[1];
    for (let i = 2 ; ; i++) {
        F.push(F[i - 1] + F[i - 2]);
        yield F[i];
    }
};

const evensOnly = function* () {
    let f;
    for (let fib of fibs())
        if (fib%2 === 0)
            yield fib;
};

evenFibs = evensOnly();

console.log(evenFibs.next().value);
console.log(evenFibs.next().value);
console.log(evenFibs.next().value);
console.log(evenFibs.next().value);
console.log(evenFibs.next().value);
console.log(evenFibs.next().value);

