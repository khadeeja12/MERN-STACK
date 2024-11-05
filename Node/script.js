const array=["a","b","c","d"];
array.push("e")
const newArray=[...array,"f"];
console.log(newArray)

function newFunc(){

    console.log("Khadeeja")
}
newFunc();

const myFunc=()=>10

console.log(myFunc())


//interval
setInterval(()=>{
    console.log("Running");
},5000);


// timeout
setTimeout(()=>{
    console.log("Running");
},2000);


//mixed
const interval=setInterval(()=>{
    console.log("running");
},1000);

setTimeout(()=>{
    clearInterval(interval);
},3000);