import {Server} from "socket.io";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData} from "types/socket";

import {messageFormat} from "../utls/messages.js";
import {createMessage, createUser, getCurrentUser, getRoom, getRoomUsers, LeaveUser} from "models/user";
import {filterArabic} from "../utls/filter.js";
import {message} from "types/message";
import {createAdapter} from "@socket.io/mongo-adapter";
import mongoAdaptor from "../utls/mongoAdaptor.js";

   export default   async function  socker (server:any) {
       const botName:string = "chatGpt"
       const io = new Server<
           ClientToServerEvents,
           ServerToClientEvents,
           InterServerEvents,
           SocketData
       >(server)
        await  mongoAdaptor(io)

       io.on('connection', (socket) => {
        console.log("New Connection from WS")
        // Join to the room
        socket.on("joinRoom",async ({username,room}) => {
            // const user = joinUser().
            const roomOb = await getRoom(room)
                const data:message[]|undefined =   roomOb?.messages?.map(m => {
                return messageFormat({
                    username:m.username,
                    time:m.time,
                    text:m.text
                })
            })
            socket.emit("prepareRoom", data)
            const user = await createUser({
                id:socket.id,
                roomName:room,
                username,
            })
            socket.join(user?.roomName)
            // When User is Connect
            const welcomMessage = messageFormat({
                username:botName,
                text: `Welcom ${user.username}  to Node chat `,
                time: ""
            })
            socket.emit("message",welcomMessage )
            // Broadcast When user connect
            const connectMessage =  messageFormat({
                username: botName,
                text: ` ${user.username } Join the chat `,
                time: ""
            })

            const  sendMessage:any = await createMessage(connectMessage,room)
            socket.broadcast.to(user.roomName).emit("message",connectMessage)
        })

            // Listen for message
            socket.on('chatMessage', async (message: string) => {
                 const user = await getCurrentUser(socket.id)

                    message = filterArabic(message)
                const legalMsg  = messageFormat({
                    username: user?.username ||'',
                    time: "",
                    text: message
                })
                 await createMessage(legalMsg,user?.roomName)
                    io.emit("message",legalMsg)

            })
        // user Disconnect
        socket.on("disconnect",async() => {
            const user = await LeaveUser(socket.id)
            const legalMsg = messageFormat({
                username:botName,
                text:` ${user.username} has left the chat`,
                time:""
            })
            await createMessage(legalMsg,user?.roomName)
            io.to(user.roomName).emit("message",legalMsg)

            io.to(user.roomName).emit("roomUsers", {
                room:user.roomName,
                users: await getRoomUsers(user.roomName)
            })
        })



    })



}