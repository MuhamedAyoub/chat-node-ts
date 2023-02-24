
 export function userIsConnect(socket:any,event:String,message:String) {
        socket.emit(event,message)
}
export function userJoin(socket:any,event:String,message:String) {
        socket.broadcast.emit(event,message)

}