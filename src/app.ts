import express from "express";
import * as http from "http";
import  {Server} from "socket.io";
import {ClientToServerEvents,InterServerEvents,ServerToClientEvents,SocketData} from "./types/socket";
import {URL} from "url";


//TODO Utls Functions
const getDirRootName = ():String => {
  //  return new URL('.', import.meta.url).pathname;
    return "/home/moha_ayoub/repos2/chat-node-ts/src/";
}

// Create Server

const app = express();
const server = http.createServer(app)

// Apply middleware
app.use(express.json());
app.set("views",getDirRootName()+"views");
app.set('view engine','pug')
app.use(express.static(getDirRootName() + "static"))
const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
>(server)

app.get("/",(req, res) => {
    res.render('chat.pug')
})
app.get("/login",(req, res) => {
    res.render("login.pug",{})
})
app.get("/chat",(req, res) => {
    res.sendFile( `${getDirRootName()}views/chat.html`)
})
io.on('connection',(socket) => {
    socket.emit("noArg");
})

const PORT  = 3000 || process.env.PORT


server.listen(PORT , () => {
    console.log('SERVER RUNNING ON PORT ', PORT);
})





