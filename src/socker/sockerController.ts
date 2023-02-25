import {Server} from "socket.io";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData} from "types/socket";

import {messageFormat} from "utls/messages";
import {createUser, getCurrentUser, getRoomUsers, LeaveUser} from "models/user";
import {filterArabic} from "utls/filter";

   export default   function  socker (server:any) {
       const botName:string = "chatGpt"
       const io = new Server<
           ClientToServerEvents,
           ServerToClientEvents,
           InterServerEvents,
           SocketData
       >(server)

    io.on('connection', (socket) => {
        console.log("New Connection from WS")
        // Join to the room
        socket.on("joinRoom",async ({username,room}) => {
            // const user = joinUser().
            const user = await createUser({
                id:socket.id,
                roomName:room,
                username,
            })
            socket.join(user?.roomName)
            // When User is Connect
            socket.emit("message", messageFormat({
                username:botName,
                text: `Welcom ${user.username}  to Node chat `,
                time: ""
            }))
            // Broadcast When user connect
            socket.broadcast.to(user.roomName).emit("message", messageFormat({
                username: botName,
                text: ` ${user.username } Join the chat `,
                time: ""
            }))
        })

            // Listen for message
            socket.on('chatMessage', (message: string) => {
                 const user = getCurrentUser(socket.id)

                    message = filterArabic(message)
                    io.emit("message", messageFormat({
                        username: "user",
                        time: "",
                        text: message
                    }))

            })
        // user Disconnect
        socket.on("disconnect",async() => {
            // const user = userLeave(socket.id)
            const user = await LeaveUser(socket.id)
            //if(user)
            io.to(user.roomName).emit("message",messageFormat({
                username:botName,
                text:` ${user.username} has left the chat`,
                time:""
            }))

            io.to(user.roomName).emit("roomUsers", {
                room:user.roomName,
                users: await getRoomUsers(user.roomName)
            })
        })



    })




}