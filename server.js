const http = require('http')
const fs = require('fs')

const index = fs.readFileSync('index.html','utf-8')

const server = http.createServer((req,res) => {
    // This is the server functionality
    console.log("Server Started")

    res.setHeader('Dummy','xyz')
    res.setHeader('Content-Type','text/html')

    res.end(index)
})

server.listen(8080)