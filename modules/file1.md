1. Node.js is a runtime environment for javascript.
2. Is Asyncronous
3. Is non-blocking


It is not a web-server.


# Why and where Node is Useful
1. Heavy I/O
2. Small code footprint

# Running js file in Node

-> Open Terminal and type 'node filename'

[In node every file is identified as a module. If we have to use that file we need to export it]

## Use of modules

**This code is for lib.js**

```
exports.sum = (a,b) => {
    return a+b
}
```


__This code is for app.js__

const lib = require('./lib.js')
console.log(lib)

console.log(lib.sum(3,5))