import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
const app = express();

app.use(express.json());
app.use("/api/user", router);
router.post("/signup", )

// app.use("/api", (req, res, next) => {
//     res.send("Hello World")
// });

mongoose
  .connect(
    "mongodb+srv://admin:321654@cluster0.4ewgcyn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(8000))
  .then(() => console.log("Connected to mongodb server"))
  .catch((err) => console.log(err));

  