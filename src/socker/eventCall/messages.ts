import {messagesController} from "../eventControllers/messagesController.js";


export const sendMessage = (socket:any,io:any) => {
        socket.on("chatMessage", messagesController)

    }
