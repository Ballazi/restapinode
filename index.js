const app = require("./app");
const mongoose = require("mongoose");
require("dotenv/config");


mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser : true}, ()=>{console.log('Connected to DB!');})



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {console.log("Server started at port number ",PORT);})