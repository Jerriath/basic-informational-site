// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// http.createServer( (req, res) => {
//     let q = url.parse(req.url, true);
//     let fileName = "." + q.pathname;
//     fileName = fileName.toLowerCase();
//     console.log(fileName);
//     if ( fileName === "./") {
//         fs.readFile("./index.html", (err, data) => {
//             if (err) {
//                 res.writeHead(404, {"Content-Type": "text/html"});
//                 return res.end("404 not found");
//             }
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             return res.end();
//         })
//     }
//     else if (fileName === "./about.html" || fileName === "./contact-me.html") {
//         fs.readFile(fileName, (err, data) => {
//             if (err) {
//                 res.writeHead(404, {"Content-Type": "text/html"});
//                 return res.end("404 not found");
//             }
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             return res.end();
//         })
//     }
//     else {
//         fs.readFile("./404.html", (err, data) => {
//             if (err) {
//                 res.writeHead(404, {"Content-Type": "text/html"});
//                 return res.end("404 not found");
//             }
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             return res.end();
//         })
//     }
// }).listen(8080);

const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.get("/about.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/about.html"));
})

app.get("/contact-me.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/contact-me.html"));
})

app.listen(port);