const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    avail: {
        type: Boolean,
        required: true,
    },
    cofein: {
        type: Boolean,
        required: true,
    },
    size: {
        type: Number,
        requred: true,
        defoult: 40,
    },
    describe: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Drink", drinkSchema);