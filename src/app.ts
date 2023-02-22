import express from "express";
import * as http from "http";
import  {Server} from "socket.io";
import {ClientToServerEvents,InterServerEvents,ServerToClientEvents,SocketData} from "./types/socket";
import {URL} from "url";


//TODO Utls Functions
const getDirRootName = ():String => {
    return new URL('.', import.meta.url).pathname;
}

// Create Server

const app = express();
const server = http.createServer(app)

// Apply middleware
app.use(express.json());
app.set("views",getDirRootName()+"views");
app.set('view engine','pug')
app.use(express.static(getDirRootName() + "public"))
const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
>(server)



io.on('connection',(socket) => {
    socket.emit("noArg");
})

const PORT  = 3000 || process.env.PORT


server.listen(PORT , () => {
    console.log('SERVER RUNNING ON PORT ', PORT);
})





