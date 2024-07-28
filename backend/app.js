const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const ErrorHandler = require("./middlewares/ErrorHandler");
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(ErrorHandler)
app.listen(3000, () => {
    console.log("Server started on port 3000");
});