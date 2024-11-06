// const EventEmitter=require("events");
// const emitter=new EventEmitter();

// emitter.on("message",(data)=>{
//     console.log(data);
// });

// emitter.on("logout",(data)=>{
//     console.log(data);
// });

// emitter.emit("message","user logged in");
// emitter.emit("logout","User logged out");



const EventEmitter=require("events");
const server=new EventEmitter();

//set up a listener for request events

server.on("request",(req)=>{
    console.log(`Recieved request for ${req.url}` );
    if(req.url ==="/error"){
        server.emit("error",new Error("An error occured!"));
    }
    else{
        console.log(`Processing request for ${req.url}`);
    }
});

server.on("error",(err)=>{
    console.log(`Error : ${err.message}`);
});

server.emit("request", { url: "/home" });
server.emit("request", { url: "/about" });
server.emit("request", { url: "/error" });
