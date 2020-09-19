const router = require('express').Router();
const Car = require("../models/car");

router.get("/", async (req, res) => {
    try {
        const cars = await Car.find().populate("user");
        res.status(200).json(cars)
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post("/", (req, res) => {
    const car = req.body;
    Car
        .create(car)
        .then((newCar) => res.status(201).json(newCar))
        .catch((err) => res.status(500).json(error))
        ;
})



module.exports = router; 