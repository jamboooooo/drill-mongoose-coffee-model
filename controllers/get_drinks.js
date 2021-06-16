const Drink = require("../models/Drink");

const getAllDrinks = async (req, res) => {
    const drinks = await Drink.find({}, { name: true, price: true });
    res.json(drinks);
};

const getInStockDrinks = async (req, res) => {
    const drinks = await Drink.find({
        avail: true,
    });
    res.json(drinks);
};

const getDrinkById = async (req, res) => {
    const drink = await Drink.findById(req.params.id);
    res.json(drink);
};

module.exports = {
    getAllDrinks,
    getInStockDrinks,
    getDrinkById,
};
