
const roomClass = document.getElementsByClassName('room');


for(let i =  0 ; i < roomClass.length ; i++) {
    roomClass[i]?.addEventListener('click',() => {
        for(let j = 0 ; i < roomClass.length ; j++) {
            roomClass[j]?.classList.remove("focus");
        }
        roomClass[i]?.classList.add("focus")
    })
}


