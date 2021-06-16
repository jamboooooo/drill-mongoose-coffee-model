const Drink = require('../models/Drink')

const getAllDrinks = async(req, res) => {
    const drinks = await Drink.find({}, { name: true, price: true });
    res.json(drinks);
}

const getInStockDrinks = async(req, res) => {
    const drinks = await Drink.find({
        avail: true,
    });
    res.json(drinks);
}

const getDrinkById = async(req, res) => {
    const drink = await Drink.findById(req.params.id);
    res.json(drink);
}

const postDrink = async(req, res) => {
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
}

const deleteDrink = async(req, res) => {
    try {
        const drink = await Drink.findById(req.params.id);
        drink.delete();
        res.json("success deleted");
    } catch (e) {
        console.log(e.message);
    }
}

const patchDrink = async(req, res) => {
    try {
        const drink = await Drink.findOneAndUpdate({ _id: req.params.id }, {...req.body })
        await drink.save()
        res.json('Success change');
    } catch (e) {
        console.log(e.message);
    }
}

module.exports = { getAllDrinks, getInStockDrinks, getDrinkById, postDrink, deleteDrink, patchDrink }