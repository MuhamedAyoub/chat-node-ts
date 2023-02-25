const creatMessage = (data) => {
    const divMessage = document.createElement("div");
    divMessage.classList.add("flex","mb-2")
    const miniDiv = document.createElement("div")
    miniDiv.classList.add("rounded","py-2","px-3")
    miniDiv.style.setProperty("background-color","#E2F7CB")
    const pUser = document.createElement("p")
    pUser.classList.add("text-sm", "text-teal");
    pUser.innerHTML = data?.username || ""
    const pMessage = document.createElement("p")
    pMessage.classList.add("text-sm" ,"mt-1")
    pMessage.innerHTML = data?.text || ""
    const pTime = document.createElement("p")
    pTime.classList.add("text-right", "text-xs", "text-grey-dark","mt-1")
    pTime.innerHTML = data.time || ""
    miniDiv.appendChild(pUser);
    miniDiv.appendChild(pMessage)
    miniDiv.appendChild(pTime)
    divMessage.appendChild(miniDiv)
    messageWrapper.appendChild(divMessage);
}
