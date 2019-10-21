const forMan = function* (forMankind) {
    /**
     * Generator that emits the input string
     * one word at a time.
     */
    const oneGiantLeap = forMankind.split(' ');
    for (let i = 0 ; i < oneGiantLeap.length; i++)
        yield oneGiantLeap[i];
    // ( .done === true ) upon loop termination.
}

let oneSmallStep = forMan("All I know is something like a bird within her sang"); // test case from handout
let next = oneSmallStep.next();

while (!next.done) {
    console.log(next.value);
    next = oneSmallStep.next();
}
