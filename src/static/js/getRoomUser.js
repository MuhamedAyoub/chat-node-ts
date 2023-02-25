
const getRoomUser = (users) => {
    const roomWrapper = document.querySelector("user-wrapper")
    users.forEach(user => {

    const li = document.createElement("div")
    const div3 = document.createElement("div")
    const div4 = document.createElement("div")
    const p2 = document.createElement("p")

    li.classList.add("px-3", "flex", "items-center", "bg-grey-light", "cursor-pointer")
    img.classList.add("h-12", "w-12", "rounded-full")
    div3.classList.add("ml-4" ,"flex-1" ,"border-b" ,"border-grey-lighter" ,"py-4")
    div4.classList.add("flex" ,"items-bottom" ,"justify-between")
    li.appendChild(div2)
    p2.classList.add("text-xs" ,"text-grey-darkest")
    p2.innerHTML = "Last seen 12:45 pm"
    pr.innerHTML = user.username
    div4.appendChild(pr);
    div4.appendChild(p2);
    div3.appendChild(div4)
    li.appendChild(div3)
    roomWrapper.appendChild(li)
    })


}
