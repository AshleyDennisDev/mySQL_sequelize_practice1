const express = require("express");
const app= express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const db = require("./models");

const user = require("./routes/user")
app.use("/user", user)

db.sequelize
    .sync()
    .then(()=> {
    app.listen(process.env.PORT || 3001, () => {
        console.log("Server is started")
    })
})
.catch((err) => {
    console.log(`Error connecting : ${err.message}`)
})