import express from "express";
import {registerPurchase} from "../controllers/purchase.js"
const Router = express.Router();

Router.route("/purchase").post(registerPurchase);



export default Router;