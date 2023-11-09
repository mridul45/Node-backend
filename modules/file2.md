# Web Server

* Client sends request to server.
* Server sends a response to the client.
* Req and Res are sent in HTTP.


__Request__

* __Consists mailnly of three Sections__
1. Resquest Line , Headers and Body
2. Request line tells about what kind of reques is the(GET,POST,PUT)
3. Headers tells about some additional data about the request
4. Body consists the information the user sends


__Response__

* __Consists of 3 sections__

1. Status Line, Headers, Body
2. Status Line tells about the status of the response
3. Headers contains the extra info of the server data
4. Body contains the data sent by the server to the client


# Basic Server Code

```
const http = require('http')

const server = http.createServer((req,res) => {
    // This is the server functionality
    console.log("Server Started")
    res.end("Creating a server in node")
})

server.listen(8080)

```


# Rendering a HTML file using the js Backend


```
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

```


# Sending Json data

```
const http = require('http')
const fs = require('fs')

const data = fs.readFileSync('data.json','utf-8')

const server = http.createServer((req,res) => {
    // This is the server functionality
    console.log("Server Started")

    res.setHeader('Dummy','xyz')
    res.setHeader('Content-Type','application/json')

    res.end(data)
})

server.listen(8080)

```


# Dynamic Rendering

```
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

```