var readline = require('readline');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

r.on('line', function (line) {
    n = parseInt(line)
    s = ''
    s += n
    while (n != 1) {
        if (n % 2 == 0) {
            n = n / 2
        } else {
            n = n * 3 + 1
        }
        s += ' ' + n
    }
    console.log(s)
    r.close()
})