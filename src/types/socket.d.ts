import {message} from "types/message";
export declare interface users {
    username:string
}
type joinRoom = {
    username:string,
    room:string
}
type roomUsers = {
    users:users[],
    room:string
}
export interface ServerToClientEvents {
    "message":(data:message) => String;
    "roomUsers":(data:roomUsers)=> void
}

export interface ClientToServerEvents {
    "chatMessage":(msg:string) => void;
    "joinRoom":(data:joinRoom) => void

}

export interface InterServerEvents {
    ping: () => void;

}

export interface SocketData {
    username: string;
    room: String;
    userId:String
}