const path = require('path')
console.log(path.sep)

// joins the path into one comlplete path
const filePath = path.join('./content', 'subfolder', 'text.txt')
console.log(filePath)

// gives you the bottom of the path
const base = path.basename(filePath)
console.log(base)

// gets the full path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)