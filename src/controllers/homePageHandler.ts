import path from  "path"

export const sendHomePage = async (req:any,res:any)=> {
    const htmlFile:String = path.resolve("src","views","index.html");
    console.log("This home",htmlFile)
    res.sendFile(htmlFile);

}