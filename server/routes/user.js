const express= require("express");
const router = express.Router()

const {User} = require("../models");

router.get("/", async (req, res) => {
    const user = User.findAll();
    res.json(user);
});

router.post("/"), async (req, res) => {
    const values = req.body;
    const createdUser = await User.create(values);
    res.json(createdUser);
}
// router.get("/insert", (req,res) => {
//     User.create({
//         firstName:"Emma",
//         lastName:"Richards",
//         age: 4,
//     })
//     .catch((err) => {
//         if (err) {
//             console.log(err);
//         }
//     })
//     res.send("insert");
// })

module.exports = router;