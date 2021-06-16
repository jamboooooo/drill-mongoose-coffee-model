const express = require("express");
const mongoose = require("mongoose");
const mongoLink = require("./config");
const app = express();

const start = async() => {
    try {
        await mongoose.connect(mongoLink, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("Success connect mongo server");
    } catch (e) {
        console.log(e.message);
    }
};
start();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/index"));

app.listen(3000, () => {
    console.log("Success connect server");
});