import express from "express";
import * as http from "http";
import  {Server} from "socket.io";
import {ClientToServerEvents,InterServerEvents,ServerToClientEvents,SocketData} from "./types/socket";
import {__dirname} from './utls/dirname';
// Create Server

const app = express();
const server = http.createServer(app)

// Apply middleware
app.use(express.json());
//app.use(express.static())
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
    console.log(__dirname)
})