const fs = require("fs");

const content1 = "This is content \n node js awesome."

try {
    fs.writeFileSync("./Output/test-.txt", content1)
    console.log("File written sync");
} catch (error) {
    console.error(error.message)
}

const content2 = "this is a content \n asynchronous!!!"

fs.writeFile("./Output/test2-.txt", content2, (error) => {
    if (error) {
        console.error(error.message)
    } else {
        console.log("file written async")
    }
})