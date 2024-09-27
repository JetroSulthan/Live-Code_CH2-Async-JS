// const test = "hello fsw 2"

// console.log(test);

// const http = require('http');

const fs = require("fs");

// read file
const letter = fs.readFileSync("./index.txt", "utf-8")

// wirte file with sync
const feedbackLetter = fs.writeFileSync("./archive.txt", "oke")

// read file after write the file
const sendLetter = fs.readFileSync("./archive.txt", "utf-8")

fs.mkdir("coba_folder", () => {})

// asynchronus file/write
// const asyncLetter = fs.readFile("./index.txt", "utf-8", (err, data) => {
//     console.log(`line 22 ${data}`)
// });

const asynchronus = fs.readFile("./index.txt", "utf-8", (err, data) => {
    console.log(`line 22 ${data}`);
    
    // Delay the next log using setTimeout
    setTimeout(() => {
        console.log(`hehe ${asynchronus}`);
    }, 10000); // Delay for 1 second (1000 milliseconds)
});

async function suratCinta() {
    try {
        const suratCinta = await fs.readFile("./index.txt", "utf-8")
        console.log(`ini surat cinta: ${suratCinta}`)
    } catch (error) {
        console.log(error);
        
    }
}

suratCinta();



fs.readFile("./index.txt", "utf-8").then((isiSuratCinta) => {
    console.log(isiSuratCinta)
}).catch((error) => {
    console.error("bede error:", error)
})

setTimeout(() => {
    
}, 3000)

// print
console.log(sendLetter)
console.log(letter)



// console.log(`hehe ${asyncLetter}`)