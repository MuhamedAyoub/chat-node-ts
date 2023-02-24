import express from "express";
import * as http from "http";
import HomeRouter from "./routes/Home.js"
import ChatRouter from "./routes/Chat.js"
import path from "path";
import socker from "./socker/sockerController.js"
import {Server} from "socket.io";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData} from "types/socket";


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
app.set("views",path.resolve("src","views"));

app.use(express.static(getDirRootName() + "static"))
// Use Routes
app.use("app",HomeRouter);
app.use("app/chat",ChatRouter);
// Use Socket
socker(server);
const PORT  = 3000 || process.env.PORT

server.listen(PORT , () => {
    console.log('SERVER RUNNING ON PORT ', PORT);
})





