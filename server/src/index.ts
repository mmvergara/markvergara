import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import helmet from "helmet";
import bodyParser from "body-parser";
import { limiter } from "./utilities/apiLimiter";
import { ErrorHandling } from "./utilities/errorHandling";
import { deleteAll, deleteById, getMessages, helloWorld, sendMessage } from "./controllers";
import { MONGODB_URI } from "./config";

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", helloWorld);
app.post("/getmessages", getMessages);
app.put("/sendmessage", limiter, sendMessage);

app.delete("/delete/all", deleteAll);
app.delete("/delete/id/:messageId",deleteById)
//Error Handling Middleware
app.use(ErrorHandling);

mongoose.connect(MONGODB_URI).then(() => {
  const port = process.env.PORT || 8080;
  app.listen(port);
  console.log("Listening on Port " + port);
});
