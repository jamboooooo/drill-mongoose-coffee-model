const { Router } = require('express')
const Drink = require('../models/Drink')
const router = Router()

router.get('/drinks', async(req, res) => {
    const drinks = await Drink.find()
    let arr = []
    drinks.forEach(item => {
        arr.push({ id: item._id, name: item.name, price: item.price })
    });
    res.send(arr)
})

router.get('/drinks/in-stock', async(req, res) => {
    const drinks = await Drink.find({
        avail: true
    })
    res.send(drinks)
})

router.get('/drinks/:id', async(req, res) => {
    const drink = await Drink.findById(req.params.id)
    res.send(drink)
})

router.post('/drinks', async(req, res) => {
    const drink = await new Drink({
        name: req.body.name,
        price: req.body.price,
        avail: req.body.avail,
        cofein: req.body.cofein,
        size: req.body.size,
        describe: req.body.describe
    })
    drink.save()
    res.send('Success added')
})

router.delete('/drinks/:id', async(req, res) => {
    const drink = await Drink.findById(req.params.id)
    drink.delete()
    res.send('success deleted')
})

router.patch('/drinks/:id', async(req, res) => {
    const drink = await Drink.findById(req.params.id)
    drink.name = req.body.name
    drink.price = req.body.price
    drink.avail = req.body.avail
    drink.cofein = req.body.cofein
    drink.size = req.body.size
    drink.describe = req.body.describe
    drink.save()
    res.send(drink)
})

module.exports = router