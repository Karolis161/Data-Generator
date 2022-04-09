const express = require('express');
const router = express.Router();
const abc = 5;
const { faker } = require('@faker-js/faker');
const Card = require("../models/card");

//Generate Credit Card GET Request
router.get('/generateCard', async (req, res) => {
    try {
        const Cards = await Card.find({}).lean();
        res.render('generateCard', {
            card: req.card,
            cardData: Cards
        });
    } catch (err) {
        console.log(err);
    }
})

//Delete Credit Card GET Request
router.get('/deleteCard', async (req, res) => {
    try {
        const Cards = await Paragraph.find({}).lean();
        res.render('generateCard', {
            card: req.card,
            cardData: Cards
        });
    } catch (err) {
        console.log(err);
    }
})

//Generate Credit Card POST Request
router.post('/generateCard', async (req, res) => {
    for (let i = 0; i < abc; i++) {
        const mastercard = faker.helpers.replaceCreditCardSymbols('[50-55]##############');
        const visa = faker.helpers.replaceCreditCardSymbols('4###############');
        const month = faker.helpers.replaceCreditCardSymbols('[01-12]');
        const year = faker.helpers.replaceCreditCardSymbols('20[22-30]');
        const cvv = faker.helpers.replaceCreditCardSymbols('###');

        const newCard = await Card.create({
            mastercard: mastercard,
            visa: visa,
            month: month,
            year: year,
            cvv: cvv
        });
    }
    res.redirect('/generateCard/generateCard');
})

//Delete Credit Card POST Request
router.post('/deleteCard', async (req, res) => {
    try {
        await Card.deleteMany({});
        res.redirect('/generateCard/generateCard');
    } catch (err) {
        console.log(err);
    }
})
module.exports = router;