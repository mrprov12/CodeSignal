//https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC/solutions
var _ = require('underscore');

function firstNotRepeatingCharacter(s) {
    let charSeen = {};

    [...s].forEach((e, i) => {
        charSeen.hasOwnProperty(e) ? charSeen[e]++ : charSeen[e] = 1;
    });

    let uniqChars = [...s].filter((letter) => charSeen[letter] === 1);

    return uniqChars.length > 0 ? uniqChars[0] : '_';
}
