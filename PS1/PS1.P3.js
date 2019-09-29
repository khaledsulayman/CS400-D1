const funk = (s, func) => func(s);

const cBreak = s => {
    const rex = /c/g;
    s = s.replace(rex, 'PERRYc')
    return s.split('PERRY');
};

const bigA = s => {
    let count = 0;
    let newStr = s;
    for (let i = 0 ; i < s.length ; i++) {
        if (s.charAt(i) === 'a') {
            newStr = newStr.substring(0, i) + 'A' + newStr.substring(i + 1);
            count++;
        }
    }
    return {
        originalString: s,
        modifiedString: newStr,
        numberReplaced: count,
        length: newStr.length
    }
};

console.log(funk("supercalifragilisticexpialidocious", cBreak));
console.log(funk("supercalifragilisticexpialidocious", bigA));