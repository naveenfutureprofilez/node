import http from 'http';

const port = process.env.port;

const server = http.createServer((req, res)=>{ 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'Text/html');
    res.end('')
});