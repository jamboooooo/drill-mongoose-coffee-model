const Drink = require("../models/Drink");

const postDrink = async (req, res) => {
    try {
        const drink = await new Drink({
            name: req.body.name,
            price: req.body.price,
            avail: req.body.avail,
            cofein: req.body.cofein,
            size: req.body.size,
            describe: req.body.describe,
        });
        drink.save();
        res.json("Success added");
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = postDrink