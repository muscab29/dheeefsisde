import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import errorHandlerMiddleware from "./middleware/errorHandler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import connectDB from "./configs/db.js";
import authRouter from "./routes/authRouter.js";
import demo from "./routes/demo.js"
import purchase from "./routes/purchase.js"
import auth from "./middleware/auth.js";
dotenv.config({ path: "./configs/config.env" });
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/demoRoute", demo);
app.use("/api/v1/purchaseRoute", purchase);
console.log("muscab");

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

connectDB();
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
