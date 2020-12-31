// NO. 3 > SHINE BRIGHT LIKE A DIAMOND

const diamond = num => {
    let output = ''
    for (let i = 0; i < num * 2 - 1; i++) {
        for (let j = 0; j < num * 2 - 1; j++) {
            if (i === num - 1 && (j === 0 || j === num * 2 - 2)) {
                output += '$'
            } else if (i < num - 1 && (j === num - i - 1 || j === num + i - 1)) {
                output += '$'
            } else if (i >= num && (j === i - (num - 1) || j === num * 2 - 2 - (i - num + 1))) {
                output += '$'
            } else {
                output += ' '
            }
        }
        output += '\n'
    }
    return output
}

console.log(diamond(3));
console.log(diamond(4));
console.log(diamond(6));
console.log(diamond(10));