const { log } = require('console');
var readline = require('readlinesync');
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})
var n
r   .once('line', function (l1) {
    n = Number(l1)
    r.once('line', function (l2) {
        a = l2.split(' ').map(Number)
        console.log((n * (n + 1) / 2) - a.reduce((a, b) => a + b))
        r.close()
    })
})  