const roomImg = document.querySelector("room-img")
const roomName = document.querySelector("room-name")


const joinRoom = (room) => {
    roomImg.setAttribute("src",`assets/rooms/${room.toLowerCase()}`)
    roomName.innerHTML = room + "Room"
}

