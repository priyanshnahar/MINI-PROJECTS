const express = require('express');
const app = express();
const PORT = 5000;
const connectToDB = require("./db/index")
const router = require("./routes/book");
const cors = require("cors");

connectToDB();

app.use(express.json());
app.use(cors());
app.use("/books", router);



app.listen(PORT, function(){
    console.log("server is listening on port " + PORT)
})