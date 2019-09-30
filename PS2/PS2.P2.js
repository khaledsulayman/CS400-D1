const forMan = function* (forMankind) {
    const oneGiantLeap = forMankind.split(' ');
    for (let i = 0 ; ; i++)
        yield oneGiantLeap[i];
}

let oneSmallStep = forMan("All I know is something like a bird within her sang");

console.log(oneSmallStep.next().value);
console.log(oneSmallStep.next().value);
console.log(oneSmallStep.next().value);
console.log(oneSmallStep.next().value);
console.log(oneSmallStep.next().value);
console.log(oneSmallStep.next().value);
console.log(oneSmallStep.next().value);
console.log(oneSmallStep.next().value);
console.log(oneSmallStep.next().value);
console.log(oneSmallStep.next().value);
console.log(oneSmallStep.next().value);
