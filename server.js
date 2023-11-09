const http = require('http');
const fs = require('fs');
const { escape } = require('querystring');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const server = http.createServer((req, res) => {

    if (req.url.startsWith('/product')) {
        const id = req.url.split('/')[2];
        const products = data.products; // Access the products array from the data object
        const product = products.find(p => p.id == (+id));
        console.log(product);

        res.setHeader('Content-Type','text/html')
        let modifiedIndex = index.replace('**title**',product.title)
        .replace('**image**',product.images[0])
        .replace('**url**',product.thumbnail)
        .replace('**price**',product.price)
        .replace('**rating**',product.rating)

        res.end(modifiedIndex)
        return;
    }
    
    // This is the server functionality
    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            break;
        default:
            res.writeHead(404, "Endpoint not found");
            res.end(JSON.stringify(data));
            break;
    }

    console.log("Server Started");
});

server.listen(8080);
