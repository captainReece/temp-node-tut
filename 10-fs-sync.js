const fs = require('fs')

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first)

// writeFileSync will have node write a new file if it isn't there, and it will overwrite an existing one.
writeFileSync('./content/result-sync.txt', `here is the result ${first}, ${second}`)

// you can append using the { flag: 'a' }
writeFileSync('./content/result-sync.txt', `this has been appended. `, {flag: 'a'})