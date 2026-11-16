const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/")
        res.end("Welcome to Ammar Ahmed's Node.js Server");
    else if (req.url === "/about")
        res.end("B.E. CSE student at Lords Institute of Engineering and Technology");
    else if (req.url === "/projects")
        res.end("Campus Connect, TaskFlow, WeatherNow, QuizMaster");
    else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

server.listen(3000, () => console.log("Server running on port 3000"));

// ---- event loop demo ----
console.log("Start");

setTimeout(() => console.log("Delayed callback (setTimeout 0)"), 0);

console.log("Synchronous operation");

// ---- core fs + path modules ----
const filePath = path.join(__dirname, "data.txt");

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) console.log(err);
    else console.log("File content:", data);
});

console.log("End");
