const http = require('http')
const fs = require('fs')
const { escape } = require('querystring')

const index = fs.readFileSync('index.html','utf-8')
const data = fs.readFileSync('data.json','utf-8')

const server = http.createServer((req,res) => {
    // This is the server functionality
    switch(req.url){

        case '/':
            res.setHeader('Content-Type','text/html')
            res.end(index)
            break
        case '/api':
            res.setHeader('Content-Type','application/json')
            res.end(data)
            break
        default:
            res.writeHead(404,"Endpoint not found")
            res.end()
    }

    console.log("Server Started")

    res.setHeader('Dummy','xyz')
    res.setHeader('Content-Type','text/html')

    res.end(index)
})

server.listen(8080)