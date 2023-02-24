
// # id from chat.html

const messageWrapper = document.querySelector(".message-wrapper")

const creatMessage = (user="N/A",message = "N/A") => {
    const divMessage = document.createElement("div");
    divMessage.classList.add("flex","mb-2")
    const miniDiv = document.createElement("div")
    miniDiv.classList.add("rounded","py-2","px-3")
    miniDiv.style.setProperty("background-color","#E2F7CB")
    const pUser = document.createElement("p")
    pUser.classList.add("text-sm", "text-teal");
    pUser.innerHTML = user
    const pMessage = document.createElement("p")
    pMessage.classList.add("text-sm" ,"mt-1")
    pMessage.innerHTML = message
    const pTime = document.createElement("p")
    pTime.classList.add("text-right", "text-xs", "text-grey-dark","mt-1")
    miniDiv.appendChild(pUser);
    miniDiv.appendChild(pMessage)
    miniDiv.appendChild(pTime)
    divMessage.appendChild(miniDiv)
    messageWrapper.appendChild(divMessage);
}
// # ~
const chatForm = document.getElementById("chat-form");
console.log("chat ",chatForm)
const socket  = io()
socket.on("message",message => {
    console.log(message)
    creatMessage(message);
    // Scroll
    messageWrapper.scrollTop = messageWrapper.scrollHeight


})



// Message Submit
chatForm.addEventListener("submit",(event) => {
    event.preventDefault()

     const message = event.target[0].value
    // Emit the message to the server
    socket.emit("chatMessage",message)


    return
})



