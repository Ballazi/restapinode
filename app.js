const express = require("express");
const app = express();
const cors = require("cors");
const postRouter = require("./routes/post");
app.use(cors());
app.use(express.json());

app.use("/api/v1/home",postRouter);




module.exports = app;