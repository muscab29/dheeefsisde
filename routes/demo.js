import express from "express";
import {registereDemo , getDemos} from "../controllers/demo.js"
import authorizeDemo from "../middleware/authorizeDemo.js";
const Router = express.Router();

Router.route("/demo").post(registereDemo).get( authorizeDemo(['admin','superAdmin']), getDemos);



export default Router;
