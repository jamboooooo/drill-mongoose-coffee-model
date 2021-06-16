const Drink = require("../models/Drink");

const deleteDrink = async (req, res) => {
    try {
        const drink = await Drink.findById(req.params.id);
        drink.delete();
        res.json("success deleted");
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = deleteDrink