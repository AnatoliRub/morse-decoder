const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let letter = []
    let start = expr.split('')
    let finish = []
    let answer = []
    for (let i = 0; i < start.length; i++) {
        if (i % 10 == 0 && i != 0) {
            finish.push(letter.join('').replace(/^0+/, '').replace(/11/g, '-').replace(/10/g, '.'))
            letter = []
        }
        letter.push(start[i])
        if (i == start.length - 1) {
            finish.push(letter.join('').replace(/^0+/, '').replace(/11/g, '-').replace(/10/g, '.'))
        }
    }
    for (let i = 0; i < finish.length; i++) {
        for (let key in MORSE_TABLE) {
            if (finish[i] == '**********') {
                answer.push(' ')
                break
            }
            if (key == finish[i]) {
                answer.push(MORSE_TABLE[key])
            }
        }
    }
    return answer.join('')
}

module.exports = {
    decode
}