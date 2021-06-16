const Drink = require("../models/Drink");

const patchDrink = async (req, res) => {
    try {
        const drink = await Drink.findOneAndUpdate(
            { _id: req.params.id },
            { ...req.body }
        );
        await drink.save();
        res.json("Success change");
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = patchDrink