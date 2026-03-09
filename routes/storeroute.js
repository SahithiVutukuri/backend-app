import express from "express"
import { showProducts } from "../controllers/storecontroller.js";
const storerouter = express.Router()

storerouter.get("/",showProducts)

export {storerouter}