const express = require('express');
const router = express.Router();
const abc = 5;
const { faker } = require('@faker-js/faker');
const Paragraph = require("../models/paragraph");

//Generate Paragraph GET Request
router.get('/generateParagraph', async (req, res) => {
    try {
        const Paragraphs = await Paragraph.find({}).lean();
        res.render('generateParagraph', {
            paragraph: req.paragraph,
            paragraphData: Paragraphs
        });
    } catch (err) {
        console.log(err);
    }
})

//Delete Paragraph GET Request
router.get('/deleteParagraph', async (req, res) => {
    try {
        const Paragraphs = await Paragraph.find({}).lean();
        res.render('generateParagraph', {
            paragraph: req.paragraph,
            paragraphData: Paragraphs
        });
    } catch (err) {
        console.log(err);
    }
})

//Generate Paragraph POST Request
router.post('/generateParagraph', async (req, res) => {
    for (let i = 0; i < abc; i++) {
        const paragraph = faker.lorem.paragraphs();

        const newParagraph = await Paragraph.create({
            paragraph: paragraph,
        });
    }
    res.redirect('/generateParagraph/generateParagraph');
})

//Delete Paragraph POST Request
router.post('/deleteParagraph', async (req, res) => {
    try {
        await Paragraph.deleteMany({});
        res.redirect('/generateParagraph/generateParagraph');
    } catch (err) {
        console.log(err);
    }
})
module.exports = router;