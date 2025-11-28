const fs = require('fs');

console.log("Start Reading.....");

// const data = fs.readFileSync('E:/Next Level Web Development/Mission 3 - Be a Node Express Expert/Node practice/NodeJs_Core_Modules/data/entries/diary.txt', 'utf-8')
// // const data2 = fs.readFile('E:/Next Level Web Development/Mission 3 - Be a Node Express Expert/Node practice/NodeJs_Core_Modules/data/entries/diary.txt')
// console.log(data);

try {
    const data = fs.readFileSync('E:/Next Level Web Development/Mission 3 - Be a Node Express Expert/Node practice/NodeJs_Core_Modules/data/entries/diary.txt', 'utf-8');
            console.log('File content: ')
    console.log(data)
} catch (err) {
    console.error(err.message);
}

console.log("finished");
