const http = require("http")
const url = require("url")
const fs = require("fs")
const fsAsync = require("fs").promises

const fileUtama = fs.readFileSync("./index.txt", "utf-8")

// express -> framework utk http
const server = http.createServer((req, res) => {
    console.log(req.url)
    const pathurl = req.url
    
    if (pathurl === "/yogi") {
        res.end("ini tugas yogi")
    } else if (pathurl === "/") {
        res.end("hell")
    } else if (pathurl === "/jeje") {
        async function writeImam(filepath, content) {
            try {
                await fsAsync.writeFile(filepath, content) 
                console.log("sukses kawan")
                const result = fsAsync.readFile(filepath, "utf-8")
                res.end("hello ges")
            } catch (error) {
                console.log(error)
            }
        }
        
        writeImam("./index.txt", "lalalalalala")

    } else {
        res.end("404 halamana tadek")
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('aman kok')
})
