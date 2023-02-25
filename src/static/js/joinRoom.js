const joinRoom = (room) => {
    const roomWrapper = document.getElementsByClassName("room-wrapper")

    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const div4 = document.createElement("div")
    const div5 = document.createElement("div")
    const img = document.createElement("img")
    const pr = document.createElement("p")
    const p2 = document.createElement("p")

    div1.classList.add("px-3", "flex", "items-center", "bg-grey-light", "cursor-pointer")
    img.classList.add("h-12", "w-12", "rounded-full")
    img.setAttribute("src",`assets/rooms/${room.toLowerCase()}.png`)
    div3.classList.add("ml-4" ,"flex-1" ,"border-b" ,"border-grey-lighter" ,"py-4")

    div2.appendChild(img)
    div1.appendChild(div2)
    div1.appendChild(div3)

}
/*
*
*
*
* <div class="px-3 flex items-center bg-grey-light cursor-pointer">
                        <div><img class="" src="assets/rooms/python.png"/></div>
                        <div class="">
                            <div class="flex items-bottom justify-between">
                                <p class="text-grey-darkest">Python Rooms</p>
                                <p class="text-xs text-grey-darkest">12:45 pm</p>
                            </div>
                            <p class="text-grey-dark mt-1 text-sm">Get Andr&eacute;s on this movie ASAP!</p>
                        </div>
                    </div>
                    <div class="bg-white px-3 flex items-center cursor-pointer hover:bg-gradient-to-r">
                        <div><img class="h-12 w-12 rounded-full" src="assets/rooms/java.png"/></div>
                        <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                            <div class="flex items-bottom justify-between">
                                <p class="text-grey-darkest">Java Room</p>
                                <p class="text-xs text-grey-darkest">12:45 pm</p>
                            </div>
                            <p class="text-grey-dark mt-1 text-sm">I&apos;ll be back</p>
                        </div>
                    </div>
                    <div class="bg-white px-3 flex items-center cursor-pointer hover:bg-gradient-to-r">
                        <div><img class="h-12 w-12 rounded-full" src="assets/rooms/go.png"/></div>
                        <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                            <div class="flex items-bottom justify-between">
                                <p class="text-grey-darkest">Golang Room</p>
                                <p class="text-xs text-grey-darkest">12:45 pm</p>
                            </div>
                            <p class="text-grey-dark mt-1 text-sm">Hold the line!</p>
                        </div>
                    </div>
                    <div class="bg-white px-3 flex items-center cursor-pointer hover:bg-gradient-to-r">
                        <div><img class="h-12 w-12 rounded-full" src="assets/rooms/js.png"/></div>
                        <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                            <div class="flex items-bottom justify-between">
                                <p class="text-grey-darkest">Js Room</p>
                                <p class="text-xs text-grey-darkest">12:45 pm</p>
                            </div>
                            <p class="bg-gradient-to-r mt-1 text-sm">Text Me</p>
                        </div>
                    </div>
* */