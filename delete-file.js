const fs = require("fs");

fs.writeFileSync("./Output/tem.txt", "this is temp file.");

console.log('Temp File created');

if (fs.existsSync("./Output/tem.txt")) {
    console.log("File exists.")
    fs.unlinkSync("./Output/tem.txt");
    console.log("fiel deleted.")
}

try {
    fs.unlinkSync("./Output/tem.txt")
} catch (error) {
    console.error(error.message)
}

fs.writeFile("./Output/temp2.txt", "Another temp2 file", (error) => {
    if (error) return console.error(error.message);

    console.log("Another temp2 file created.")

    fs.unlink('./Output/temp2.txt', (error) => {
        if (error) {
            console.error(error.message)
        } else {
            console.log("Temp2 deleted.")
        }
    })
})