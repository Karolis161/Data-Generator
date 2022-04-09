const express = require('express');
const router = express.Router();
const abc = 1;
const { faker } = require('@faker-js/faker');
const faker_de = require('@faker-js/faker/locale/de');
const faker_fr = require('@faker-js/faker/locale/fr');
const faker_ja = require('@faker-js/faker/locale/ja');
const faker_pl = require('@faker-js/faker/locale/pl');
const faker_ru = require('@faker-js/faker/locale/ru');
const faker_en_GB = require('@faker-js/faker/locale/en_GB');
const faker_en_US = require('@faker-js/faker/locale/en_US');
const User = require("../models/users");

//Default GET Request
router.get('/', (req, res) => {
  res.render('welcome');
})

//Go Back GET Request
router.get('/goBack', async (req, res) => {
  try {
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
})

//Generate Default Address GET Request
router.get('/generate', async (req, res) => {
  try {
    const Users = await User.find({}).lean();
    res.render('generateAddress', {
      user: req.user,
      userData: Users
    });
  } catch (err) {
    console.log(err);
  }
})

//Generate JP Address GET Request
router.get('/generateJA', async (req, res) => {
  try {
    const Users = await User.find({}).lean();
    res.render('generateAddress', {
      user: req.user,
      userData: Users
    });
  } catch (err) {
    console.log(err);
  }
})

//Generate DE Address GET Request
router.get('/generateDE', async (req, res) => {
  try {
    const Users = await User.find({}).lean();
    res.render('generateAddress', {
      user: req.user,
      userData: Users
    });
  } catch (err) {
    console.log(err);
  }
})

//Generate FR Address GET Request
router.get('/generateFR', async (req, res) => {
  try {
    const Users = await User.find({}).lean();
    res.render('generateAddress', {
      user: req.user,
      userData: Users
    });
  } catch (err) {
    console.log(err);
  }
})

//Generate PL Address GET Request
router.get('/generatePL', async (req, res) => {
  try {
    const Users = await User.find({}).lean();
    res.render('generateAddress', {
      user: req.user,
      userData: Users
    });
  } catch (err) {
    console.log(err);
  }
})

//Generate RU Address GET Request
router.get('/generateRU', async (req, res) => {
  try {
    const Users = await User.find({}).lean();
    res.render('generateAddress', {
      user: req.user,
      userData: Users
    });
  } catch (err) {
    console.log(err);
  }
})

//Generate UK Address GET Request
router.get('/generateUK', async (req, res) => {
  try {
    const Users = await User.find({}).lean();
    res.render('generateAddress', {
      user: req.user,
      userData: Users
    });
  } catch (err) {
    console.log(err);
  }
})

//Generate US Address GET Request
router.get('/generateUS', async (req, res) => {
  try {
    const Users = await User.find({}).lean();
    res.render('generateAddress', {
      user: req.user,
      userData: Users
    });
  } catch (err) {
    console.log(err);
  }
})

//Generate Default Address POST Request
router.post('/generate', async (req, res) => {
  for (let i = 0; i < abc; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const street = faker.address.streetAddress();
    const city = faker.address.city();
    const state = faker.address.state();
    const zipcode = faker.address.zipCode();
    const phonenumber = faker.phone.phoneNumber();

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      state: state,
      zipCode: zipcode,
      phoneNumber: phonenumber
    });
  }
  res.redirect('/generate');
})

//Generate JP Address POST Request
router.post('/generateJA', async (req, res) => {
  for (let i = 0; i < abc; i++) {
    const firstName = faker_ja.name.firstName();
    const lastName = faker_ja.name.lastName();
    const street = faker_ja.address.streetAddress();
    const city = faker_ja.address.city();
    const state = faker_ja.address.state();
    const zipcode = faker_ja.address.zipCode();
    const phonenumber = faker_ja.phone.phoneNumber();

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      state: state,
      zipCode: zipcode,
      phoneNumber: phonenumber
    });
  }
  res.redirect('/generate');
})

//Generate DE Address POST Request
router.post('/generateDE', async (req, res) => {
  for (let i = 0; i < abc; i++) {
    const firstName = faker_de.name.firstName();
    const lastName = faker_de.name.lastName();
    const street = faker_de.address.streetAddress();
    const city = faker_de.address.city();
    const state = faker_de.address.state();
    const zipcode = faker_de.address.zipCode();
    const phonenumber = faker_de.phone.phoneNumber();

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      state: state,
      zipCode: zipcode,
      phoneNumber: phonenumber
    });
  }
  res.redirect('/generate');
})

//Generate FR Address POST Request
router.post('/generateFR', async (req, res) => {
  for (let i = 0; i < abc; i++) {
    const firstName = faker_fr.name.firstName();
    const lastName = faker_fr.name.lastName();
    const street = faker_fr.address.streetAddress();
    const city = faker_fr.address.city();
    const state = faker_fr.address.state();
    const zipcode = faker_fr.address.zipCode();
    const phonenumber = faker_fr.phone.phoneNumber();

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      state: state,
      zipCode: zipcode,
      phoneNumber: phonenumber
    });
  }
  res.redirect('/generate');
})

//Generate PL Address POST Request
router.post('/generatePL', async (req, res) => {
  for (let i = 0; i < abc; i++) {
    const firstName = faker_pl.name.firstName();
    const lastName = faker_pl.name.lastName();
    const street = faker_pl.address.streetAddress();
    const city = faker_pl.address.city();
    const state = faker_pl.address.state();
    const zipcode = faker_pl.address.zipCode();
    const phonenumber = faker_pl.phone.phoneNumber();

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      state: state,
      zipCode: zipcode,
      phoneNumber: phonenumber
    });
  }
  res.redirect('/generate');
})

//Generate RU Address POST Request
router.post('/generateRU', async (req, res) => {
  for (let i = 0; i < abc; i++) {
    const firstName = faker_ru.name.firstName();
    const lastName = faker_ru.name.lastName();
    const street = faker_ru.address.streetAddress();
    const city = faker_ru.address.city();
    const state = faker_ru.address.state();
    const zipcode = faker_ru.address.zipCode();
    const phonenumber = faker_ru.phone.phoneNumber();

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      state: state,
      zipCode: zipcode,
      phoneNumber: phonenumber
    });
  }
  res.redirect('/generate');
})

//Generate UK Address POST Request
router.post('/generateUK', async (req, res) => {
  for (let i = 0; i < abc; i++) {
    const firstName = faker_en_GB.name.firstName();
    const lastName = faker_en_GB.name.lastName();
    const street = faker_en_GB.address.streetAddress();
    const city = faker_en_GB.address.city();
    const state = faker_en_GB.address.state();
    const zipcode = faker_en_GB.address.zipCode();
    const phonenumber = faker_en_GB.phone.phoneNumber();

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      state: state,
      zipCode: zipcode,
      phoneNumber: phonenumber
    });
  }
  res.redirect('/generate');
})

//Generate US Address POST Request
router.post('/generateUS', async (req, res) => {
  for (let i = 0; i < abc; i++) {
    const firstName = faker_en_US.name.firstName();
    const lastName = faker_en_US.name.lastName();
    const street = faker_en_US.address.streetAddress();
    const city = faker_en_US.address.city();
    const state = faker_en_US.address.state();
    const zipcode = faker_en_US.address.zipCode();
    const phonenumber = faker_en_US.phone.phoneNumber();

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      state: state,
      zipCode: zipcode,
      phoneNumber: phonenumber
    });
  }
  res.redirect('/generate');
})
module.exports = router;