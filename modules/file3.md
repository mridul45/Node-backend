# Express Server

```
const http = require('http');
const fs = require('fs');
const { escape } = require('querystring');
const express = require('express')

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


const server = express();

server.get('/',(req,res)=>{
    // res.send("Hello")
    // res.sendFile('/home/mridul/Backend/nodejs/index.html') --> Absolute Path here
    // res.json(products) // For json data
    res.status(201).send("Hello")
})

server.listen(8080,()=>{
    console.log("Server Started")
})

```


# API Endpoins (Not Rest-API)


```
const http = require('http');
const fs = require('fs');
const { escape } = require('querystring');
const express = require('express')

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


const server = express();


server.get('/',(req,res) => {
    res.json({type:"GET"})
})

server.post('/',(req,res) => {
    res.json({type:"POST"})
})

server.put('/',(req,res) => {
    res.json({type:"PUT"})
})

server.delete('/',(req,res) => {
    res.json({type:"DELETE"})
})


server.listen(8080,()=>{
    console.log("Server Started")
})

```


# Middlewares

```
// Middleware

server.use((req,res,next) => {
    console.log(req.method,req.ip,req.hostname,req.get('User-Agent'))
    next()
}) // This is a logger kind of middleware


```


# Applying middleware to specific routes only


```
const http = require('http');
const fs = require('fs');
const { escape } = require('querystring');
const express = require('express')

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


const server = express();


// Middleware

// server.use((req,res,next) => {
//     console.log(req.method,req.ip,req.hostname,req.get('User-Agent'))
//     next()
// }) // This is a logger kind of middleware


const auth = (req, res, next) => {
    console.log(req.query);
    if (req.query.password) {
        next();
    } else {
        res.sendStatus(401);
    }
};



server.get('/',auth,(req,res) => {
    res.json({type:"GET"})
})

server.post('/',(req,res) => {
    res.json({type:"POST"})
})

server.put('/',(req,res) => {
    res.json({type:"PUT"})
})

server.delete('/',(req,res) => {
    res.json({type:"DELETE"})
})


server.listen(8080,()=>{
    console.log("Server Started")
})

```


# STatic Hosting

```
const http = require('http');
const fs = require('fs');
const { escape } = require('querystring');
const express = require('express')

// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


const server = express();


// Middleware

// server.use((req,res,next) => {
//     console.log(req.method,req.ip,req.hostname,req.get('User-Agent'))
//     next()
// }) // This is a logger kind of middleware


server.use(express.static('public')) // --> Static hosting


const auth = (req, res, next) => {
    console.log(req.query);
    if (req.query.password) {
        next();
    } else {
        res.sendStatus(401);
    }
};



server.get('/',auth,(req,res) => {
    res.json({type:"GET"})
})


server.post('/',(req,res) => {
    res.json({type:"POST"})
})


server.put('/',(req,res) => {
    res.json({type:"PUT"})
})


server.delete('/',(req,res) => {
    res.json({type:"DELETE"})
})


server.listen(8080,()=>{
    console.log("Server Started")
})

```


# Morgan Middleware

```
const http = require('http');
const fs = require('fs');
const { escape } = require('querystring');
const express = require('express')
const morgan = require('morgan')

// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


const server = express();

/*
Middleware

server.use((req,res,next) => {
    console.log(req.method,req.ip,req.hostname,req.get('User-Agent'))
    next()
}) // This is a logger kind of middleware


server.use(express.static('public')) // --> Static hosting


const auth = (req, res, next) => {
    console.log(req.query);
    if (req.query.password) {
        next();
    } else {
        res.sendStatus(401);
    }
};
*/


server.use(morgan('default'))


server.get('/',(req,res) => {
    res.json({type:"GET"})
})


server.post('/',(req,res) => {
    res.json({type:"POST"})
})


server.put('/',(req,res) => {
    res.json({type:"PUT"})
})


server.delete('/',(req,res) => {
    res.json({type:"DELETE"})
})


server.listen(8080,()=>{
    console.log("Server Started")
})

```