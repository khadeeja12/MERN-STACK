const fs = require("fs");
const path = require("path");

const user = "Navas";


fs.readFile(path.join(__dirname, "/api", "api.txt"), "UTF-8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
});

fs.writeFile(path.join(__dirname, "/api", "api.txt"), "Hello, its me kaija!", (err) => {
    if (err) throw err;
    console.log("File written successfully.");
});

fs.appendFile(path.join(__dirname, "/api", "api.txt"), `\nAppended text by ${user}`, (err) => {
    if (err) throw err;
    console.log("Data appended successfully.");
});

fs.unlink(path.join(__dirname, "/api", "api.txt"), (err) => {
    if (err) throw err;
    console.log("File deleted successfully.");
});
