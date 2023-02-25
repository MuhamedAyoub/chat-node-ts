// # id from chat.html
import socker from "../../socker/sockerController.js";

const messageWrapper = document.querySelector(".message-wrapper")
// get The url params
const {username,room} = Qs.parse(location.search,{
    ignoreQueryPrefix:true
})
console.log("this is username",username)
// # ~
const chatForm = document.getElementById("chat-form");
console.log("chat ",chatForm)
const socket  = io()



socket.on("message",data => {
    data.username = username
    console.log(data)
    creatMessage(data);
    // Scroll
    messageWrapper.scrollTop = messageWrapper.scrollHeight


})
socket.on("roomUsers",(arg) => {
    joinRoom(arg.room)
    getRoomUser(arg.users)
    socket.on("prepareRoom",data => {
        data.forEach(item =>
            creatMessage(item)
        )
    })
})


// Message Submit
chatForm.addEventListener("submit",(event) => {
    event.preventDefault()

     const message = event.target[0].value.trim()
    // Emit the message to the server
    socket.emit("chatMessage",message)
    event.target[0].value = ""
    event.target[0].focus()


})

socket.emit("joinRoom",{
    username,room
})


document.body.addEventListener('keypress', (e) => {
    if(e.key === "Escape") {
        const leaveRoom = confirm('Are you sure you want to leave the chatroom?');
        if (leaveRoom) {
            window.location = '../index.html';
        } else {
            return
        }
    }


})

