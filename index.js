const express = require("express");
const path = require("path");

const {PORT} = require("./config");

//Instanciate express application
const app = express();

app.use(express.static("./src/public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

//Add routes
const userRouter = require("./src/routes/user");
app.use("/user", userRouter);

//Starts express application
app.listen(PORT);
