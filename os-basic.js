const os = require('os');

console.log("system info: \n",);
console.log("\n" + '-'.repeat(50) + "\n");

console.log("\n Platform : ", os.platform());
console.log("\n Architecture : ", os.arch())
console.log("\n Type: ", os.type())
console.log("\n OS release: ", os.release());
console.log("\n HostName: ", os.hostname())

console.log("\n" + '-'.repeat(50) + "\n");

console.log("\n CPU info: ")
const cpus = os.cpus()

console.log("CPU Model : ", cpus[0].model)
console.log("number of cores : ", cpus.length)
console.log("CPU Speed : ", cpus[0].speed)

console.log("\n" + '-'.repeat(50) + "\n");

const totalMemory = os.totalmem();
const freeMem = os.freemem()
console.log("Total Memory : ", (totalMemory/1024/1024/1024).toFixed(2))
console.log("Total Free Memory: ", (freeMem/1024/1024/1024).toFixed(2))