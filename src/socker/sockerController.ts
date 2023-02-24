import {Server} from "socket.io";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData} from "types/socket";
import {sendMessage} from "./eventCall/messages.js";
import {userIsConnect, userJoin} from "./eventCall/user.js";

   export default   function  socker (server:any) {
    const io = new Server<
        ClientToServerEvents,
        ServerToClientEvents,
        InterServerEvents,
        SocketData
    >(server)

    io.on('connection', (socket) => {
        console.log("New Connection from WS")
        // When User is Connect
        userIsConnect(socket,"message","Welcom to Node chat")
        // Broadcast When user connect
        userJoin(socket,"message","A user has joined the chat")
        sendMessage(socket,io)

    })




}