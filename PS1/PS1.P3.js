const funk = (s, func) => func(s);

const cBreak = s => {
    const regExp = /c/g;
    s = s.replace(regExp, 'PERRYc')
    return s.split('PERRY');
};

const bigA = s => {
    const regExp = /a/g;
    let count = s.match(regExp).length;
    let newStr = s.replace(regExp, 'A');
    return {
        originalString: s,
        modifiedString: newStr,
        numberReplaced: count,
        length: newStr.length
    }
};

console.log(funk("supercalifragilisticexpialidocious", cBreak));
console.log(funk("supercalifragilisticexpialidocious", bigA));