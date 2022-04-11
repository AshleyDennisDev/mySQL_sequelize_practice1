const express= require("express");
const router = express.Router()

const {User} = require("../models");

router.get("/", async (req, res) => {
    const user = await User.findAll();
    res.json(user);
});

router.post("/", async (req, res) => {
    const values = req.body;
    const createdUser = await User.create(values);
    res.json(createdUser);
})


module.exports = router;