const router = require("express").Router();
const User = require("../models/user");
const user = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = req.body;
    const newUser = await User.create(user);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.patch("/:id", async (req, res) => {
  try {
    const number = req.body;
    const id = req.params.id;
    const userUpdated = await User.findByIdAndUpdate(
      id,
      { 
        $push: {
          phoneNumbers: number
         }
      }
    );
    res.status(200).json(userUpdated);

  } catch (error) {
    res.status(500).json(error);
  }
})


module.exports = router;
