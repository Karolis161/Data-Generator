const express = require('express');
const router = express.Router();
const User = require("../models/users");

//Address Deletetion GET Request
router.get('/delete', async (req, res) => {
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

//All Addresses Deletion GET Request
router.get('/deleteAll', async (req, res) => {
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

//Specific Address Deletion GET Request
router.get('/delete/:id', async (req, res) => {
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

//All Addresses Deletion POST Request
router.post('/deleteAll', async (req, res) => {
  try {
    await User.deleteMany({});
    res.redirect('/deleteAddress/delete');
  } catch (err) {
    console.log(err);
  }
})

//Specific Address Deletion POST Request
router.post('/delete/:id', async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.redirect('/deleteAddress/delete');
  } catch (err) {
    console.log(err);
  }
})
module.exports = router;