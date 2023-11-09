// const fs = require('fs')

// const txt = fs.readFileSync('demo.txt')
// console.log(txt)


// // Mention Encoding

// const txt2 = fs.readFileSync('demo.txt','utf-8')
// console.log(txt2)

const fs = require('fs')

fs.readFile('demo.txt','utf-8',(err,txt) => {
    console.log(txt)
})