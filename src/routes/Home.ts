import express from "express"
import {sendHomePage} from "../controllers/homePageHandler.js";


const router = express.Router()

/**
     * Get The Home Page
     * @GET
*/
router.get("/",sendHomePage);



export default router
