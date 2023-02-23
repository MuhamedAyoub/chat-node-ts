// # id from chat.pug
const chatForm = document.getElementById("chat-form");
console.log("chat ",chatForm)
const socket  = io()
socket.on("message",message => console.log(message))



// Message Submit
chatForm.addEventListener("submit",(event) => {
    event.preventDefault()

     const message = event.target[0].value
    // Emit the message to the server
    socket.emit("chatMessage",message)


    return
})




