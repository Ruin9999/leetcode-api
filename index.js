const express = require("express");

const userRouter = require("./src/routes/userRoute");
const questionsRouter = require("./src/routes/questionRoute");
const {PORT} = require("./config");

//Instanciate express application
const app = express();

//Add middleware
//Makes file static for easy access
app.use(express.static("./src/public"));


app.get("/", (req, res) => {
    res.sendFile("index.html");
})

//Add routes
app.use("/api/user", userRouter);
app.use("/api/questions", questionsRouter);

//Starts express application
app.listen(PORT);
