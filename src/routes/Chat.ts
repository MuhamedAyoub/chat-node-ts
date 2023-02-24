import express from "express"
import {sendChatPage} from "../controllers/chatPageHandler.js";


const router = express.Router()

/**
 * Get The Chat Page
 * @GET
 */
router.get("/",sendChatPage);



export default router