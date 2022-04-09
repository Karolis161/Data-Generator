const express = require('express');
const router = express.Router();
const abc = 5;
const { faker } = require('@faker-js/faker');
const Sentence = require("../models/sentence");

//Generate Sentence GET Request
router.get('/generateSentence', async (req, res) => {
    try {
        const Sentences = await Sentence.find({}).lean();
        res.render('generateSentence', {
            sentence: req.user,
            sentenceData: Sentences
        });
    } catch (err) {
        console.log(err);
    }
})

//Delete Sentence GET Request
router.get('/deleteSentence', async (req, res) => {
    try {
        const Sentences = await Sentence.find({}).lean();
        res.render('generateSentence', {
            sentence: req.user,
            sentenceData: Sentences
        });
    } catch (err) {
        console.log(err);
    }
})

//Generate Sentence POST Request
router.post('/generateSentence', async (req, res) => {
    for (let i = 0; i < abc; i++) {
        const sentence = faker.lorem.sentences();

        const newSentence = await Sentence.create({
            sentence: sentence
        });
    }
    res.redirect('/generateSentence/generateSentence');
})

//Delete Sentence POST Request
router.post('/deleteSentence', async (req, res) => {
    try {
        await Sentence.deleteMany({});
        res.redirect('/generateSentence/generateSentence');
    } catch (err) {
        console.log(err);
    }
})
module.exports = router;