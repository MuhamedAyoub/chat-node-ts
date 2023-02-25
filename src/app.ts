import express from "express";
import * as http from "http";
import HomeRouter from "./routes/Home.js"
import ChatRouter from "./routes/Chat.js"
import path from "path";
import socker from "./socker/sockerController.js"
import dotenv from "dotenv"
//TODO Utls Functions



// Create Server

const app = express();
const server = http.createServer(app)
const dirPath = path.resolve("src");

// Apply middleware
app.set("views",dirPath + "/views");
app.set("view engin","pug");
app.use(express.json());
app.use(express.static(  dirPath + "/static"))
dotenv.config()
// Use Routes
app.use("/pug",(req,res) => {
    res.render("ppg.pug")
})
app.use(HomeRouter);
app.use("/chat",ChatRouter);

// Use Socket
socker(server);
const PORT  = 3000 || process.env.PORT

server.listen(PORT , () => {
    console.log('SERVER RUNNING ON PORT ', PORT);
})





