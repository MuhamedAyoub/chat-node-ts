import path from  "path"

export const sendChatPage = async (req:any,res:any)=> {
    const htmlFile:String = path.resolve("src","views","chat.html");
    res.sendFile(htmlFile);

}