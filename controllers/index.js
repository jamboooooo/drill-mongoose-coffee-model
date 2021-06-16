const Drink = require("../models/Drink");
const {
    getAllDrinks,
    getInStockDrinks,
    getDrinkById
} = require('./get_drinks')
const deleteDrink  = require('./delete_drinks')
const patchDrink = require('./changed_drinks')
const postDrink = require('./add_drinks')

module.exports = {
    getDrinkById,
    getInStockDrinks,
    getAllDrinks,
    deleteDrink,
    postDrink,
    patchDrink
}
