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

socket.on("prepareRoom",data => {
    data.forEach(item =>
    creatMessage(item)
    )
})
socket.on("message",data => {
    data.username = username
    console.log(data)
    creatMessage(data);
    // Scroll
    messageWrapper.scrollTop = messageWrapper.scrollHeight


})



// Message Submit
chatForm.addEventListener("submit",(event) => {
    event.preventDefault()

     const message = event.target[0].value
    // Emit the message to the server
    socket.emit("chatMessage",message)
    event.target[0].value = ""


})

socket.emit("joinRoom",{
    username,room
})



