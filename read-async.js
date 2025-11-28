const fs = require("fs");
console.log("Start Reading.....");

const readData = fs.readFile("E:/Next Level Web Development/Mission 3 - Be a Node Express Expert/Node practice/NodeJs_Core_Modules/data/entries/diary.txt", "utf-8", (error, data) => {
    if (error) {
        console.log("error happend")
        console.error(error.message)
    }
    console.log("File content...")
    console.log(data)
});

console.log("This runs immediately -no blocking.")