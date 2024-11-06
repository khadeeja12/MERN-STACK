// console.log(__filename);
// console.log(__dirname);

const path=require("path");
console.log(path.basename(__filename)); //filename
console.log(path.extname(__filename)); //extension name
console.log(path.dirname(__filename)); // directory name
console.log(path.join(__dirname,"api","script.js"));


console.log(fs);

const fs=require("fs");
fs.mkdir(path.join(__dirname,"/api2/api3"),(err)=>{  // api2 directory is created and api3 is created inside it and help menu is shown in console
    if(err) throw err;

});
console.log(fs);


const fs=require("fs");
fs.mkdir(path.join(__dirname,"/api4/api5"),{recursive:true},(err)=>{  
    if(err) throw err;

});
console.log(fs);

const fs=require("fs");
fs.rmdir(path.join(__dirname,"/api4/api5"),{recursive:true},(err)=>{  // remove the directory api5 
    if(err) throw err;

});
console.log(fs);


const fs=require("fs");
fs.writeFile(path.join(__dirname,"/api","api.txt"),"User Name : khadeeja",(err)=>{  // create file api.txt inside api directory
    if(err) throw err;

});
console.log(fs);



// const fs=require("fs");
// const user="khadeeja"
// fs.appendFile(path.join(__dirname, "/api", "api.txt"), `\n \t User Name : ${user}`, (err) => {   // append the data
//     if (err) throw err;
//     console.log("Data appended successfully!");
// });


const fs=require("fs");
const user="Faris"
fs.readFile(path.join(__dirname, "/api", "api.txt"),"UTF-8", (err,data) => {   // append the data
    if (err) throw err;
    console.log(data);
});




